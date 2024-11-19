import re
import os

def sql_to_mongo(input_file, output_file_name):
    """
    Converte comandos INSERT INTO em SQL para o formato MongoDB.
    Garante que o JSON gerado seja válido e utilizável no MongoDB.
    """
    try:
        with open(input_file, 'r') as file:
            lines = file.readlines()
    except FileNotFoundError:
        print(f"Erro: Arquivo '{input_file}' não encontrado.")
        return None

    inserts_by_collection = {}

    for line in lines:
        print(f"Processando linha: {line.strip()}")

        # Detecta o nome da coleção e os valores
        values_match = re.search(
            r"INSERT INTO\s+(\w+)\s*\((.*?)\)\s*VALUES\s*\((.*?)\);",
            line,
            re.IGNORECASE
        )
        if values_match:
            collection_name = values_match.group(1).lower()
            fields = [f.strip() for f in values_match.group(2).split(",")]
            raw_values = values_match.group(3).split(",")
            values = []

            for v in raw_values:
                v = v.strip()
                # Determina se o valor é string ou número
                if v.startswith("'") and v.endswith("'"):
                    values.append('"' + v.strip("'") + '"')  # Remove aspas simples e mantém como string
                elif re.match(r"^\d+(\.\d+)?$", v):
                    values.append(v)  # Deixa números como estão
                else:
                    values.append('"' + v + '"')  # Valor genérico tratado como string

            document = ", ".join(f'"{fields[i]}": {values[i]}' for i in range(len(fields)))

            if collection_name not in inserts_by_collection:
                inserts_by_collection[collection_name] = []
            inserts_by_collection[collection_name].append(f"{{ {document} }}")
        else:
            print(f"Regex falhou ao processar a linha: {line.strip()}")

    if not inserts_by_collection:
        print("Nenhum insert encontrado no arquivo.")
        return None

    # Se o arquivo já existe, remove antes de sobrescrever
    if os.path.exists(output_file_name):
        os.remove(output_file_name)
        print(f"O arquivo existente '{output_file_name}' foi removido para sobrescrever.")

    # Escreve os inserts traduzidos no formato insertMany
    with open(output_file_name, 'w') as output_file:
        for collection, documents in inserts_by_collection.items():
            formatted_documents = ",\n\t\t\t    ".join(documents)
            insert_many_statement = f"db.{collection}.insertMany([\n\t\t\t    {formatted_documents}\n\t\t\t]);\n"
            output_file.write(insert_many_statement)

    return output_file_name

def main():
    """
    Ponto de entrada do script. Processa o arquivo `insertsOrigem.txt` e gera os comandos MongoDB.
    """
    input_file = "insertsOrigem.txt"  # Nome do arquivo de entrada
    output_file_name = "insertsTraduzidosMongo.js"  # Nome do arquivo de saída

    # Converte os inserts SQL para o formato MongoDB
    output_file = sql_to_mongo(input_file, output_file_name)

    if output_file is None:
        print("Erro durante a conversão. Verifique o arquivo de entrada.")
        return

    print(f"Os inserts traduzidos foram salvos em: {output_file}")

if __name__ == "__main__":
    main()
