class Disciplina {
    constructor(matricula, nome, nota1, nota2){
        this._matricula = matricula;
        this._nome = nome;
        this._nota1 = nota1;
        this._nota2 = nota2;
    }
    setMatricula (matricula){
        this._matricula = matricula;
    }
    getMatricula (){
        return this._matricula;
    }
    setNome (nome){
        this._nome = nome;
    }
    getNome (){
        return this._nome;
    }
    setNota1 (nota1){
        this._nota1 = nota1;
    }
    getNota1 (){
        return this._nota1;
    }
    setNota2 (nota2){
        this._nota2 = nota2;
    }
    getNota2 (){
        return this._nota2;
    }

    mediaFinal(){
        const resultado = (this._nota1 + this._nota2)/2;
        return `${this._nome} teve a média final igual a ${resultado}`;
    }    
}

const disciplina = new Disciplina(25, "Teste", 78, 24.5);
console.log(disciplina.mediaFinal());