//Departamento:
db.departamento.insertMany([
    {
        nome_dept: "Computacao",
        Orcamento: 50000,
        Predio: "Predio K",
        chefe: null // chefe_ra é representado como null aqui
    },
    {
        nome_dept: "Engenharia",
        Orcamento: 30000,
        Predio: "Predio J",
        chefe: null
    },
    {
        nome_dept: "Matematica",
        Orcamento: 40000,
        Predio: "Predio I",
        chefe: null
    },
    {
        nome_dept: "Administracao",
        Orcamento: 15000,
        Predio: "Predio A",
        chefe: null
    }
]);

//Professor:
db.professor.insertMany([
    { RA: "RA001", CPF: "862.459.371-91", Nome: "Nina Barbosa", Email: "nbarbosa@fei.com", Salario: 9611, nome_dept: "Administracao" },
    { RA: "RA002", CPF: "903.421.568-70", Nome: "Sr. Yan Barbosa", Email: "syan@fei.com", Salario: 5937, nome_dept: "Administracao" },
    { RA: "RA003", CPF: "196.354.270-34", Nome: "Caue da Cunha", Email: "cda@fei.com", Salario: 5433, nome_dept: "Computacao" },
    { RA: "RA004", CPF: "956.783.201-30", Nome: "Caroline Sousa", Email: "csousa@fei.com", Salario: 6124, nome_dept: "Matematica" },
    { RA: "RA005", CPF: "945.867.130-20", Nome: "Catarina Correia", Email: "ccorreia@fei.com", Salario: 8434, nome_dept: "Computacao" },
    { RA: "RA006", CPF: "285.697.413-91", Nome: "Raul Abreu", Email: "rabreu@fei.com", Salario: 8330, nome_dept: "Matematica" },
    { RA: "RA007", CPF: "913.780.256-95", Nome: "Rafaela Santos", Email: "rsantos@fei.com", Salario: 11064, nome_dept: "Administracao" },
    { RA: "RA008", CPF: "713.809.456-66", Nome: "Isabelly Campos", Email: "icampos@fei.com", Salario: 13588, nome_dept: "Engenharia" },
    { RA: "RA009", CPF: "075.398.216-12", Nome: "Joana Moraes", Email: "jmoraes@fei.com", Salario: 8228, nome_dept: "Administracao" },
    { RA: "RA010", CPF: "248.301.957-97", Nome: "Davi Miguel Souza", Email: "dmiguel@fei.com", Salario: 13579, nome_dept: "Administracao" },
    { RA: "RA011", CPF: "735.840.192-14", Nome: "Srta. Gabriela Mendes", Email: "sgabriela@fei.com", Salario: 11129, nome_dept: "Administracao" },
    { RA: "RA012", CPF: "870.394.256-29", Nome: "Sara Vargas", Email: "svargas@fei.com", Salario: 11044, nome_dept: "Engenharia" },
    { RA: "RA013", CPF: "984.517.230-04", Nome: "Jade Viana", Email: "jviana@fei.com", Salario: 9957, nome_dept: "Administracao" },
    { RA: "RA014", CPF: "756.918.423-82", Nome: "Lorena Lima", Email: "llima@fei.com", Salario: 4162, nome_dept: "Matematica" },
    { RA: "RA015", CPF: "648.715.903-48", Nome: "Bruna Vargas", Email: "bvargas@fei.com", Salario: 13404, nome_dept: "Computacao" },
    { RA: "RA016", CPF: "280.567.493-65", Nome: "Gabriela da Rocha", Email: "gda@fei.com", Salario: 5018, nome_dept: "Computacao" },
    { RA: "RA017", CPF: "326.179.850-59", Nome: "Breno Borges", Email: "bborges@fei.com", Salario: 11404, nome_dept: "Administracao" },
    { RA: "RA018", CPF: "850.172.643-53", Nome: "Lara Sampaio", Email: "lsampaio@fei.com", Salario: 11149, nome_dept: "Computacao" },
    { RA: "RA019", CPF: "346.708.219-03", Nome: "Joao Miguel Monteiro", Email: "jmiguel@fei.com", Salario: 7540, nome_dept: "Matematica" },
    { RA: "RA020", CPF: "601.528.749-76", Nome: "Isabela Garcia", Email: "igarcia@fei.com", Salario: 7751, nome_dept: "Administracao" },
    { RA: "RA021", CPF: "306.941.582-24", Nome: "Marcos Vinicius Correia", Email: "mvinicius@fei.com", Salario: 9266, nome_dept: "Engenharia" },
    { RA: "RA022", CPF: "924.708.163-78", Nome: "Leandro Siqueira", Email: "lsiqueira@fei.com", Salario: 14836, nome_dept: "Matematica" },
    { RA: "RA023", CPF: "940.126.857-67", Nome: "Benicio Sousa", Email: "bsousa@fei.com", Salario: 9027, nome_dept: "Engenharia" },
    { RA: "RA024", CPF: "547.910.863-84", Nome: "Sr. Thiago Martins", Email: "sthiago@fei.com", Salario: 7650, nome_dept: "Engenharia" },
    { RA: "RA025", CPF: "813.274.905-79", Nome: "Jade Lima", Email: "jlima@fei.com", Salario: 10065, nome_dept: "Engenharia" }
]);

