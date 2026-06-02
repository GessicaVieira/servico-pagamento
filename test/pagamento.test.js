import assert from 'node:assert';
import ServicoDePagamento from '../src/pagamento.js';

describe('Classe de Serviço de Pagamento', () => {

    it('Validar que o pagamento é adicionado na lista de pagamentos com categoria cara', function () {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, '0987-7656-3475');
        assert.equal(ultimoPagamento.empresa, 'Samar');
        assert.equal(ultimoPagamento.valor, 156.87);
        assert.equal(ultimoPagamento.categoria, 'cara');
    });


    it('Validar que o pagamento recebe categoria padrão', function () {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('1111-2222-3333', 'Empresa Teste', 80.00);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, '1111-2222-3333');
        assert.equal(ultimoPagamento.empresa, 'Empresa Teste');
        assert.equal(ultimoPagamento.valor, 80.00);
        assert.equal(ultimoPagamento.categoria, 'padrão');
    });


    it('Validar que consulta retorna o último pagamento realizado', function () {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('0001', 'Empresa A', 50.00);
        servicoDePagamento.pagar('0002', 'Empresa B', 200.00);

        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, '0002');
        assert.equal(ultimoPagamento.empresa, 'Empresa B');
        assert.equal(ultimoPagamento.valor, 200.00);
        assert.equal(ultimoPagamento.categoria, 'cara');
    });

});