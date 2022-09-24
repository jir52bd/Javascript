const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise 2 resolved`);
  }, 2000);
});

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));

/*
    output:
    Promise 1 resolved
    //wating 2 second
    Promise 2 resolved
*/

/*
Promise.all([promise1, promise2]).then((res) => {
    console.log(res);
});
*/
/*
    output:
    [ 'Promise 1 resolved', 'Promise 2 resolved' ]
*/


Promise.race([promise1, promise2]).then((res) => {
  console.log(res);
});

/*
    output:
    Promise 1 resolved
    //race give out put for which will complete first 
*/