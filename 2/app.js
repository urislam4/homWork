const name =[
    {
        name:"tor",
        salary:50
    } ,
    {
        name:"black_dava",
        salary:23
    } ,
    
    {
        name:"flesh",
        salary:33
    } ,
    {
        name:"supermem",
        salary:100
    }
]

const marvel = [];

for(let users of name ){
    if(users.salary > 33) {
        marvel.push(users)
    }
}

console.log(marvel)


