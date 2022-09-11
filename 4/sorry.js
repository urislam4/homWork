const button = document.getElementById('button');


const input = document.getElementById('input');


button.onclick = () => {
    const tag = document.createElement("div");
    // метод  createElement создает новый HTML элемент 

    tag.setAttribute("class", "block")
    tag.innerText = input.value;
    document.body.append(tag);

    const deleTOR = document.createElement("button");
    deleTOR.innerText = "delete";

    deleTOR.onclick = () => {
        tag.remove();
    }

    input.value = "";

    tag.append(deleTOR);

   
}


















