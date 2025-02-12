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
  adicionarAluno(nome, email, telefone, rua, num, cep, complemento) {
    const novoAluno = {
      nome: nome,
      email: email,
      telefone: telefone,
      endereco: {
        logradouro: rua,
        numero: num,
        cep: cep,
        complemento: complemento,
      },
    };
    bancoDeEstudantes.push(novoAluno);
    console.log(novoAluno);
  },
};

function criaSistema() {
  return {
    btnSelect: document.querySelector("#submit-button"),
    displays: document.querySelectorAll(".display-adic"),
    paragrafo: document.querySelector("#paragrafo"),

    inicia() {
      this.mostrarAluno();
    },

    escreverParagrafo(valor) {
      this.paragrafo.textContent = valor;
    },

    limparParagrafo() {
      this.paragrafo.textContent = "";
    },

    limparDisplays() {
      this.displays.forEach((displays) => {
        displays.value = "";
      });
    },

    valoresDisplays() {
      const valor = [];
      this.displays.forEach((display) => {
        valor.push(display.value);
      });
      return valor;
    },

    mostrarAluno() {
        document.addEventListener("click", (e) => {
            const el = e.target;
    
            if (el.id === "submit-button") { 
                const valor = this.valoresDisplays();
                let camposVazios = false;
    
                this.displays.forEach((display, index) => {
                    if (valor[index].trim() === "") {
                        display.style.border = "2px solid red";
                        camposVazios = true;
                    } else {
                        display.style.border = ""; 
                    }
                });
    
                if (camposVazios) {
                    this.escreverParagrafo("Todos os campos devem ser preenchidos!");
                    return;
                }
    
                const [nome, email, telefone, rua, num, cep, complemento] = valor;
    
                sistemaEscolar.adicionarAluno(nome, email, telefone, rua, num, cep, complemento);
    
                this.escreverParagrafo(`Aluno "${nome}" adicionado com sucesso!`);
    
                this.limparDisplays();
            }
        });
    }
    ,
  };
}

const escola = criaSistema();
escola.inicia();
