const box_one = alert("do you want to play the game");

const box_two = alert("it s a trick game but you can prabably handle it");

const box_three = alert("The prize fund is based on your result");


const first_name = prompt("the first game");

const second_number = prompt("second game");

const third_num = prompt("third game");

if (first_name > second_number && second_number > third_num ) {
    console.log( first_name + '>' + second_number + '>' + third_num + "---" + 'prize 50$ -_-' )
} else if (first_name < second_number && second_number < third_num) {
    console.log (first_name + '<' + second_number + '<' + third_num + "---" + 'prize 505$ -_-')
} else if (first_name > second_number && second_number < third_num) {
    console.log(first_name + '>' + second_number + '<' + third_num + "---" + 'prize 5055$ -_-')
} else if ( first_name < second_number && second_number < third_num){
    console.log(first_name + '<' + second_number + '<' + third_num + "---" + 'prize 5056$ -_-')
} else if (first_name> second_number && second_number < third_num) {
    console.log(first_name + '>' + second_number + '<' + third_num+ "---" + 'prize 5650$ -_-')
} else if (first_name == second_number && second_number == third_num){
    console.log(first_name + '=' + second_number + '=' + third_num+ "---" + 'prize 2350$ -_-')
} else if (first_name == second_number && second_number > third_num){
    console.log (first_name + '=' + second_number + '>' + third_num+ "---" + 'prize 7850$ -_-')
} else if (first_name > second_number && second_number == third_num) {
    console.log(first_name + '>' + second_number + '=' + third_num+ "---" + 'prize 1250$ -_-')
} else if (first_name < second_number && second_number == third_num) {
    console.log(first_name + '<' + second_number + '=' + third_num+ "---" + 'prize 9850$ -_-')
}  else if (first_name == second_number && second_number < third_num){
    console.log(first_name + '=' + second_number + '<' + third_num+ "---" + 'prize 5760$ -_-')
} else {
    console.log(" Type a number ")
}


 





