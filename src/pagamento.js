export default class ServicoDePagamento {
    #pagamentos // Propriedade Privada

    constructor() { // Primeiro método a ser executado quando usar a Classe
        this.#pagamentos = [];
    }

    pagar(codigoBarras, empresa, valor) { // Método

        let categoriaPagamento;

        if(valor > 100.00) {
            categoriaPagamento = 'cara';
        } else {
            categoriaPagamento = 'padrão';
        }

        this.#pagamentos.push({
            codigoBarras: codigoBarras,
            empresa: empresa,
            valor: valor,
            categoria: categoriaPagamento
        });
    }

    consultarUltimoPagamento() {
        return this.#pagamentos.at(-1);
    }
}