//Update Depois que já houverem professores:
// Atualizando o chefe do departamento "Computacao"
db.departamento.updateOne(
    { nome_dept: "Computacao" },
    { $set: { chefe: "RA003" } }
);

// Atualizando o chefe do departamento "Engenharia"
db.departamento.updateOne(
    { nome_dept: "Engenharia" },
    { $set: { chefe: "RA025" } }
);

// Atualizando o chefe do departamento "Matematica"
db.departamento.updateOne(
    { nome_dept: "Matematica" },
    { $set: { chefe: "RA022" } }
);

// Atualizando o chefe do departamento "Administracao"
db.departamento.updateOne(
    { nome_dept: "Administracao" },
    { $set: { chefe: "RA013" } }
);

//Curso:
db.curso.insertMany([
    { curso_id: "C001", nome_curso: "Ciencia da Computacao", nome_dept: "Computacao" },
    { curso_id: "C002", nome_curso: "Engenharia Mecanica", nome_dept: "Engenharia" },
    { curso_id: "C003", nome_curso: "Engenharia de Producao", nome_dept: "Engenharia" },
    { curso_id: "C004", nome_curso: "Administracao", nome_dept: "Administracao" },
    { curso_id: "C005", nome_curso: "Matematica", nome_dept: "Matematica" },
    { curso_id: "C006", nome_curso: "Engenharia Eletrica", nome_dept: "Engenharia" },
    { curso_id: "C007", nome_curso: "Engenharia Civil", nome_dept: "Engenharia" },
    { curso_id: "C008", nome_curso: "Engenharia Quimica", nome_dept: "Engenharia" },
    { curso_id: "C009", nome_curso: "Engenharia de Controle e Automacao", nome_dept: "Engenharia" },
    { curso_id: "C010", nome_curso: "Engenharia da Computacao", nome_dept: "Computacao" }
]);

//Aluno:
db.aluno.insertMany([
    { RA: "A0001", CPF: "694.830.157-66", Nome: "Barbara Castro", Email: "bcastro@fei.com", curso_id: "C003" },
    { RA: "A0002", CPF: "240.159.783-23", Nome: "Dra. Luisa Oliveira", Email: "dluisa@fei.com", curso_id: "C006" },
    { RA: "A0003", CPF: "568.970.134-39", Nome: "Otto Pimenta", Email: "opimenta@fei.com", curso_id: "C005" },
    { RA: "A0004", CPF: "326.809.741-31", Nome: "Brayan Novaes", Email: "bnovaes@fei.com", curso_id: "C002" },
    { RA: "A0005", CPF: "810.395.724-05", Nome: "Srta. Ana Cecilia Pimenta", Email: "sana@fei.com", curso_id: "C009" },
    { RA: "A0006", CPF: "398.076.514-84", Nome: "Valentina Moreira", Email: "vmoreira@fei.com", curso_id: "C008" },
    { RA: "A0007", CPF: "789.364.510-57", Nome: "Dr. Eduardo Gomes", Email: "deduardo@fei.com", curso_id: "C007" },
    { RA: "A0008", CPF: "709.184.352-50", Nome: "Isabella Costela", Email: "icostela@fei.com", curso_id: "C006" },
    { RA: "A0009", CPF: "563.209.874-56", Nome: "Jade Sampaio", Email: "jsampaio@fei.com", curso_id: "C010" },
    { RA: "A0010", CPF: "798.134.025-04", Nome: "Rafael Silva", Email: "rsilva@fei.com", curso_id: "C005" },
    { RA: "A0011", CPF: "809.657.423-00", Nome: "Ana Liz Jesus", Email: "aliz@fei.com", curso_id: "C003" },
    { RA: "A0012", CPF: "734.958.216-19", Nome: "Camila Silveira", Email: "csilveira@fei.com", curso_id: "C005" },
    { RA: "A0013", CPF: "581.796.240-30", Nome: "Maria Luiza Vargas", Email: "mluiza@fei.com", curso_id: "C003" },
    { RA: "A0014", CPF: "629.058.741-20", Nome: "Arthur Gabriel Ferreira", Email: "agabriel@fei.com", curso_id: "C007" },
    { RA: "A0015", CPF: "985.062.147-85", Nome: "Sra. Leticia Santos", Email: "sleticia@fei.com", curso_id: "C008" },
    { RA: "A0016", CPF: "827.056.349-83", Nome: "Henry Silveira", Email: "hsilveira@fei.com", curso_id: "C004" },
    { RA: "A0017", CPF: "453.781.206-08", Nome: "Sra. Rafaela Sousa", Email: "srafaela@fei.com", curso_id: "C009" },
    { RA: "A0018", CPF: "235.679.481-64", Nome: "Dra. Eduarda Pacheco", Email: "deduarda@fei.com", curso_id: "C003" },
    { RA: "A0019", CPF: "978.562.140-58", Nome: "Ana Clara Porto", Email: "aclara@fei.com", curso_id: "C008" },
    { RA: "A0020", CPF: "546.832.071-17", Nome: "Luana Montenegro", Email: "lmontenegro@fei.com", curso_id: "C010" },
    { RA: "A0021", CPF: "791.024.853-97", Nome: "Augusto Rocha", Email: "arocha@fei.com", curso_id: "C002" },
    { RA: "A0022", CPF: "409.872.135-04", Nome: "Benicio Cavalcante", Email: "bcavalcante@fei.com", curso_id: "C002" },
    { RA: "A0023", CPF: "305.712.689-86", Nome: "Dr. Levi Cunha", Email: "dlevi@fei.com", curso_id: "C003" },
    { RA: "A0024", CPF: "310.276.945-43", Nome: "Theo das Neves", Email: "tdas@fei.com", curso_id: "C010" },
    { RA: "A0025", CPF: "802.395.761-95", Nome: "Maria Laura Pinto", Email: "mlaura@fei.com", curso_id: "C001" },
    { RA: "A0026", CPF: "059.426.713-70", Nome: "Vinicius Dias", Email: "vdias@fei.com", curso_id: "C002" },
    { RA: "A0027", CPF: "805.423.167-90", Nome: "Gabriela Vasconcelos", Email: "gvasconcelos@fei.com", curso_id: "C005" },
    { RA: "A0028", CPF: "436.981.057-48", Nome: "Brenda Duarte", Email: "bduarte@fei.com", curso_id: "C009" },
    { RA: "A0029", CPF: "518.243.690-42", Nome: "Cecilia Sa", Email: "csa@fei.com", curso_id: "C008" },
    { RA: "A0030", CPF: "192.760.385-40", Nome: "Ian Novaes", Email: "inovaes@fei.com", curso_id: "C001" },
    { RA: "A0031", CPF: "903.768.254-56", Nome: "Guilherme da Mata", Email: "gda@fei.com", curso_id: "C004" },
]);

