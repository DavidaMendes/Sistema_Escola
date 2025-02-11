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
    paragrafo: document.querySelector("#paragrafo"),
    verificador: document.querySelector(".verificador-remover"),
    btnSim: document.querySelector(".button-verificacao.sim"),
    btnNao: document.querySelector(".button-verificacao.nao"),
    alunoParaRemover: "",
  
    encontrarIndiceAluno(nome) {
      return bancoDeEstudantes.findIndex((estudante) =>
        estudante["nome"].includes(nome)
      );
    },
  
    limparParagrafo() {
      this.paragrafo.textContent = "";
    },
  
    removerAluno() {
      const alunoIndex = this.encontrarIndiceAluno(this.alunoParaRemover);

      bancoDeEstudantes.splice(alunoIndex, 1);
      this.paragrafo.textContent = `Aluno "${this.alunoParaRemover}" removido com sucesso!`;
    },
  
    mostrarVerificador(nome) {
      this.alunoParaRemover = nome;
      this.verificador.style.display = "block";
    },
  
    esconderVerificador() {
      this.verificador.style.display = "none";
      this.alunoParaRemover = "";
    },
  };
  
  function criaSistema() {
    return {
      display: document.querySelector(".display"),
      btnSelect: document.querySelector(".btn-select"),
  
      inicia() {
        this.mostrarAluno();
      },
  
      limparDisplay() {
        this.display.value = "";
      },
  
      mostrarAluno() {
        document.addEventListener("click", (e) => {
          const el = e.target;
  
          if (el.classList.contains("btn-select")) {
            const valor = this.display.value.trim();
            this.limparDisplay();
  
            if (!valor) {
              sistemaEscolar.paragrafo.textContent =
                "Por favor, insira o nome de um aluno.";
              sistemaEscolar.limparParagrafo();
              return;
            }
  
            const alunoIndex = sistemaEscolar.encontrarIndiceAluno(valor);
            sistemaEscolar.limparParagrafo();
  
            if (alunoIndex !== -1) {
              sistemaEscolar.mostrarVerificador(valor);
            } else {
              sistemaEscolar.paragrafo.textContent = "Aluno não encontrado.";
            }
          }
        });
  
        sistemaEscolar.btnSim.addEventListener("click", () => {
          sistemaEscolar.removerAluno();
          sistemaEscolar.esconderVerificador();
        });
  
        sistemaEscolar.btnNao.addEventListener("click", () => {
          sistemaEscolar.esconderVerificador();
        });
      },
    };
  }
  
  const escola = criaSistema();
  escola.inicia();
  