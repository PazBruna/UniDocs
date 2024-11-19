//Departamento:
db.departamento.insertMany([
    {
        nome_dept: "Ciências da Computação",
        Orcamento: 1000000.00,
        Predio: "Prédio A",
        chefe: {
            RA: "123",
            Nome: "Prof. João",
            Email: "joao@email.com",
            Salario: 15000.00
        }
    },
    {
        nome_dept: "Engenharia",
        Orcamento: 2000000.00,
        Predio: "Prédio B",
        chefe: {
            RA: "124",
            Nome: "Prof. Maria",
            Email: "maria@email.com",
            Salario: 18000.00
        }
    }
]);

//Professor:
db.professor.insertMany([
    {
        RA: "123",
        CPF: "111.111.111-11",
        Nome: "João Silva",
        Email: "joao@email.com",
        Salario: 15000.00,
        nome_dept: "Ciências da Computação"
    },
    {
        RA: "124",
        CPF: "222.222.222-22",
        Nome: "Maria Lima",
        Email: "maria@email.com",
        Salario: 18000.00,
        nome_dept: "Engenharia"
    }
]);

//Curso:
db.curso.insertMany([
    {
        curso_id: "C01",
        nome_curso: "Engenharia de Software",
        nome_dept: "Ciências da Computação"
    },
    {
        curso_id: "C02",
        nome_curso: "Engenharia Mecânica",
        nome_dept: "Engenharia"
    }
]);

//Aluno:
db.aluno.insertMany([
    {
        RA: "A001",
        CPF: "333.333.333-33",
        Nome: "Carlos Souza",
        Email: "carlos@email.com",
        curso_id: "C01"
    },
    {
        RA: "A002",
        CPF: "444.444.444-44",
        Nome: "Ana Paula",
        Email: "ana@email.com",
        curso_id: "C02"
    }
]);

//Materia:
db.materia.insertMany([
    {
        materia_id: "M01",
        nome_materia: "Matemática Discreta",
        nome_dept: "Ciências da Computação",
        curso_id: "C01"
    },
    {
        materia_id: "M02",
        nome_materia: "Física Aplicada",
        nome_dept: "Engenharia",
        curso_id: "C02"
    }
]);

//Cursando:
db.cursando.insertMany([
    {
        RA: "A001",
        materia_id: "M01",
        Semestre: "2024.1",
        Ano: 2024,
        Nota: 9.0,
        status: "Aprovado"
    },
    {
        RA: "A002",
        materia_id: "M02",
        Semestre: "2024.1",
        Ano: 2024,
        Nota: 8.5,
        status: "Aprovado"
    }
]);

//Leciona:
db.leciona.insertMany([
    {
        RA_Prof: "123",
        materia_id: "M01",
        Semestre: "2024.1",
        Ano: 2024,
        status: "Ativo"
    },
    {
        RA_Prof: "124",
        materia_id: "M02",
        Semestre: "2024.1",
        Ano: 2024,
        status: "Ativo"
    }
]);

//Orientador:
db.orientador.insertMany([
    {
        aluno_ra: "A001",
        prof_ra: "123",
        grupo_id: "G01"
    },
    {
        aluno_ra: "A002",
        prof_ra: "124",
        grupo_id: "G02"
    }
]);

//Matriz Curricular:
db.matriz_curricular.insertMany([
    {
        curso_id: "C01",
        materia_id: "M01"
    },
    {
        curso_id: "C02",
        materia_id: "M02"
    }
]);
