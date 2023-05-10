class calculator{
    add(a,b){
        return a+b;
    }

    subtract(a,b){
        return a-b;
    }

    multiply(a,b){
        return a*b;
    }

    divide(a,b){
      if(b==0){
        throw new Error('Cant divide by zero')
      }else return a/b;
    }
}
module.exports = calculator;