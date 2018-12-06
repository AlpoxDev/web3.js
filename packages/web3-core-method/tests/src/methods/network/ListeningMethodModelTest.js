import ListeningMethod from '../../../../src/methods/network/ListeningMethod';

/**
 * ListeningMethod test
 */
describe('ListeningMethodTest', () => {
    let model;

    beforeEach(() => {
        model = new ListeningMethod({}, {}, {});
    });

    it('rpcMethod should return net_listening', () => {
        expect(model.rpcMethod)
            .toBe('net_listening');
    });

    it('parametersAmount should return 0', () => {
        expect(model.parametersAmount)
            .toBe(0);
    });

    it('beforeExecution should do nothing with the parameters', () => {
        model.parameters = [];
        model.beforeExecution();

        expect(model.parameters[0])
            .toBe(undefined);
    });

    it('afterExecution should just return the response', () => {
        expect(model.afterExecution('version'))
            .toBe('version');
    });
});