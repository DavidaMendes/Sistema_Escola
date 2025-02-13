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

  removerAluno() {
    const alunoIndex = this.encontrarIndiceAluno(this.alunoParaRemover);

    if (alunoIndex !== -1) {
      bancoDeEstudantes.splice(alunoIndex, 1);
      this.paragrafo.textContent = `Aluno "${this.alunoParaRemover}" removido com sucesso!`;
    }
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
      this.display.focus();
    },

    limparDisplay() {
      this.display.value = "";
    },

    limparParagrafo() {
      sistemaEscolar.paragrafo.textContent = "";
      this.display.focus();
    },

    mostrarAluno() {
      document.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-select")) {
          this.processarAluno();
        }
      });

      this.display.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          this.processarAluno();
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

    processarAluno() {
      const valor = this.display.value.trim();
      this.limparDisplay();
      console.log("aaa");

      if (!valor) {
        sistemaEscolar.paragrafo.textContent =
          "Por favor, insira o nome de um aluno.";
        this.limparParagrafo();
        return;
      }

      const alunoIndex = sistemaEscolar.encontrarIndiceAluno(valor);
      this.limparParagrafo();

      if (alunoIndex !== -1) {
        sistemaEscolar.mostrarVerificador(valor);
      } else {
        sistemaEscolar.paragrafo.textContent = "Aluno não encontrado.";
      }
    },
  };
}

const escola = criaSistema();
escola.inicia();
