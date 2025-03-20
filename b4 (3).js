let form = document.getElementById("myForm");
let check = document.getElementById("check");

const checkEmail = () => {
let email = document.getElementById("email").value;

    if (email.includes('@') && email.endsWith('.com')) {
        check.innerText = 'Email hợp lệ!';
        check.style.color = 'green';
    } else {
        check.innerText = 'Email không hợp lệ!';
        check.style.color = 'red';
    }
}

form.addEventListener ("submit" , (e) => {
    e.preventDefault();
    checkEmail();
})



