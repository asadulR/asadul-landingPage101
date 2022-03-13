const loginToDiscover = () => {
    const discoverBtn = document.getElementById('discover-btn');
    const container = document.getElementById('login');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="row mt-5 control-width mx-auto">
        <h5>Login</h5>
        <div class="col-12">
        <label for="inputEmail3" class="col-sm-2 col-form-label" >Email</label>
        <input type="email" class="form-control" id="inputEmail3" required placeholder="Enter your email">
        <h5 id="worng-email" class="text-center d-none text-danger fs-6">Please provide a valid email address.</h5>
        </div>
        <div class="col-12">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
        <input type="password" class="form-control" required id="inputPassword3" placeholder="Enter your password">
        <h5 id="worng-password" class="text-center d-none text-danger fs-6">Please provide a valid password.</h5>
        </div>
        <span id="passwordHelpInline" class="form-text">
            Must be 8 letter with at least a symble, upper and lower case letters and a number.
        </span>
        <div class= "text-center mt-4"><button onclick="loginBtn()" class= "btn btn-primary px-4">Login</button></div>
    </div>
    `;

    container.appendChild(div);
    discoverBtn.classList.add('d-none');
}



const loginBtn = () => {
    const emailField = document.getElementById('inputEmail3');
    const email = emailField.value;

    const worngError = document.getElementById('worng-email');
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
    


    const worngPassError = document.getElementById('worng-password');
    const passField = document.getElementById('inputPassword3');
    const password = passField.value;


    const passwordFilter = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    


    if(!passwordFilter.test(password)){
        // alert('please provide a valid password.')
        
        worngPassError.classList.remove('d-none');
    }
    else if(passwordFilter.test(password)){
        worngPassError.classList.add('d-none');
        const container = document.getElementById('login');
        container.textContent = '';
        const discoverBtn = document.getElementById('discover-btn');
        discoverBtn.classList.remove('d-none');
    }


    // passField.value = '';
    // emailField.value = '';


}





document.getElementById('button-addon2').addEventListener('click', () => {
    const emailField = document.getElementById('discover-email-input');
    const email = emailField.value;

    const worngError = document.getElementById('worng-email-top');
    const filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email)) {
        
        // alert('Please provide a valid email address');
        worngError.classList.remove('d-none');
        email.focus;
        return false;
    }
    else if(filter.test(email)){
        worngError.classList.add('d-none');
        alert(`Now you have full access to visit this site.`);
        emailField.value = '';
    }
});








// keyboard enter keyup work

const enterBtn = document.getElementById("button-addon2");
const txt = document.getElementById("discover-email-input");

txt.addEventListener("keypress", function(event) {
    // event.preventDefault();
    // console.log(event.key);
    if (event.key === 'Enter')
        enterBtn.click();
});