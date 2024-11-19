//1:
db.aluno.aggregate([
    // Join com 'cursando'
    {
        $lookup: {
            from: "cursando",
            localField: "RA",
            foreignField: "RA",
            as: "cursos"
        }
    },
    // "Explode" o array de cursos para processar cada um individualmente
    { $unwind: { path: "$cursos", preserveNullAndEmptyArrays: true } },
    // Join com 'materia'
    {
        $lookup: {
            from: "materia",
            localField: "cursos.materia_id",
            foreignField: "materia_id",
            as: "materia_info"
        }
    },
    // "Explode" o array de materias (caso exista mais de um match)
    { $unwind: { path: "$materia_info", preserveNullAndEmptyArrays: true } },
    // Adicionar os campos calculados
    {
        $addFields: {
            Nome: "$Nome",
            Materia_ID: "$cursos.materia_id",
            Nome_Materia: "$materia_info.nome_materia",
            Semestre: "$cursos.Semestre",
            Ano: "$cursos.Ano",
            Nota_Final: {
                $cond: {
                    if: { $ifNull: ["$cursos.Nota", false] },
                    then: { $toString: "$cursos.Nota" },
                    else: "Matéria ainda está sendo cursada."
                }
            },
            Status: "$cursos.status"
        }
    },
    // Selecionar somente os campos necessários
    {
        $project: {
            _id: 0, // Esconde o campo "_id"
            RA: "$RA",
            Nome: "$Nome",
            Materia_ID: "$Materia_ID",
            Nome_Materia: "$Nome_Materia",
            Semestre: "$Semestre",
            Ano: "$Ano",
            Nota_Final: "$Nota_Final",
            Status: "$Status"
        }
    },
    // Ordenar por RA
    {
        $sort: { RA: 1 }
    }
]);


//2:
db.professor.aggregate([
    // Join com 'leciona'
    {
        $lookup: {
            from: "leciona",
            localField: "RA",
            foreignField: "RA_Prof",
            as: "leciona_info"
        }
    },
    // "Explode" o array de leciona
    { $unwind: { path: "$leciona_info", preserveNullAndEmptyArrays: true } },
    // Join com 'materia'
    {
        $lookup: {
            from: "materia",
            localField: "leciona_info.materia_id",
            foreignField: "materia_id",
            as: "materia_info"
        }
    },
    // "Explode" o array de materia
    { $unwind: { path: "$materia_info", preserveNullAndEmptyArrays: true } },
    // Adicionar campos calculados
    {
        $addFields: {
            Materia_ID: "$leciona_info.materia_id",
            Nome_Materia: "$materia_info.nome_materia",
            Semestre: "$leciona_info.Semestre",
            Ano: "$leciona_info.Ano",
            Status: "$leciona_info.status"
        }
    },
    // Aplicar filtros
    {
        $match: {
            $and: [
                { Materia_ID: { $ne: null } } // Garante que materia_id não seja nulo
            ]
        }
    },
    // Selecionar somente os campos necessários
    {
        $project: {
            _id: 0, // Excluir campo _id
            RA: "$RA",
            Nome: "$Nome",
            Materia_ID: "$Materia_ID",
            Nome_Materia: "$Nome_Materia",
            Semestre: "$Semestre",
            Ano: "$Ano",
            Status: "$Status"
        }
    },
    // Ordenar por RA
    {
        $sort: { RA: 1 }
    }
]);


//3:
db.aluno.aggregate([
    // Join com a coleção 'curso' para obter informações do curso do aluno
    {
        $lookup: {
            from: "curso",
            localField: "curso_id",
            foreignField: "curso_id",
            as: "curso_info"
        }
    },
    { $unwind: "$curso_info" },

    // Join com a coleção 'cursando' para obter informações das matérias cursadas pelo aluno
    {
        $lookup: {
            from: "cursando",
            localField: "ra",
            foreignField: "ra",
            as: "cursando_info"
        }
    },

    // Subquery 1: Verificar se o aluno foi aprovado em todas as matérias da matriz curricular do curso
    {
        $lookup: {
            from: "matrizcurricular",
            localField: "curso_id",
            foreignField: "curso_id",
            as: "matriz_info"
        }
    },
    { $unwind: "$matriz_info" },

    {
        $lookup: {
            from: "cursando",
            let: { ra: "$ra", materia_id: "$matriz_info.materia_id" },
            pipeline: [
                { $match: { $expr: { $and: [{ $eq: ["$ra", "$$ra"] }, { $eq: ["$materia_id", "$$materia_id"] }] } } },
                { $match: { $expr: { $ne: ["$status", "Aprovado"] } } }
            ],
            as: "materia_nao_aprovada"
        }
    },
    {
        $match: {
            "materia_nao_aprovada": { $size: 0 }
        }
    },

    // Filtrar pelo semestre e ano do aluno no campo "cursando_info"
    {
        $addFields: {
            semestre_ano: {
                $filter: {
                    input: "$cursando_info",
                    as: "cursando",
                    cond: {
                        $and: [
                            { $eq: ["$$cursando.status", "Aprovado"] }
                        ]
                    }
                }
            }
        }
    },

    // Garantir que os valores de semestre e ano sejam extraídos corretamente
    {
        $addFields: {
            semestre: { $arrayElemAt: ["$semestre_ano.semestre", 0] },
            ano: { $arrayElemAt: ["$semestre_ano.ano", 0] }
        }
    },

    // Projeção para organizar os campos desejados no formato final
    {
        $project: {
            _id: 0,
            ra: 1,
            nome: 1,
            email: 1,
            curso_id: 1,
            "curso_info.nome_curso": 1,
            semestre: 1,
            ano: 1,
            Status: { $literal: "Formado!" }
        }
    }
]);



//4:
db.departamento.aggregate([
    {
        $project: {
            _id: 0,
            nome_departamento: "$nome_dept",
            nome_professor_chefe: "$chefe.Nome"
        }
    }
]);



//5:
db.orientador.aggregate([
    // Join com a coleção "aluno" para obter os detalhes dos alunos
    {
        $lookup: {
            from: "aluno",
            localField: "aluno_ra",
            foreignField: "RA",
            as: "aluno_info"
        }
    },
    { $unwind: { path: "$aluno_info", preserveNullAndEmptyArrays: false } },

    // Join com a coleção "professor" para obter os detalhes dos professores
    {
        $lookup: {
            from: "professor",
            localField: "prof_ra",
            foreignField: "RA",
            as: "professor_info"
        }
    },
    { $unwind: { path: "$professor_info", preserveNullAndEmptyArrays: false } },

    // Filtrar grupos com mais de um aluno
    {
        $group: {
            _id: "$grupo_id",
            alunos: { $push: "$aluno_info.Nome" },
            professores: { $addToSet: "$professor_info.Nome" },
            count: { $sum: 1 }
        }
    },
    {
        $match: {
            count: { $gt: 1 }
        }
    },

    // Transformar os resultados no formato desejado
    {
        $project: {
            _id: 0,
            grupo_id: "$_id",
            alunos: 1,
            professores: 1
        }
    }
]);

