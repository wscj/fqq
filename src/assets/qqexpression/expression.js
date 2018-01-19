import Vue from 'vue'

const expression = {};

for (let i = 1; i <= 100; i++) {
  expression[i] = require('./' + i + '.gif');
}

Vue.prototype.expression = expression;