// function fib(n){
//     if (n<2){
//         return n;
//     }
//     return fib(n-1) + fib(n-2);
// }

// console.log(fib(22));

// let fib = {
//     i: 0,
//     [Symbol.iterator](n){
//         return this;

//     },
//     next() {
//                 return {value : this.i++, done : this.i >10};
//             },
// };

// for (const el of fib) {
//     console.log(el);

// }

const fib = (n) => ({
  [Symbol.iterator]: () => {
    let i = 1;
    let old = 0,
      new1 = 0;
      console.log("The Fibonacci Series till " + n + "th term is :\n");
    return {
      next: () =>{
        if (i++ <= n) {
          [old, new1] = [new1, (old + new1) || 1];
          return { value: old, done: false };
        } else {
          return { done: true };
        }
      }
    }
  }
});


console.log([ ...fib(10) ]);
