const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  str : '',
  getLength() {
    this.str.length;
    return this;
  },
  addLink(value) {
    this.str = this.str + value;
    return this;
  },
  removeLink(position) {
    let str2 = this.str.split('').splice(position - 1, 1).join('');
    this.str = this.str.split('').filter((item) => item !== str2).join('');
    return this;
  },
  reverseChain() {
    this.str = this.str.split('').reverse().join('');
    return this;
  },
  finishChain() {
    this.str;
    return this;
  }
};

module.exports = {
  chainMaker
};