db.aluno.insertMany([
    { "RA": "A0032", "CPF": "349.156.287-28", "Nome": "Joaquim Abreu", "Email": "jabreu@fei.com", "curso_id": "C002" },
    { "RA": "A0033", "CPF": "710.238.694-03", "Nome": "Isaac Azevedo", "Email": "iazevedo@fei.com", "curso_id": "C007" },
    { "RA": "A0034", "CPF": "564.873.129-91", "Nome": "Dr. Davi Miguel Leao", "Email": "ddavi@fei.com", "curso_id": "C007" },
    { "RA": "A0035", "CPF": "908.234.176-03", "Nome": "Lucas Gabriel Porto", "Email": "lgabriel@fei.com", "curso_id": "C008" },
    { "RA": "A0036", "CPF": "409.612.753-16", "Nome": "Isis Novaes", "Email": "inovaes@fei.com", "curso_id": "C007" },
    { "RA": "A0037", "CPF": "235.918.407-50", "Nome": "Dra. Sofia da Conceicao", "Email": "dsofia@fei.com", "curso_id": "C001" },
    { "RA": "A0038", "CPF": "492.867.150-30", "Nome": "Carlos Eduardo Mendes", "Email": "ceduardo@fei.com", "curso_id": "C005" },
    { "RA": "A0039", "CPF": "280.145.637-35", "Nome": "Ana Beatriz Lima", "Email": "abeatriz@fei.com", "curso_id": "C004" },
    { "RA": "A0040", "CPF": "815.693.420-24", "Nome": "Emanuel Freitas", "Email": "efreitas@fei.com", "curso_id": "C008" },
    { "RA": "A0041", "CPF": "542.367.890-00", "Nome": "Maria Julia Brito", "Email": "mjulia@fei.com", "curso_id": "C010" },
    { "RA": "A0042", "CPF": "596.840.327-65", "Nome": "Kevin Souza", "Email": "ksouza@fei.com", "curso_id": "C007" },
    { "RA": "A0043", "CPF": "793.185.642-28", "Nome": "Dra. Eloah Leao", "Email": "deloah@fei.com", "curso_id": "C001" },
    { "RA": "A0044", "CPF": "340.168.729-87", "Nome": "Danilo Fonseca", "Email": "dfonseca@fei.com", "curso_id": "C010" },
    { "RA": "A0045", "CPF": "897.041.325-14", "Nome": "Joao Pedro Nunes", "Email": "jpedro@fei.com", "curso_id": "C003" },
    { "RA": "A0046", "CPF": "031.957.846-10", "Nome": "Dra. Isabel Farias", "Email": "disabel@fei.com", "curso_id": "C004" },
    { "RA": "A0047", "CPF": "416.975.283-09", "Nome": "Eduardo Caldeira", "Email": "ecaldeira@fei.com", "curso_id": "C009" },
    { "RA": "A0048", "CPF": "394.015.768-66", "Nome": "Dr. Josue Cunha", "Email": "djosue@fei.com", "curso_id": "C010" },
    { "RA": "A0049", "CPF": "504.129.786-01", "Nome": "Cecilia Carvalho", "Email": "ccarvalho@fei.com", "curso_id": "C002" },
    { "RA": "A0050", "CPF": "108.362.957-30", "Nome": "Lara Sousa", "Email": "lsousa@fei.com", "curso_id": "C001" },
    { "RA": "A0051", "CPF": "234.197.508-97", "Nome": "Vitor Costela", "Email": "vcostela@fei.com", "curso_id": "C002" },
    { "RA": "A0052", "CPF": "923.401.675-07", "Nome": "Luna Nascimento", "Email": "lnascimento@fei.com", "curso_id": "C003" },
    { "RA": "A0053", "CPF": "230.148.769-50", "Nome": "Ana Cecilia Jesus", "Email": "acecilia@fei.com", "curso_id": "C008" },
    { "RA": "A0054", "CPF": "453.017.289-97", "Nome": "Joana Brito", "Email": "jbrito@fei.com", "curso_id": "C002" },
    { "RA": "A0055", "CPF": "589.174.603-48", "Nome": "Manuella da Cunha", "Email": "mda@fei.com", "curso_id": "C004" },
    { "RA": "A0056", "CPF": "012.853.497-41", "Nome": "Arthur Miguel Pereira", "Email": "amiguel@fei.com", "curso_id": "C001" },
    { "RA": "A0057", "CPF": "490.263.715-43", "Nome": "Allana Gomes", "Email": "agomes@fei.com", "curso_id": "C003" },
    { "RA": "A0058", "CPF": "904.628.731-96", "Nome": "Luiz Fernando Sales", "Email": "lfernando@fei.com", "curso_id": "C008" },
    { "RA": "A0059", "CPF": "934.082.651-51", "Nome": "Ana Sophia Camara", "Email": "asophia@fei.com", "curso_id": "C005" },
    { "RA": "A0060", "CPF": "659.037.812-68", "Nome": "Isabel Aragao", "Email": "iaragao@fei.com", "curso_id": "C002" },
    { "RA": "A0061", "CPF": "614.792.503-25", "Nome": "Luiz Gustavo Guerra", "Email": "lgustavo@fei.com", "curso_id": "C002" },
    { "RA": "A0062", "CPF": "589.213.607-86", "Nome": "Emanuel Novaes", "Email": "enovaes@fei.com", "curso_id": "C004" },
    { "RA": "A0063", "CPF": "158.920.637-12", "Nome": "Dr. Benicio da Costa", "Email": "dbenicio@fei.com", "curso_id": "C007" },
    { "RA": "A0064", "CPF": "042.785.196-30", "Nome": "Yasmin Carvalho", "Email": "ycarvalho@fei.com", "curso_id": "C002" },
    { "RA": "A0065", "CPF": "368.401.295-51", "Nome": "Ravi Lucca Farias", "Email": "rlucca@fei.com", "curso_id": "C010" },
    { "RA": "A0066", "CPF": "754.639.201-25", "Nome": "Daniel Melo", "Email": "dmelo@fei.com", "curso_id": "C007" },
    { "RA": "A0067", "CPF": "974.532.801-41", "Nome": "Mariane Lima", "Email": "mlima@fei.com", "curso_id": "C001" },
    { "RA": "A0068", "CPF": "159.024.683-70", "Nome": "Eloah Marques", "Email": "emarques@fei.com", "curso_id": "C009" },
    { "RA": "A0069", "CPF": "673.219.485-28", "Nome": "Yago Souza", "Email": "ysouza@fei.com", "curso_id": "C009" },
    { "RA": "A0070", "CPF": "324.751.089-32", "Nome": "Dr. Theo Novaes", "Email": "dtheo@fei.com", "curso_id": "C003" },
    { "RA": "A0071", "CPF": "597.361.204-06", "Nome": "Olivia da Luz", "Email": "oda@fei.com", "curso_id": "C009" },
    { "RA": "A0072", "CPF": "708.469.251-76", "Nome": "Pedro Miguel Oliveira", "Email": "pmiguel@fei.com", "curso_id": "C002" },
    { "RA": "A0073", "CPF": "268.957.014-94", "Nome": "Marina Fogaca", "Email": "mfogaca@fei.com", "curso_id": "C003" },
    { "RA": "A0074", "CPF": "098.213.745-14", "Nome": "Marcela Fonseca", "Email": "mfonseca@fei.com", "curso_id": "C004" },
    { "RA": "A0075", "CPF": "860.597.142-85", "Nome": "Maria Clara Camargo", "Email": "mclara@fei.com", "curso_id": "C002" },
    { "RA": "A0076", "CPF": "568.192.470-01", "Nome": "Maria Vitoria Pereira", "Email": "mvitoria@fei.com", "curso_id": "C009" },
    { "RA": "A0077", "CPF": "156.973.204-34", "Nome": "Nicolas Cardoso", "Email": "ncardoso@fei.com", "curso_id": "C001" },
    { "RA": "A0078", "CPF": "820.145.769-20", "Nome": "Srta. Ana Beatriz das Neves", "Email": "sana@fei.com", "curso_id": "C010" },
    { "RA": "A0079", "CPF": "819.652.734-91", "Nome": "Thomas Siqueira", "Email": "tsiqueira@fei.com", "curso_id": "C003" },
    { "RA": "A0080", "CPF": "301.894.756-84", "Nome": "Lucas Aparecida", "Email": "laparecida@fei.com", "curso_id": "C010" },
    { "RA": "A0081", "CPF": "793.825.460-65", "Nome": "Dr. Anthony Nunes", "Email": "danthony@fei.com", "curso_id": "C004" },
    { "RA": "A0082", "CPF": "025.619.387-86", "Nome": "Pedro Miguel das Neves", "Email": "pmiguel@fei.com", "curso_id": "C001" },
    { "RA": "A0083", "CPF": "689.752.014-49", "Nome": "Sra. Emanuella Dias", "Email": "semanuella@fei.com", "curso_id": "C008" },
    { "RA": "A0084", "CPF": "127.364.059-43", "Nome": "Dante Santos", "Email": "dsantos@fei.com", "curso_id": "C003" },
    { "RA": "A0085", "CPF": "264.571.830-26", "Nome": "Enzo Gabriel Pinto", "Email": "egabriel@fei.com", "curso_id": "C007" },
    { "RA": "A0086", "CPF": "601.792.853-86", "Nome": "Alexandre da Mota", "Email": "ada@fei.com", "curso_id": "C005" },
    { "RA": "A0087", "CPF": "371.892.560-59", "Nome": "Benicio Duarte", "Email": "bduarte@fei.com", "curso_id": "C009" },
    { "RA": "A0088", "CPF": "670.941.285-76", "Nome": "Joao Felipe Lopes", "Email": "jfelipe@fei.com", "curso_id": "C005" },
    { "RA": "A0089", "CPF": "947.103.286-50", "Nome": "Henry Martins", "Email": "hmartins@fei.com", "curso_id": "C002" },
    { "RA": "A0090", "CPF": "245.068.139-60", "Nome": "Dr. Leandro Barbosa", "Email": "dleandro@fei.com", "curso_id": "C004" },
    { "RA": "A0091", "CPF": "725.963.408-10", "Nome": "Maria Julia Cunha", "Email": "mjulia@fei.com", "curso_id": "C007" },
    { "RA": "A0092", "CPF": "271.693.485-19", "Nome": "Dr. Caua Machado", "Email": "dcaua@fei.com", "curso_id": "C006" },
    { "RA": "A0093", "CPF": "064.831.592-42", "Nome": "Ravy Duarte", "Email": "rduarte@fei.com", "curso_id": "C004" },
    { "RA": "A0094", "CPF": "640.318.592-60", "Nome": "Diogo Oliveira", "Email": "doliveira@fei.com", "curso_id": "C010" },
    { "RA": "A0095", "CPF": "610.978.534-20", "Nome": "Kevin Aragao", "Email": "karagao@fei.com", "curso_id": "C007" },
    { "RA": "A0096", "CPF": "509.627.138-21", "Nome": "Bernardo Almeida", "Email": "balmeida@fei.com", "curso_id": "C005" },
    { "RA": "A0097", "CPF": "528.674.930-56", "Nome": "Bento Machado", "Email": "bmachado@fei.com", "curso_id": "C005" },
    { "RA": "A0098", "CPF": "704.952.316-06", "Nome": "Paulo Barbosa", "Email": "pbarbosa@fei.com", "curso_id": "C009" },
    { "RA": "A0099", "CPF": "824.597.130-88", "Nome": "Lucas Cassiano", "Email": "lcassiano@fei.com", "curso_id": "C005" },
    { "RA": "A0100", "CPF": "805.169.427-94", "Nome": "Sr. Juan Silva", "Email": "sjuan@fei.com", "curso_id": "C002" }
]);

