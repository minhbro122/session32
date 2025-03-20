let btn = document.getElementById("btn");

const changeColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

btn.onclick = () => {
    document.body.style.backgroundColor = changeColor();
}