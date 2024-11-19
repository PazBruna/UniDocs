db.aluno.aggregate([
    // Join com a coleção curso
    {
        $lookup: {
            from: "curso",
            localField: "curso_id",
            foreignField: "curso_id",
            as: "curso_info"
        }
    },
    // "Explode" o array curso_info
    { $unwind: "$curso_info" },
    // Join com a coleção cursando
    {
        $lookup: {
            from: "cursando",
            localField: "RA",
            foreignField: "RA",
            as: "cursando_info"
        }
    },
    // "Explode" o array cursando_info
    { $unwind: "$cursando_info" },
    // Filtros para o semestre e ano
    {
        $match: {
            "cursando_info.Semestre": "2",
            "cursando_info.Ano": "2023"
        }
    },
    // Filtra alunos que não têm matérias pendentes em sua matriz curricular
    {
        $lookup: {
            from: "matrizcurricular",
            let: { cursoId: "$curso_id", alunoRA: "$RA" },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $and: [
                                { $eq: ["$curso_id", "$$cursoId"] }
                            ]
                        }
                    }
                },
                {
                    $lookup: {
                        from: "materia",
                        localField: "materia_id",
                        foreignField: "materia_id",
                        as: "materia_info"
                    }
                },
                { $unwind: "$materia_info" },
                {
                    $lookup: {
                        from: "cursando",
                        let: { materiaId: "$materia_id", alunoRA: "$$alunoRA" },
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                        $and: [
                                            { $eq: ["$materia_id", "$$materiaId"] },
                                            { $eq: ["$RA", "$$alunoRA"] }
                                        ]
                                    }
                                }
                            }
                        ],
                        as: "cursando_status"
                    }
                },
                {
                    $match: {
                        $or: [
                            { "cursando_status.status": { $ne: "Aprovado" } },
                            { "cursando_status": { $size: 0 } }
                        ]
                    }
                }
            ],
            as: "materias_pendentes"
        }
    },
    // Garante que não existam matérias pendentes
    {
        $match: {
            materias_pendentes: { $size: 0 }
        }
    },
    // Seleciona os campos desejados e adiciona o status "Formado!"
    {
        $project: {
            _id: 0,
            RA: "$RA",
            Nome: "$Nome",
            Email: "$Email",
            Curso_ID: "$curso_id",
            Nome_Curso: "$curso_info.nome_curso",
            Semestre: "$cursando_info.Semestre",
            Ano: "$cursando_info.Ano",
            Status: { $literal: "Formado!" }
        }
    },
    // Remove duplicatas
    {
        $group: {
            _id: "$RA",
            RA: { $first: "$RA" },
            Nome: { $first: "$Nome" },
            Email: { $first: "$Email" },
            Curso_ID: { $first: "$Curso_ID" },
            Nome_Curso: { $first: "$Nome_Curso" },
            Semestre: { $first: "$Semestre" },
            Ano: { $first: "$Ano" },
            Status: { $first: "$Status" }
        }
    },
    // Ordena os resultados
    {
        $sort: { RA: 1 }
    }
]);
