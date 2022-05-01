const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	let arr = [];
	if (typeof str !== 'string') {
  	str = String(str);
  }
  if (typeof options.addition !== 'string') {
  	options.addition = String(options.addition);
  }
  
  if (options.repeatTimes !== undefined) {
  	for (let i = 0; i < options.repeatTimes; i++) {
    	arr.push(str)
    }
  } else {
  	arr.push(str)
  }
  
  let addArr = [];
  if (options.addition !== undefined) {
    if (options.additionRepeatTimes !== undefined) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        addArr.push(options.addition)
      }
    } else {
      addArr.push(options.addition)

    }
    
    if (options.additionSeparator !== undefined) {
      for (let i = 0; i < addArr.length - 1; i++) {
        addArr[i] = addArr[i] + options.additionSeparator;
      }
    } else {
        for (let i = 0; i < addArr.length - 1; i++) {
        addArr[i] = addArr[i] + '|';
      }
    }
    let addStr = addArr.join('');
    console.log(addStr)
    	if (addStr !== 'undefined') {
       	for (let i = 0; i < arr.length; i++) {
      	arr[i] = arr[i] + addStr;
    	}
    }

  }


	if (options.separator !== undefined) {
		for (let i = 0; i < arr.length - 1; i++) {
    	arr[i] = arr[i] + options.separator;
    }
  } else {
  		for (let i = 0; i < arr.length - 1; i++) {
    	arr[i] = arr[i] + '+';
    }
  }
  return arr.join('');
}

module.exports = {
  repeater
};