//Materia:
db.materia.insertMany([
    { "materia_id": "M1001", "nome_materia": "Banco de Dados", "nome_dept": "Computacao", "curso_id": "C001" },
    { "materia_id": "M1002", "nome_materia": "Calculo I", "nome_dept": "Matematica", "curso_id": "C005" },
    { "materia_id": "M1003", "nome_materia": "Engenharia de Software", "nome_dept": "Computacao", "curso_id": "C001" },
    { "materia_id": "M1004", "nome_materia": "Algebra Linear", "nome_dept": "Matematica", "curso_id": "C005" },
    { "materia_id": "M1005", "nome_materia": "Logistica", "nome_dept": "Administracao", "curso_id": "C004" },
    { "materia_id": "M1006", "nome_materia": "Controle e Automacao", "nome_dept": "Engenharia", "curso_id": "C002" },
    { "materia_id": "M1007", "nome_materia": "Programacao I", "nome_dept": "Computacao", "curso_id": "C010" },
    { "materia_id": "M1008", "nome_materia": "Programacao II", "nome_dept": "Computacao", "curso_id": "C001" },
    { "materia_id": "M1009", "nome_materia": "Fisica I", "nome_dept": "Engenharia", "curso_id": "C002" },
    { "materia_id": "M1010", "nome_materia": "Fisica II", "nome_dept": "Engenharia", "curso_id": "C002" },
    { "materia_id": "M1011", "nome_materia": "Quimica Geral", "nome_dept": "Engenharia", "curso_id": "C008" },
    { "materia_id": "M1012", "nome_materia": "Termodinamica", "nome_dept": "Engenharia", "curso_id": "C006" },
    { "materia_id": "M1013", "nome_materia": "Resistencia dos Materiais", "nome_dept": "Engenharia", "curso_id": "C007" },
    { "materia_id": "M1014", "nome_materia": "Mecanica dos Fluidos", "nome_dept": "Engenharia", "curso_id": "C009" },
    { "materia_id": "M1015", "nome_materia": "Redes de Computadores", "nome_dept": "Computacao", "curso_id": "C010" }
]);



