const data = [
    {
        id: 1,
        nama: "sepatu",
        price: 100000000
    },
    {
        id: 1,
        nama: "sepatu",
        price: 100000000
    },
    {  
        id: 2,
        nama: "sepatus",
        price: 10000100
    },
    {  
        id: 2,
        nama: "sepatus",
        price: 10000100
    },
    {  
        id: 2,
        nama: "sepatus",
        price: 10000100
    },
    {  
        id: 3,
        nama: "sepatuw",
        price: 100001000
    },
    {  
        id: 3,
        nama: "sepatuw",
        price: 100001000
    },
    {  
        id: 3,
        nama: "sepatuw",
        price: 100001000
    },
    {  
        id: 3,
        nama: "sepatuw",
        price: 100001000
    }
]

const hasil = data.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue.id]) {
        accumulator[currentValue.id] = 0;
    }  

    accumulator[currentValue.id] += currentValue.price;


    console.log({accumulator, currentValue});
    return accumulator
}, {}
)
console.log(hasil);
