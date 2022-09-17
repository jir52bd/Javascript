function basicCount(value) {
    for(let i = 0; i < value; i++)
    {
        if(value < 1) break;
        if(i % 2 == 0)
        {
            if( i === 0) continue;
            console.log(`Even ${i} `);
        }
    }
}

basicCount(10);