const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = [];

  if (!Array.isArray(members)) {
    return false 
  }
  // for (let i = 0; i < members.length; i++) {
  //   members[i] = members[i].trim();
  // }
  for(let i = 0; i < members.length; i++) {
    if (typeof(members[i]) == 'string') {
      members[i] = members[i].trim();
      arr.push(members[i])
    }
  }
  return arr.map(item => item[0]).join('').toUpperCase().split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
