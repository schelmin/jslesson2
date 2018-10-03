const n = parseFloat(prompt('Enter Fibonacci number'));

function fibonacciLoop(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
alert( 'loop method: '+fibonacciLoop(n) );

function fibonacciRec(n) {
  return n <= 1 ? n : fibonacciRec(n - 1) + fibonacciRec(n - 2);
}

alert('recursion: '+fibonacciRec(n));






// let fibonacci = [n];
//     fibonacci[1]=1;
//     fibonacci[2]=1;
//     fibonacci[3]=fibonacci[1]+fibonacci[2];
//     fibonacci[n]=fibonacci[n-1]+fibonacci[n-2];
    

// for (let i = 0; i < 10; i++) {
//     document.write(i + '<br>');
//     }
// function prn(val) {
//     document.write(val + '<br>');
// }

// for (let i = 10; i >= 0; i=i--) {
//     document.write(i + '<br>');
//     }
    
// for (let i = 10; i >= 0; i=i-2) {
//     document.write(i + '<br>');
//     }


// let counter = 0;    
// while (counter <=10) {
//     prn(counter);
//     counter++;
// }    

// let counter = 0;
// do {
//   prn(counter);
//   counter++; 
// } while (counter <=10)

// let num = parseFloat(prompt('Enter a number'));
// while (Number.isNaN(num)) {
//     alert('Please Enter a number')
//     num = parseFloat(prompt('Enter a number'));
// }

// let num;
// do {
//     num=parseFloat(prompt('Enter a number'));
// } while(Number.isNaN(num));

// let products = [];
// products[0]='Tesla Model X';
// products[1]='Ferrari F430';
// products.push ('Chevrolet Malibu');
// products.push ('Fiat Punto');
// prn(products.length);
// products[100] = 'ZAZ';
// prn(products.length);
// prn(products);
// for (let i = 0; i < products.length; i++) {
//   prn(products[i]) ;
// }
//products.forEach(prn)

// products.forEach(function(el) {
//     prn(el);
// });