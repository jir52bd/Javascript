const takeOrder = (customer, callback) => {
    console.log(`Take order from ${customer}`);
    callback(customer);
}

const processOrder = (customer, callback) => {
    console.log(`Processing Order for customer 1`);
    //setTimeout() is runtime environmet built in function
    setTimeout(() => {
        console.log(`Order completed.`);
        console.log(`Order processed for ${customer}`);
        callback(customer);
    }, 3000)
}

const orderCompleted = (customer) => {
    console.log(`Completed order for ${customer}`);
}

takeOrder('customer 1', (customer) => {
    processOrder(customer, (customer) => {
        orderCompleted(customer);
    });
})

//for undestanding the process let print  hello
console.log(`Hello`); // synchronous procss


/*
    output:
    Take order from customer 1     
    Processing Order for customer 1
    //code working and print Hello process
    Hello
    //asynchronous workincg and after completed then result below 
    Order completed.
    Order processed for customer 1
    Completed order for customer 1
*/