let age = 30;
if (!(age >= 14 && age <= 90)){
    alert("Out range")
}
else{
    alert("In range")
}
////
if(age <= 14 || age >= 90){
    alert("In range")
}
else{
    alert("Out range")
}
////
if (-1 || 0) alert( 'first' ); //True
if (-1 && 0) alert( 'second' ); //False
if (null || -1 && 1) alert( 'third' ); //False