//Matriz Curricular:
db.matrizcurricular.insertMany([
    { curso_id: "C001", materia_id: "M1007" },
    { curso_id: "C001", materia_id: "M1008" },
    { curso_id: "C001", materia_id: "M1004" },
    { curso_id: "C002", materia_id: "M1013" },
    { curso_id: "C002", materia_id: "M1010" },
    { curso_id: "C002", materia_id: "M1011" },
    { curso_id: "C003", materia_id: "M1004" },
    { curso_id: "C003", materia_id: "M1014" },
    { curso_id: "C003", materia_id: "M1002" },
    { curso_id: "C004", materia_id: "M1002" },
    { curso_id: "C004", materia_id: "M1004" },
    { curso_id: "C004", materia_id: "M1005" },
    { curso_id: "C005", materia_id: "M1003" },
    { curso_id: "C005", materia_id: "M1008" },
    { curso_id: "C005", materia_id: "M1001" },
    { curso_id: "C006", materia_id: "M1009" },
    { curso_id: "C006", materia_id: "M1004" },
    { curso_id: "C006", materia_id: "M1014" },
    { curso_id: "C007", materia_id: "M1009" },
    { curso_id: "C007", materia_id: "M1010" },
    { curso_id: "C007", materia_id: "M1006" },
    { curso_id: "C008", materia_id: "M1004" },
    { curso_id: "C008", materia_id: "M1014" },
    { curso_id: "C008", materia_id: "M1002" },
    { curso_id: "C009", materia_id: "M1012" },
    { curso_id: "C009", materia_id: "M1002" },
    { curso_id: "C009", materia_id: "M1013" },
    { curso_id: "C010", materia_id: "M1003" },
    { curso_id: "C010", materia_id: "M1008" },
    { curso_id: "C010", materia_id: "M1015" }
]);

