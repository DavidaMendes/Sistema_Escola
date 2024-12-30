const bancoDeEstudantes = [
    {
      "nome":"Olva",
      "email":"olippini0@deviantart.com",
      "telefone":[
        "4733865848",
        "47933865848"
      ],
      "endereco":{
        "logradouro":"Rua Transport",
        "numero":"05",
        "cep":"46140",
        "complemento":"ap 102"
      }
    },
    {
      "nome":"Oralle",
      "email":"orajchert1@clickbank.net",
      "telefone":[
        "5896279799",
        "58996279799"
      ],
      "endereco":{
        "logradouro":"Rua Kedzie",
        "numero":"89",
        "cep":"613840"
      }
    },
    {
      "nome":"Amye",
      "email":"aranahan2@yellowbook.com",
      "telefone":[
        "1918820860",
        "19918820860"
      ],
      "endereco":{
        "logradouro":"Rua Karstens",
        "numero":"59",
        "cep":"627533",
        "complemento":"ap 401"
      }
    },
    {
      "nome":"Greer",
      "email":"gtumielli3@vimeo.com",
      "telefone":[
        "9466883489",
        "94966883489"
      ],
      "endereco":{
        "logradouro":"Rua Algoma",
        "numero":"077"
      }
    },
    {
      "nome":"Juliet",
      "email":"jelphey4@wikipedia.org",
      "telefone":[
        "1198123183",
        "11998123183"
      ],
      "endereco":{
        "logradouro":"Rua Crownhardt",
        "numero":"07",
        "cep":"184366"
      }
    },
    {
      "nome":"Blakeley",
      "email":"bmccaughran5@blog.com",
      "telefone":[
        "7919437785",
        "79919437785"
      ],
      "endereco":{
        "logradouro":"Rua Stone Corner",
        "numero":"40429",
        "cep":"1000"
      }
    },
    {
      "nome":"Leeann",
      "email":"lhuckleby6@tuttocitta.it",
      "telefone":[
        "9045673092",
        "90945673092"
      ],
      "endereco":{
        "logradouro":"Rua Center",
        "numero":"549"
      }
    },
    {
      "nome":"Tildi",
      "email":"tmilthorpe7@answers.com",
      "telefone":[
        "3149463623",
        "31949463623"
      ],
      "endereco":{
        "logradouro":"Rua Clyde Gallagher",
        "numero":"3962"
      }
    },
]

const sistemaEscolar = {
        encontrarAluno(nome) {
            return bancoDeEstudantes.find((estudante) => estudante['nome'].includes(nome));
        },
        
        nomeAluno : document.querySelector('#nome-aluno'),
        emailAluno : document.querySelector('#email-aluno'),
        telefoneAluno : document.querySelector('#telefone-aluno'),
        enderecoAluno : document.querySelector('#endereco-aluno'),
        cepAluno : document.querySelector('#cep-aluno'),
        complementoAluno : document.querySelector('#complemento-aluno'),

        informacoesAluno(nome) {
          const aluno = this.encontrarAluno(nome);
          if (!aluno) {
              return `Aluno com o nome "${nome}" não encontrado.`;
          }
  
          const paragrafos = [
              { value: this.nomeAluno, key: 'nome' },
              { value: this.emailAluno, key: 'email' },
              { value: this.telefoneAluno, key: 'telefone' },
              { value: this.enderecoAluno, key: 'logradouro' },
              { value: this.cepAluno, key: 'cep' },
              { value: this.complementoAluno, key: 'complemento' }
          ];
  
          paragrafos.forEach(({ value, key }) => {
              if (value && aluno[key]) {
                  if (Array.isArray(aluno[key])) {
                      value.textContent = `${key}: ${aluno[key].join(', ')}`;
                  } else if (typeof aluno[key] === 'object') {
                      const enderecoCompleto = Object.entries(aluno[key])
                          .map(([subKey, subValue]) => `${subKey}: ${subValue}`)
                          .join(', ');
                      value.textContent = `${key}: ${enderecoCompleto}`;
                  } else {
                      value.textContent = `${key}: ${aluno[key]}`;
                  }
              } else {
                  value.textContent = `${key}: Não disponível.`;
              }
          });
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

        editarAluno(nome, key, valor){
            const aluno = this.encontrarAluno(nome);
            if (!aluno) {
                console.log(`Aluno com o nome "${nome}" não encontrado.`);
                return;
            }
            if(key in aluno){
                aluno[key] = valor;
                console.log(`A key "${key}" do aluno "${nome}" foi atualizada para: ${valor}`);
            }
            else if (typeof aluno.endereco === "object" && key in aluno.endereco) {
                aluno.endereco[key] = valor;
                console.log(`A key "${key}" no endereço do aluno "${nome}" foi atualizada para: ${valor}`);
            } else {
                console.log(`A key "${key}" não existe no registro do aluno "${nome}".`);
            }
            
        },
    };


    function criaSistema() {
      return {
          display: document.querySelector('.display'),
          btnSelect: document.querySelector('.btn-select'),
  
          inicia() {
              this.mostrarAluno();
          },
  
          limparDisplay() {
              this.display.value = '';
          },
  
          mostrarAluno() {
              document.addEventListener('click', (e) => {
                  const el = e.target;
  
                  if (el.classList.contains('btn-select')) {
                      const valor = this.display.value.trim();
                      this.limparDisplay();
                    
                      if (!valor) {
                        sistemaEscolar.nomeAluno.textContent = 'Por favor, insira o nome de um aluno.';
                        return;
                      }
  
                      const aluno = sistemaEscolar.encontrarAluno(valor);
                      if (aluno) {
                          sistemaEscolar.informacoesAluno(valor);
                      } else {
                        sistemaEscolar.nomeAluno.textContent = 'Aluno não encontrado.';
                        return;
                      }
                  }
              });
          },
      };
  }
  
  const escola = criaSistema();
  escola.inicia();

  // Erros:endereco não aprece