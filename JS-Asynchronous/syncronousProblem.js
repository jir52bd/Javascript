
const processOrder = () => {
    console.log(`Processing Order for customer 1`);
    var currentTime = new Date().getTime();
    while(currentTime + 3000 >= new Date().getTime());
    console.log(`Order processed for customer 1`);
}

console.log(`Take order from customer 1`);

processOrder();

console.log(`Completed order for customer 1`);

/*
    Take order from customer 1     
    Processing Order for customer 1
    //wating 3 seconds then ... 
    Order processed for customer 1
    Completed order for customer 1
*/