//Cursando:
db.cursando.insertMany([
    { RA: "A0003", materia_id: "M1003", Semestre: "2023-2", Ano: 2023, Nota: 1.8, status: "Reprovado" },
    { RA: "A0003", materia_id: "M1008", Semestre: "2024-1", Ano: 2024, Nota: null, status: "Cursando" },
    { RA: "A0003", materia_id: "M1001", Semestre: "2023-1", Ano: 2023, Nota: null, status: "Cursando" },
    { RA: "A0004", materia_id: "M1013", Semestre: "2023-2", Ano: 2023, Nota: 5.7, status: "Aprovado" },
    { RA: "A0004", materia_id: "M1010", Semestre: "2024-1", Ano: 2024, Nota: 4.6, status: "Reprovado" },
    { RA: "A0004", materia_id: "M1011", Semestre: "2023-2", Ano: 2023, Nota: null, status: "Cursando" },
    { RA: "A0005", materia_id: "M1012", Semestre: "2023-2", Ano: 2023, Nota: 6.0, status: "Aprovado" },
    { RA: "A0005", materia_id: "M1002", Semestre: "2023-1", Ano: 2023, Nota: null, status: "Cursando" },
    { RA: "A0005", materia_id: "M1013", Semestre: "2024-1", Ano: 2024, Nota: 6.4, status: "Aprovado" },
    { RA: "A0006", materia_id: "M1004", Semestre: "2024-2", Ano: 2024, Nota: 3.2, status: "Reprovado" },
    { RA: "A0006", materia_id: "M1014", Semestre: "2024-1", Ano: 2024, Nota: null, status: "Cursando" },
    { RA: "A0006", materia_id: "M1002", Semestre: "2024-2", Ano: 2024, Nota: 7.2, status: "Aprovado" },
    { RA: "A0007", materia_id: "M1009", Semestre: "2024-2", Ano: 2024, Nota: 8.3, status: "Aprovado" },
    { RA: "A0007", materia_id: "M1010", Semestre: "2024-2", Ano: 2024, Nota: 9.1, status: "Aprovado" },
    { RA: "A0007", materia_id: "M1006", Semestre: "2024-2", Ano: 2024, Nota: 8.9, status: "Aprovado" },
    { RA: "A0008", materia_id: "M1009", Semestre: "2024-2", Ano: 2024, Nota: 5.0, status: "Reprovado" },
    { RA: "A0008", materia_id: "M1004", Semestre: "2024-2", Ano: 2024, Nota: 8.0, status: "Aprovado" },
    { RA: "A0008", materia_id: "M1014", Semestre: "2023-1", Ano: 2023, Nota: 4.2, status: "Reprovado" },
    { RA: "A0009", materia_id: "M1003", Semestre: "2023-2", Ano: 2023, Nota: 1.1, status: "Reprovado" },
    { RA: "A0009", materia_id: "M1008", Semestre: "2024-2", Ano: 2024, Nota: 5.6, status: "Aprovado" },
    { RA: "A0009", materia_id: "M1015", Semestre: "2024-1", Ano: 2024, Nota: 5.7, status: "Aprovado" },
    { RA: "A0010", materia_id: "M1003", Semestre: "2024-1", Ano: 2024, Nota: 6.8, status: "Aprovado" },
    { RA: "A0010", materia_id: "M1008", Semestre: "2024-1", Ano: 2024, Nota: null, status: "Cursando" },
    { RA: "A0010", materia_id: "M1001", Semestre: "2024-1", Ano: 2024, Nota: 0.7, status: "Reprovado" },
    { RA: "A0011", materia_id: "M1004", Semestre: "2023-2", Ano: 2023, Nota: 8.1, status: "Aprovado" },
    { RA: "A0011", materia_id: "M1014", Semestre: "2023-2", Ano: 2023, Nota: null, status: "Cursando" },
    { RA: "A0011", materia_id: "M1002", Semestre: "2024-2", Ano: 2024, Nota: 8.4, status: "Aprovado" },
    { RA: "A0012", materia_id: "M1003", Semestre: "2023-2", Ano: 2023, Nota: 0.8, status: "Reprovado" },
    { RA: "A0012", materia_id: "M1008", Semestre: "2023-2", Ano: 2023, Nota: null, status: "Cursando" },
    { RA: "A0012", materia_id: "M1001", Semestre: "2024-1", Ano: 2024, Nota: 6.1, status: "Aprovado" },
    { RA: "A0013", materia_id: "M1004", Semestre: "2023-2", Ano: 2023, Nota: 9.0, status: "Aprovado" },
    { RA: "A0013", materia_id: "M1014", Semestre: "2023-2", Ano: 2023, Nota: 5.6, status: "Aprovado" },
    { RA: "A0013", materia_id: "M1002", Semestre: "2023-2", Ano: 2023, Nota: 10.0, status: "Aprovado" },
    { RA: "A0014", materia_id: "M1009", Semestre: "2024-2", Ano: 2024, Nota: null, status: "Cursando" },
    { RA: "A0014", materia_id: "M1010", Semestre: "2023-1", Ano: 2023, Nota: 1.3, status: "Reprovado" },
    { RA: "A0014", materia_id: "M1006", Semestre: "2024-1", Ano: 2024, Nota: null, status: "Cursando" }
]);

