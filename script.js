document.getElementById('hamburger').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});

function verify() {
    const email = document.getElementById('email');
    var warning = document.getElementById('warning');
    if (email.value == "") {
        document.getElementById('warn').style.background = '#ffd3d3';
        email.placeholder = "Email is required!"; 
        return false;
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
        if (!emailRegex.test(email.value)) {  
            email.value = ""; 
            email.placeholder = "Invalid email address!"; 
            document.getElementById('warn').style.background = '#ffd3d3';
            return false;  
        }  

        const check=document.getElementById('terms');
        console.log(check.value);
        document.location.href = 'signup-next.html';
    }
}

function verifyauth(){
    const user = document.getElementById('user');
    const pass = document.getElementById('pass');
   
    if (user.value == "" || pass.value == "") {

        document.getElementById('user-i').style.background = '#ffd3d3';
        document.getElementById('user-p').style.background = '#ffd3d3';
        return false;
    }  
        document.location.href = 'index.html';

}