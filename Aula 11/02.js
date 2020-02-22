class Medico {
    constructor(nome, numeroRegistro, planoMedico) {
        this._nome = nome;
        this._numeroRegistro = numeroRegistro;
        this._planoMedico = planoMedico;
    }
    setNome(nome) {
        this._nome = nome;
    }
    getNome() {
        return this._nome;
    }
    setNumeroRegistro(numeroRegistro) {
        this._numeroRegistro = numeroRegistro;
    }
    getNumeroRegistro() {
        return this._numeroRegistro;
    }

    setPlanoMedico(planoMedico) {
        this._planoMedico = planoMedico;
    }
    getPlanoMedico() {
        return this._planoMedico;
    }
    tratarPaciente(tratamentoAtivo) {
        return `Em Tratamento do Paciente ${tratamentoAtivo}`;
    } 
    trabalhaHospital(trabalhoHospitalAtivo) {
        return `Em Trabalho no Hospital: ${trabalhoHospitalAtivo}`;
    }
};

const medico = new Medico("Maria", 90, "Unimed");
console.log(medico.getNome());
console.log(medico.getNumeroRegistro());
console.log(medico.getPlanoMedico());

medico.setNome("João");
medico.setNumeroRegistro(345);
medico.setPlanoMedico("Cauzzo");

console.log(medico.getNome());
console.log(medico.getNumeroRegistro());
console.log(medico.getPlanoMedico());

console.log(medico.trabalhaHospital(true));
console.log(medico.tratarPaciente(false));

class ClinicoGeral extends Medico {
    constructor(nome, numeroRegistro, planoMedico, empresa) {
        super(nome, numeroRegistro, planoMedico);
        this._empresa = empresa;
    }
    setEmpresa(empresa) {
        this._empresa = empresa;
    }
    getEmpresa() {
        return this._empresa;
    }
    aplicarMedicamento(aplicacaoMedicamento) {
        return `Em Aplicação de Medicamento ${aplicacaoMedicamento}`;
    } 
};

const clinicogeral = new ClinicoGeral("Maria", 90, "Unimed", "Hospital de Caridade");
console.log(clinicogeral.getNome());
console.log(clinicogeral.getNumeroRegistro());
console.log(clinicogeral.getPlanoMedico());
console.log(clinicogeral.getEmpresa());

clinicogeral.setEmpresa("Hospital da UFSM");

console.log(clinicogeral.getEmpresa());

console.log(clinicogeral.aplicarMedicamento(true));
console.log(clinicogeral.trabalhaHospital(true));


class Cirurgiao extends Medico {
    constructor(nome, numeroRegistro, planoMedico, especialidade) {
        super(nome, numeroRegistro, planoMedico);
        this._especialidade = especialidade;
    }
    setEspecialidade(especialidade) {
        this._especialidade = especialidade;
    }
    getEspecialidade() {
        return this._especialidade;
    }
    aplicarMedicamento(aplicacaoMedicamento) {
        return `Em Aplicação de Medicamento ${aplicacaoMedicamento}`;
    } 
};

const cirurgiao = new Cirurgiao("Maria", 90, "Unimed", "Dermatologia");
console.log(cirurgiao.getNome());
console.log(cirurgiao.getNumeroRegistro());
console.log(cirurgiao.getPlanoMedico());
console.log(cirurgiao.getEspecialidade());

cirurgiao.setEspecialidade("Cardiovascular");

console.log(cirurgiao.getEspecialidade());

console.log(cirurgiao.aplicarMedicamento(true));
console.log(medico.tratarPaciente(false));