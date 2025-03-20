let btn = document.getElementById("btn");
let count = 0;
let number = document.createElement("p");
document.body.appendChild(number);
number.innerText = `Số lần bấm : ${count}`;
btn.onclick = () => {
    count++;
    number.innerText = `Số lần bấm : ${count}`;
}
