let i = 3;
while (i) {
    alert(i--);
}
//The answer is 1


let i = 0;
while (++i < 5) alert(i);
//Itera 4 veces y a la quinta no se cumple la condicion del while
//por lo que no muestra el quinto alert

let i = 0;
while (i++ < 5) alert(i);
//Itera las 5 veces ya que cuando llega a la quinta iteracion
//incrementa i en uno pero sigue guardando el numero anterior 4 por lo que while(4 < 5) == true
//y muestra el 5º alert.


for (let i = 0; i < 5; i++) alert(i);
for (let i = 0; i < 5; ++i) alert(i);
//Entre los dos bucles for no hay diferencia a la hora de incrementar el valor i
//porque hace primero la comparacion i < 5


//Use the for loop to output even numbers from 2 to 10
for(let i = 2; i < 10; i++){
    if(i % 2 == 2){
        alert(i)
    }
}


for (let i = 0; i < 3; i++) {
    alert(`number ${i}!`);
}
//Answer
let i = 0
while (i < 3) {
    alert(`number ${i}!`)
    i++
}
