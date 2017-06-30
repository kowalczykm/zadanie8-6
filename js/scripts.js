// scripts.js
/* plik javascript*/
var a = prompt('Enter a');
alert('a = ' + a);
var b = prompt('Enter b');
alert('b = ' + b);
var value = (a * a) + (2 * a * b) - (b * b);
alert('wynik jest równy ' + value);

if ( value > 0 ) {
    alert('wynik dodatni');
}
else if ( value < 0 ) {
    alert('wynik ujemny');
}
else {
	alert('wynik zerowy');
}
// konsola
console.log('a: ' + a + ' and ' + b + ' is equal to: ' + triangleArea);