const bancoDeEstudantes = [
    {
      nome: "Olva",
      email: "olippini0@deviantart.com",
      telefone: ["4733865848", "47933865848"],
      endereco: {
        logradouro: "Rua Transport",
        numero: "05",
        cep: "46140",
        complemento: "ap 102",
      },
    },
    {
      nome: "Oralle",
      email: "orajchert1@clickbank.net",
      telefone: ["5896279799", "58996279799"],
      endereco: {
        logradouro: "Rua Kedzie",
        numero: "89",
        cep: "613840",
      },
    },
    {
      nome: "Amye",
      email: "aranahan2@yellowbook.com",
      telefone: ["1918820860", "19918820860"],
      endereco: {
        logradouro: "Rua Karstens",
        numero: "59",
        cep: "627533",
        complemento: "ap 401",
      },
    },
    {
      nome: "Greer",
      email: "gtumielli3@vimeo.com",
      telefone: ["9466883489", "94966883489"],
      endereco: {
        logradouro: "Rua Algoma",
        numero: "077",
      },
    },
    {
      nome: "Juliet",
      email: "jelphey4@wikipedia.org",
      telefone: ["1198123183", "11998123183"],
      endereco: {
        logradouro: "Rua Crownhardt",
        numero: "07",
        cep: "184366",
      },
    },
    {
      nome: "Blakeley",
      email: "bmccaughran5@blog.com",
      telefone: ["7919437785", "79919437785"],
      endereco: {
        logradouro: "Rua Stone Corner",
        numero: "40429",
        cep: "1000",
      },
    },
    {
      nome: "Leeann",
      email: "lhuckleby6@tuttocitta.it",
      telefone: ["9045673092", "90945673092"],
      endereco: {
        logradouro: "Rua Center",
        numero: "549",
      },
    },
    {
      nome: "Tildi",
      email: "tmilthorpe7@answers.com",
      telefone: ["3149463623", "31949463623"],
      endereco: {
        logradouro: "Rua Clyde Gallagher",
        numero: "3962",
      },
    },
  ];
 
  const sistemaEscolar = {
    encontrarAluno(nome) {
      return bancoDeEstudantes.find((estudante) => estudante.nome === nome);
    },
 
    editarAluno(nome, key, valor) {
      const aluno = this.encontrarAluno(nome);
      if (!aluno) {
        alert(`Aluno "${nome}" não encontrado.`);
        return;
      }
 
      if (key in aluno) {
        aluno[key] = valor;
      } else if (aluno.endereco && key in aluno.endereco) {
        aluno.endereco[key] = valor;
      } else {
        alert(`A chave "${key}" não existe.`);
        return;
      }
 
      alert(`Informação de "${nome}" atualizada com sucesso!`);
    },
  };
 
  document.addEventListener("DOMContentLoaded", () => {
    const nomeInput = document.querySelector(".display");
    const infoInput = document.querySelector(".display-edit");
    const selectCampo = document.querySelector("#editar-aluno");
    const btnNome = document.querySelector("#btn-nome");
    const btnEdit = document.querySelector("#btn-edit");
    const btnSim = document.querySelector(".button-verificacao.sim");
    const btnNao = document.querySelector(".button-verificacao.nao");
    const sessaoInicial = document.querySelector("#zero-sessao");
    const sessaoEdicao = document.querySelector("#primeira-sessao");
    const sessaoConfirmacao = document.querySelector("#segunda-sessao");
 
    let alunoAtual = null;
    let campoAtual = "";
    let novoValor = "";
 
    function alternarVisibilidade(elemento, mostrar) {
      elemento.style.display = mostrar ? "flex" : "none";
    }
 
    btnNome.addEventListener("click", () => {
      alunoAtual = sistemaEscolar.encontrarAluno(nomeInput.value.trim());
      if (alunoAtual) {
        alternarVisibilidade(sessaoInicial, false);
        alternarVisibilidade(sessaoEdicao, true);
      } else {
        alert("Aluno não encontrado!");
      }
    });
 
    btnEdit.addEventListener("click", () => {
      if (!infoInput.value.trim()) {
        alert("Preencha o campo de edição!");
        return;
      }
 
      campoAtual = selectCampo.value;
      novoValor = infoInput.value.trim();
 
      alternarVisibilidade(sessaoEdicao, false);
      alternarVisibilidade(sessaoConfirmacao, true);
    });
 
    btnSim.addEventListener("click", () => {
      sistemaEscolar.editarAluno(alunoAtual.nome, campoAtual, novoValor);
      alternarVisibilidade(sessaoConfirmacao, false);
      alternarVisibilidade(sessaoInicial, true);
      nomeInput.value = "";
      infoInput.value = "";
    });
 
    btnNao.addEventListener("click", () => {
      alternarVisibilidade(sessaoConfirmacao, false);
      alternarVisibilidade(sessaoEdicao, true);
    });
  });
