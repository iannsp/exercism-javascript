//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const exprPattern = {
'{':'}',
'[':']',
'(':')'
}
export const isPaired = (expr) => {
 const paired = (expr, acc) => {
  if( exprPattern[acc.slice().pop()] == expr[0]){
    acc.pop(); 
    expr = expr.substring(1);
  }else{
    acc.push(expr[0]); 
    expr = expr.substring(1);
  }
  if(expr.length==0) 
    return acc.length===0;

  return paired(expr, acc);
};
    expr = expr.replace(/[^\{\(\[\]\}\)]/g ,  '');
    let l = expr[0];
    return paired(expr.substring(1), [l]);
};

//console.log(isPaired('[{1234({})}()'));

