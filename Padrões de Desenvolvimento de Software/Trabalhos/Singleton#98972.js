class SistDeSegura {
    constructor() {
        this.senhaRobusta = "abc123";
    }
  
    static getInstance() {
        // instanciar caso n tenha sido 
        if (!this.instancia) {
            this.instancia = new SistDeSegura();
        }
        return this.instancia;
    }
  
    obterAcesso(senha) {
        if (senha === this.senhaDeAcesso) {
            console.log("Acesso Liberado!");
        } else {
            console.log("Acesso negado!");
        }
    }
  }
  
  const user = SistDeSegura.getInstance();
  
  user.obterAcesso("abc123");
  
  user.obterAcesso("AoXa32!#@");