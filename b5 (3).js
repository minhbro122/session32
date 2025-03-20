let form = document.getElementById("myForm");
let list = document.getElementById("list");

const deleteElement = (button) => {
    button.addEventListener("click" , function () {
        let listItem = this.parentElement;
        let hr = listItem.nextElementSibling;
        
        listItem.remove();
        if (hr && hr.tagName === "HR") {
            hr.remove(); 
        }
    })
}

document.querySelectorAll("#list .btn1").forEach(deleteElement);

form.addEventListener("submit" , (e) => {
    e.preventDefault();
    let mission = document.getElementById('mission').value;

    if (mission.trim() === "") {
        alert('Tên nhiệm vụ không được để trống!');
        return; 
    }

    let listItem = document.createElement("li");
    listItem.innerHTML = `<span>${mission}</span> <button class="btn1">x</button>`;
    list.appendChild(listItem);
    let listItem2 = document.createElement("hr");
    list.appendChild(listItem2);
    document.getElementById('mission').value = "";
    deleteElement(listItem.querySelector(".btn1"));
})