function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
}
//No hay ninguna diferencia en la logica de la función, 
//va a funcionar igual si le quitas el else 
function checkAge1(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
}
// ////
function checkAge2(age) {
    return (age > 18) ? true : confirm("Did parents allow you?")
}
////
function checkAge3(age) {
    return (age > 18) ? true : confirm("Did parents allow you?")
}
function checkAge(age) {
    return (age > 18) || confirm("Did parents allow you?")
}
////
function CheckMin(a, b){
    return (a < b) ? a : b;
}
////
let a = prompt("a value?")
let b = prompt("b value?")
alert(CalcPow(a, b))
function CalcPow(a, b){
    return (Number(a) && Number(b)) ? a * b : "Incorrect input"
}