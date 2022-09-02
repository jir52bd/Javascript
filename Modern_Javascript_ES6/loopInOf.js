//for loop, for in , for of

let i = 10;
for( ; ; i++){
    if(i <= 20){
        if(i % 5 == 0 ){
            console.log(i);
        }
    }else {
        break;
    } 
    
}

//for in loop

const obj = {
    name: 'Javascript',
    estd: '1995',
    founder: 'Brendan rich'
}

for(property in obj){
    console.log(obj[property]);
}


//for of

const myStr = 'I love javascript beauty!';

for(elements of myStr){
    console.log(elements);
}



