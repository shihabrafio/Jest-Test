function reversestring(string) {
    let a=[];
    for(let i=string.length-1;i>=0;i--){
        a.push(string[i])
    }
    return a.join("");
  }
  module.exports = reversestring;