function capitalize(string) {
    let a=[]
    a[0] = string[0].toUpperCase();
    for(let i=1;i<string.length;i++){
        a.push(string[i])
    }
    return a.join('');
  }
  module.exports = capitalize;