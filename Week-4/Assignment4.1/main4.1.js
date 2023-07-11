let time;
const divby5 = new Promise(function getNumber(resolve, reject) {
  var check = Math.floor(Math.random() * 100) + 1;
  console.time("timer1");
  if (check % 5 == 0) {
     time = console.timeEnd("timer1");
    reject(check);
  } else {
    console.timeEnd("timer1");
    resolve(check);
  }
//   console.timeEnd();
});

divby5
  .then((val) =>
    console.log(`${val} is not divisble by 5\n Time taken to resolve ${time}`)
  )
  .catch((val) =>
    console.log(`${val} is divisble by 5\n Time taken to reject ${time}`)
  )
  .finally(console.log("Fulfilled"));

// console.log(time);
