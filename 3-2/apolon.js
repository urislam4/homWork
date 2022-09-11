const c = prompt("Напишите первое слово");


const b = prompt("Напишите второе слово");


function calcSum(c, b, ram, rem, emilia){
  let hulk1 = c;
  let tor1 = b;

  if(hulk1.length > tor1.length){
      rem()
  } else if(tor1.length > hulk1.length) {
      ram();
  } else {
      emilia();
  }
}


function rem(){
  console.log(c + " > " + b + "  Первое слово больше чем второй");
}

function ram(){
  console.log( c + " < " + b + "  Первое слово меньше чем второй");
}

function emilia(){
  console.log(c + " = " + b + " неправильно");
}

calcSum(c,b, ram, rem, emilia);