db.cursando.insertMany([
    { RA: "A0052", materia_id: "M1004", Semestre: "2023-2", Ano: 2023, Nota: 8.0, status: "Aprovado" },
    { RA: "A0052", materia_id: "M1014", Semestre: "2023-2", Ano: 2023, Nota: 8.0, status: "Aprovado" },
    { RA: "A0052", materia_id: "M1002", Semestre: "2023-2", Ano: 2023, Nota: 8.0, status: "Aprovado" },
    { RA: "A0048", materia_id: "M1003", Semestre: "2023-2", Ano: 2023, Nota: 8.0, status: "Aprovado" },
    { RA: "A0048", materia_id: "M1008", Semestre: "2023-2", Ano: 2023, Nota: 8.0, status: "Aprovado" },
    { RA: "A0048", materia_id: "M1015", Semestre: "2023-2", Ano: 2023, Nota: 8.0, status: "Aprovado" },
    { RA: "A0039", materia_id: "M1002", Semestre: "2023-1", Ano: 2023, Nota: 8.0, status: "Aprovado" },
    { RA: "A0039", materia_id: "M1004", Semestre: "2023-1", Ano: 2023, Nota: 8.0, status: "Aprovado" },
    { RA: "A0039", materia_id: "M1005", Semestre: "2023-1", Ano: 2023, Nota: 8.0, status: "Aprovado" },
    { RA: "A0029", materia_id: "M1004", Semestre: "2023-1", Ano: 2023, Nota: 8.0, status: "Aprovado" },
    { RA: "A0029", materia_id: "M1014", Semestre: "2023-1", Ano: 2023, Nota: 8.0, status: "Aprovado" },
    { RA: "A0029", materia_id: "M1002", Semestre: "2023-1", Ano: 2023, Nota: 8.0, status: "Aprovado" },
    { RA: "A0068", materia_id: "M1012", Semestre: "2024-1", Ano: 2024, Nota: 8.0, status: "Aprovado" },
    { RA: "A0068", materia_id: "M1002", Semestre: "2024-1", Ano: 2024, Nota: 8.0, status: "Aprovado" },
    { RA: "A0068", materia_id: "M1013", Semestre: "2024-1", Ano: 2024, Nota: 8.0, status: "Aprovado" },
    { RA: "A0085", materia_id: "M1009", Semestre: "2024-1", Ano: 2024, Nota: 8.0, status: "Aprovado" },
    { RA: "A0085", materia_id: "M1010", Semestre: "2024-1", Ano: 2024, Nota: 8.0, status: "Aprovado" },
    { RA: "A0085", materia_id: "M1006", Semestre: "2024-1", Ano: 2024, Nota: 8.0, status: "Aprovado" },
    { RA: "A0001", materia_id: "M1004", Semestre: "2024-2", Ano: 2024, Nota: null, status: "Cursando" },
    { RA: "A0001", materia_id: "M1014", Semestre: "2024-1", Ano: 2024, Nota: 9.5, status: "Aprovado" },
    { RA: "A0001", materia_id: "M1002", Semestre: "2023-2", Ano: 2023, Nota: 3.6, status: "Reprovado" },
    { RA: "A0002", materia_id: "M1009", Semestre: "2023-1", Ano: 2023, Nota: null, status: "Cursando" },
    { RA: "A0002", materia_id: "M1004", Semestre: "2024-2", Ano: 2024, Nota: 0.1, status: "Reprovado" },
    { RA: "A0002", materia_id: "M1014", Semestre: "2024-2", Ano: 2024, Nota: null, status: "Cursando" }
]);




