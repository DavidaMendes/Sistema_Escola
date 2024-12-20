const bancoDeEstudantes = require("../json/estudantes.json");

window.interface = {
        encontrarAluno(nome) {
            return bancoDeEstudantes.find((estudante) => estudante['nome'].includes(nome));
        },

        mostrarInformacoes(nome) {
            const aluno = this.encontrarAluno(nome);
            if (!aluno) {
                return `Aluno com o nome "${nome}" não encontrado.`;
            }
        
            let detalhes = '';
            for (const [key, value] of Object.entries(aluno)) {
                if (typeof value === 'object' && !Array.isArray(value)) {
                    detalhes += `${key}:\n`;
                    for (const [subKey, subValue] of Object.entries(value)) {
                        detalhes += `  ${subKey}: ${subValue}\n`;
                    }
                } else if (Array.isArray(value)) {
                    detalhes += `${key}: ${value.join(', ')}\n`;
                } else {
                    detalhes += `${key}: ${value}\n`;
                }
            }
            return detalhes;
        },

        adicionarAluno(nome, email, telefone, rua, num, cep, complemento) {
            const novoAluno = {
                "nome": nome,
                "email": email,
                "telefone": telefone,
                "endereco": {
                    "logradouro": rua,
                    "numero": num,
                    "cep": cep,
                    "complemento": complemento,
                }
            }
            bancoDeEstudantes.push(novoAluno);
            console.log('Aluno adicionado com sucesso!')
        },

        encontrarIndiceAluno(nome){
            return bancoDeEstudantes.findIndex((estudante) => estudante['nome'].includes(nome));
        },

        removerAluno(nome){
            const alunoIndex = this.encontrarIndiceAluno(nome);
            if (!aluno) {
                console.log(`Aluno com o nome "${nome}" não encontrado.`);
                return;
            }
            if (alunoIndex === -1) {
                console.log(`Aluno com o nome "${nome}" não encontrado.`);
                return;
            }
            bancoDeEstudantes.splice(alunoIndex, 1); 
            console.log('Aluno removido com sucesso !')
        },

        editarAluno(nome, chave, valor){
            const aluno = this.encontrarAluno(nome);
            if (!aluno) {
                console.log(`Aluno com o nome "${nome}" não encontrado.`);
                return;
            }
            if(chave in aluno){
                aluno[chave] = valor;
                console.log(`A chave "${chave}" do aluno "${nome}" foi atualizada para: ${valor}`);
            }
            else if (typeof aluno.endereco === "object" && chave in aluno.endereco) {
                aluno.endereco[chave] = valor;
                console.log(`A chave "${chave}" no endereço do aluno "${nome}" foi atualizada para: ${valor}`);
            } else {
                console.log(`A chave "${chave}" não existe no registro do aluno "${nome}".`);
            }
            
        },
    };

module.exports = interface;
// interface.mostrarInformacoes('Olva');
// interface.adicionarAluno('Davi', 'dgm@gmail.com', 81990908484, 'Rua das Ruas', '40', 50349333, 'apt 202');
// interface.editarAluno('Davi', 'email', 'davi@gmail.com');
// interface.mostrarInformacoes('Davi');

// find -> encontrar o aluno pelo nome e retornar o objeto
// splice -> remove o elemento a partir da posição encontrada
// entries -> cria um array com o "Dicionario", ele vai pegar e fazer [["nome", "olva"],["email","..."]...]
// esse código geral em loop desestrutura o array conseguindo colocar essa formatação