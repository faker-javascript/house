import {expectType} from 'tsd';
import house from './index.js';

expectType<string>(house({locale: 'en_US'}).room());
expectType<string>(house().room());
expectType<string>(house().furniture());