//Leciona:
db.leciona.insertMany([
    { RA_Prof: "RA018", materia_id: "M1001", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA009", materia_id: "M1001", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA010", materia_id: "M1002", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA019", materia_id: "M1002", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA014", materia_id: "M1003", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA021", materia_id: "M1003", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA013", materia_id: "M1004", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA020", materia_id: "M1004", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA007", materia_id: "M1005", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA023", materia_id: "M1006", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA018", materia_id: "M1007", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA022", materia_id: "M1007", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA022", materia_id: "M1008", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA014", materia_id: "M1008", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA004", materia_id: "M1009", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA016", materia_id: "M1010", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA018", materia_id: "M1011", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA003", materia_id: "M1011", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA022", materia_id: "M1012", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA001", materia_id: "M1012", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA002", materia_id: "M1013", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA013", materia_id: "M1014", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA023", materia_id: "M1015", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA007", materia_id: "M1015", Semestre: "2024-1", Ano: 2024, status: "Ativo" },
    { RA_Prof: "RA021", materia_id: "M1006", Semestre: "2023-2", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA015", materia_id: "M1011", Semestre: "2023-1", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA001", materia_id: "M1005", Semestre: "2023-1", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA004", materia_id: "M1002", Semestre: "2023-2", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA017", materia_id: "M1001", Semestre: "2023-1", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA021", materia_id: "M1015", Semestre: "2023-1", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA016", materia_id: "M1005", Semestre: "2023-2", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA014", materia_id: "M1012", Semestre: "2023-1", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA006", materia_id: "M1005", Semestre: "2023-1", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA017", materia_id: "M1007", Semestre: "2023-2", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA001", materia_id: "M1001", Semestre: "2023-2", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA007", materia_id: "M1012", Semestre: "2023-2", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA018", materia_id: "M1014", Semestre: "2023-1", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA014", materia_id: "M1001", Semestre: "2023-1", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA006", materia_id: "M1014", Semestre: "2023-2", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA014", materia_id: "M1014", Semestre: "2023-2", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA020", materia_id: "M1009", Semestre: "2023-2", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA005", materia_id: "M1007", Semestre: "2023-2", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA024", materia_id: "M1013", Semestre: "2023-2", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA006", materia_id: "M1015", Semestre: "2023-2", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA002", materia_id: "M1005", Semestre: "2023-1", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA017", materia_id: "M1001", Semestre: "2023-2", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA014", materia_id: "M1011", Semestre: "2023-1", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA023", materia_id: "M1010", Semestre: "2023-1", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA016", materia_id: "M1009", Semestre: "2023-1", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA020", materia_id: "M1002", Semestre: "2023-1", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA009", materia_id: "M1015", Semestre: "2023-2", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA009", materia_id: "M1003", Semestre: "2023-1", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA019", materia_id: "M1005", Semestre: "2023-1", Ano: 2023, status: "Inativo" },
    { RA_Prof: "RA013", materia_id: "M1010", Semestre: "2023-1", Ano: 2023, status: "Inativo" }
]);

