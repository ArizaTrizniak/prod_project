import {getQueryParams} from './addQueryParams';

describe('shared/url/addQueryParams', function() {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'value'
        });
        expect(params).toBe('?test=value');
    });

    test('test with multiple params', () => {
        const params = getQueryParams({
            test: 'value',
            second: 'more'
        });
        expect(params).toBe('?test=value&second=more');
    });

    test('test with undefined', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined
        });
        expect(params).toBe('?test=value');
    });
});