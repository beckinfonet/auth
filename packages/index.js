import commonFunction from './common';
import testMethod from './server';

export default {
    commonFunction,
    testMethod
}

console.log('testing defaults', commonFunction(), testMethod())