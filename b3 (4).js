let form =document.getElementById("myForm");
let result = document.getElementById("result");
let list = document.createElement("ol");
result.appendChild(list);

form.addEventListener ("submit", (e) => {
    e.preventDefault();
    let subject = document.getElementById('subject').value;

    if (subject.trim() === "") {
        alert('Tên môn học không được để trống!');
    }

    let listItem = document.createElement("li");
    listItem.textContent = subject;
    list.appendChild(listItem);
    document.getElementById('subject').value = "";
})



