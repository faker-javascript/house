import test from 'ava';
import house from './index.js';

test('house room return type to be string', t => {
    t.is(typeof house().room(), 'string');
});

test('house furniture return type to be string', t => {
    t.is(typeof house().furniture(), 'string');
});