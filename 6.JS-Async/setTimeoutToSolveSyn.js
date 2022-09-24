const processOrder = (customer) => {
    console.log(`Processing Order for customer 1`);
    //setTimeout() is runtime environmet built in function
    setTimeout(() => {
        console.log(`Order completed.`);
    }, 3000)
    console.log(`Order processed for customer 1`);
}

console.log(`Take order from customer 1`);

processOrder();

console.log(`Completed order for customer 1`);

/*
    output:
    Take order from customer 1     
    Processing Order for customer 1
    Order processed for customer 1 
    Completed order for customer 1 
    //for setTimeout() --> go web API (after completed process) --> callBack Queue --> (event loop) --> call Stack
    Order completed.
*/