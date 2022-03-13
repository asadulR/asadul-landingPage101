const anotherLoginBtn = () => {
    const emailField = document.getElementById('input-nav-email');
    const email = emailField.value;

    const worngError = document.getElementById('nav-worng-email');
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email)) {
        
        // alert('Please provide a valid email address');
        worngError.classList.remove('d-none');
        email.focus;
        return false;
    }
    else if(filter.test(email)){
        worngError.classList.add('d-none');

    }




    const worngPassError = document.getElementById('worng-login-password');
    const passField = document.getElementById('input-nav-password');
    const password = passField.value;


    const passwordFilter = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    


    if(!passwordFilter.test(password)){
        // alert('please provide a valid password.')
        
        worngPassError.classList.remove('d-none');
    }
    else if(passwordFilter.test(password)){
        worngPassError.classList.add('d-none');
        location.href = "/index.html";
    }
}






//  keyboard enter key press event
const enterBtn = document.getElementById("login-btn");
const txt = document.getElementById("input-nav-email");

txt.addEventListener("keypress", function(event) {
    // event.preventDefault();
    // console.log(event.key);
    if (event.key === 'Enter'){
        enterBtn.click();
    }
        
});


const password = document.getElementById("input-nav-password");
// console.log(password)
password.addEventListener("keypress", (event) => {
    if (event.key === 'Enter'){
        enterBtn.click();
    }
        
});