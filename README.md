# UniDocs: Sistema Acadêmico com Document Store

  O UniDocs é um modelo de banco de dados NoSQL baseado no formato Document Store para gerenciar informações acadêmicas de uma instituição de ensino superior. Este projeto é uma extensão do modelo relacional desenvolvido no semestre anterior, adaptado para o ambiente NoSQL, garantindo flexibilidade e escalabilidade no armazenamento e consulta de dados.


## Integrantes
<table>
  <tr>
    <th>Nome Aluno</th>
    <th>RA</th>
  </tr>
  <tr>
    <td>Bruna Paz</td>
    <td>22121020-6</td>
  </tr>
  <tr>
    <td>Kaique Da Silva Fernandes</td>
    <td>22221011-4</td>
  </tr>
  <tr>
    <td>Matheus Miranda Vieira</td>
    <td>22220017-2</td>
  </tr>
</table>

:triangular_flag_on_post: Observação: Devido a inatividade, a instancia do projeto utilizado no semestre anterior foi perdida, então nosso enfoque foi desenvolver um pequeno script em Python capaz de receber comandos de inserção em SQL e convertê-los automaticamente para o formato de inserções compatíveis com o banco Document Store.


## Como Executar?

1. Para começar, você deve clonar o respositório.
```sh
$ git clone https://github.com/PazBruna/UniDocs.git
```

2. Garanta que o python esteja instalado em sua maquina.
```sh
$ python --version
```

3. Agora, execute o arquivo main.py
```sh
$ python main.py
```
❗ Se tudo tiver dado certo, um arquivo nomeado "insertsTraduzidosMongo" terá sido gerado, na mesma pasta, contendo os inserts traduzidos

## Descrição Collections

### 1. Departamento
A coleção departamento armazena informações sobre os departamentos da instituição, como nome, orçamento, prédio alocado e detalhes do chefe do departamento.

Exemplo de Documento:
```json
  {
    "nome_dept": "Ciências da Computação",
    "Orcamento": 1000000.00,
    "Predio": "Prédio A",
    "chefe": {
        "RA": "123",
        "Nome": "Prof. João",
        "Email": "joao@email.com",
        "Salario": 15000.00
    }
}
```
#### Campos:
- `nome_dept:` Nome do departamento.
- `Orcamento:` Orçamento alocado ao departamento.
- `Predio:` Prédio onde o departamento está localizado.
- `chefe:` Objeto contendo dados do professor chefe do departamento, incluindo RA, nome, e-mail e salário.

### 2. Professor
A coleção professor contém informações sobre os professores, incluindo seus dados pessoais e o departamento ao qual pertencem.

Exemplo de Documento:
```json
  {
    "RA": "123",
    "CPF": "111.111.111-11",
    "Nome": "João Silva",
    "Email": "joao@email.com",
    "Salario": 15000.00,
    "nome_dept": "Ciências da Computação"
}

```
#### Campos:
- `RA:` Registro Acadêmico do professor (identificador único).
- `CPF:` Documento pessoal do professor.
- `Nome:` Nome completo do professor.
- `Email:` Endereço de e-mail do professor.
- `Salario:` Valor do salário do professor.
- `nome_dept:` Nome do departamento ao qual o professor pertence.

 
 ### 3. Curso
A coleção curso armazena informações sobre os cursos oferecidos, associando-os aos departamentos responsáveis.

Exemplo de Documento:
```json
  {
    "curso_id": "C01",
    "nome_curso": "Engenharia de Software",
    "nome_dept": "Ciências da Computação"
}
```
#### Campos:
- `curso_id:` Identificador único do curso.
- `nome_curso:` Nome do curso.
- `nome_dept:` Departamento ao qual o curso pertence.

 ### 4. Aluno 
A coleção aluno guarda dados pessoais dos estudantes, bem como a referência ao curso em que estão matriculados.

Exemplo de Documento:
```json
 {
    "RA": "A001",
    "CPF": "333.333.333-33",
    "Nome": "Carlos Souza",
    "Email": "carlos@email.com",
    "curso_id": "C01"
}

```
#### Campos:
- `RA:` Registro Acadêmico do aluno (identificador único).
- `CPF:` Documento pessoal do aluno.
- `Nome:` Nome completo do aluno.
- `Email:` Endereço de e-mail do aluno.
- `curso_id:` Identificador do curso em que o aluno está matriculado.


 ### 5. Materia
A coleção materia representa as disciplinas, vinculando-as aos departamentos e cursos relacionados.

Exemplo de Documento:
```json
 {
    "materia_id": "M01",
    "nome_materia": "Matemática Discreta",
    "nome_dept": "Ciências da Computação",
    "curso_id": "C01"
}
```
#### Campos:
- `materia_id:` Identificador único da matéria.
- `nome_materia:` Nome da disciplina.
- `nome_dept:` Nome do departamento responsável pela matéria.
- `curso_id:` Identificador do curso que inclui a matéria.


 ### 6. Cursando
A coleção cursando rastreia as disciplinas que os alunos estão cursando ou já cursaram, incluindo notas e status.

Exemplo de Documento:
```json
{
    "RA": "A001",
    "materia_id": "M01",
    "Semestre": "2024.1",
    "Ano": 2024,
    "Nota": 9.0,
    "status": "Aprovado"
}
```
#### Campos:
- `RA:` Registro do aluno que está cursando a disciplina.
- `materia_id:` Identificador da matéria cursada.
- `Semestre:` Semestre em que a disciplina foi cursada.
- `Ano:` Ano correspondente ao semestre.
-`Nota:` Nota final obtida na disciplina.
- `status:` Status do aluno na matéria (ex.: "Aprovado" ou "Reprovado").
  
 ### 7. Leciona
A coleção leciona rastreia as disciplinas ministradas por cada professor, incluindo o semestre e status da atividade.

Exemplo de Documento:
```json
{
    "RA_Prof": "123",
    "materia_id": "M01",
    "Semestre": "2024.1",
    "Ano": 2024,
    "status": "Ativo"
}
```
#### Campos:
- `RA_Prof:` Registro Acadêmico do professor que ministra a disciplina.
- `materia_id:` Identificador da matéria ministrada.
- `Semestre:` Semestre em que a disciplina foi lecionada.
- `Ano:` Ano correspondente ao semestre.
- `status:` Status do professor na disciplina (ex.: "Ativo").

 ### 8. Orientador
A coleção orientador registra a relação entre professores orientadores e alunos que participam de grupos de TCC.

Exemplo de Documento:
```json
{
    "aluno_ra": "A001",
    "prof_ra": "123",
    "grupo_id": "G01"
}
```
#### Campos:
- `aluno_ra:` Registro do aluno orientado.
- `prof_ra:` Registro do professor orientador.
- `grupo_id:` Identificador do grupo de TCC.

 ### 9. Matriz Curricular
A coleção matriz_curricular define as disciplinas obrigatórias de cada curso.

Exemplo de Documento:
```json
{
    "curso_id": "C01",
    "materia_id": "M01"
}
```
#### Campos:
- `curso_id:` Identificador do curso.
- `materia_id:` Identificador da matéria pertencente à matriz curricular do curso.

## Crie as Collections, Popule e utilize. 🚀

- Para criar as collections, rode os comandos contidos no arquivo `collection.js` na pasta `NoSQL`.
- Para popular as collections com os documentos, rode os comandos contidos no arquivo `ìnserts.js` na pasta `NoSQL`.
- Uma vez que as collections tiverem sido criadas e populadas corretamente, rode individualmente, cada uma das queries contidas no arquivo `queries.js` na pasta `NoSQL`.
