let form = document.getElementById('form'),
    email = document.getElementById('email'),
    pass = document.getElementById('pass');

email.addEventListener('keyup', function(){
    email.previousElementSibling.classList.add("active", "highlight");
    if(email.value == ''){
        email.previousElementSibling.classList.remove("active", "highlight");
    }
})

pass.addEventListener('keyup', function(){
    pass.previousElementSibling.classList.add("active", "highlight");
    if(pass.value == ''){
        pass.previousElementSibling.classList.remove("active", "highlight");
    }
})