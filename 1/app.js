const animals ={
    cat:{
        name:"sharick",
        age:"10",
        first_children:{
            name:"abuzza",
            age:"1",
        }
    },
    cow:{
        name:"chazbik",
        age:"20",
        first_children:{
            name:"baku",
            age:"12",
            second_children:{
                name:"baka",
                age:"10"
            }
        }
    },
    dog:{
        name:"bubik",
        age:"30",
        no_children:"no",

    }
}


console.log(animals.cat);
console.log(animals.cat.first_children);

console.log(animals.cow);
console.log(animals.cow.first_children.second_children);

console.log(animals.cat);
console.log(animals.dog.no_children);
    
