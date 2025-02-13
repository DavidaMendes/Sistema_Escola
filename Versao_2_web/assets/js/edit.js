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

  escola: criarSistema(),

  escreverParagrafo(valor) {
    this.escola.paragrafo.textContent = valor; // Corrigir a referência para o parágrafo
  },

  limparParagrafo() {
    this.escola.paragrafo.textContent = ""; // Corrigir a referência para o parágrafo
  },

  editarAluno(nome, key, valor) {
    const aluno = this.encontrarAluno(nome);
    if (!aluno) {
      this.escreverParagrafo(`Aluno "${nome}" não encontrado.`);
      return;
    }

    if (key in aluno) {
      aluno[key] = valor;
    } else if (aluno.endereco && key in aluno.endereco) {
      aluno.endereco[key] = valor;
    } else {
      this.escreverParagrafo(`A chave "${key}" não existe.`);
      return;
    }

    this.escreverParagrafo(`Informação de "${nome}" atualizada com sucesso!`);
  },
};

function criarSistema() {
  return {
    nomeInput: document.querySelector(".display"),
    infoInput: document.querySelector(".display-edit"),
    selectCampo: document.querySelector("#editar-aluno"),
    btnNome: document.querySelector("#btn-nome"),
    btnEdit: document.querySelector("#btn-edit"),
    btnSim: document.querySelector(".button-verificacao.sim"),
    btnNao: document.querySelector(".button-verificacao.nao"),
    sessaoInicial: document.querySelector("#zero-sessao"),
    sessaoEdicao: document.querySelector("#primeira-sessao"),
    sessaoConfirmacao: document.querySelector("#segunda-sessao"),
    paragrafo: document.querySelector("#paragrafo"),

    alunoAtual: null,
    campoAtual: "",
    novoValor: "",

    alternarVisibilidade(elemento, mostrar) {
      elemento.style.display = mostrar ? "flex" : "none";
    },

    iniciar() {
      this.nomeInput.focus();

      this.btnNome.addEventListener("click", () => {
        this.alunoAtual = sistemaEscolar.encontrarAluno(this.nomeInput.value.trim());
        if (this.alunoAtual) {
          this.alternarVisibilidade(this.sessaoInicial, false);
          this.alternarVisibilidade(this.sessaoEdicao, true);
          this.infoInput.focus();
          sistemaEscolar.limparParagrafo();
        } else {
          sistemaEscolar.escreverParagrafo("Aluno não encontrado!");
        }
      });

      this.btnEdit.addEventListener("click", () => {
        if (!this.infoInput.value.trim()) {
          sistemaEscolar.escreverParagrafo("Preencha o campo de edição!");
          return;
        }

        this.campoAtual = this.selectCampo.value;
        this.novoValor = this.infoInput.value.trim();

        this.alternarVisibilidade(this.sessaoEdicao, false);
        this.alternarVisibilidade(this.sessaoConfirmacao, true);
      });

      this.btnSim.addEventListener("click", () => {
        sistemaEscolar.editarAluno(this.alunoAtual.nome, this.campoAtual, this.novoValor);
        this.alternarVisibilidade(this.sessaoConfirmacao, false);
        this.alternarVisibilidade(this.sessaoInicial, true);
        this.nomeInput.value = "";
        this.infoInput.value = "";
      });

      this.btnNao.addEventListener("click", () => {
        this.alternarVisibilidade(this.sessaoConfirmacao, false);
        this.alternarVisibilidade(this.sessaoEdicao, true);
      });

      this.nomeInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          this.btnNome.click();
        }
      });

      this.infoInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          this.btnEdit.click();
        }
      });
    }
  };
}

const escola = criarSistema();
escola.iniciar();