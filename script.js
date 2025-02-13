document.getElementById('hamburger').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});

function verify() {
    const email = document.getElementById('email');
    var warning = document.getElementById('warning');
    var ischecked = document.getElementById('terms').checked;
    if (email.value == "") {
        document.getElementById('warn').style.background = '#ffd3d3';
        email.placeholder = "Email is required!"; 
        return false;
    } else {
        if (!ischecked) {
            document.getElementById('error').style.display='flex';
            return false;
        }
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
        if (!emailRegex.test(email.value)) {  
            email.value = ""; 
            email.placeholder = "Invalid email address!"; 
            document.getElementById('warn').style.background = '#ffd3d3';
            return false;  
        }  
        document.getElementById('error').style.display='none';
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

const testimonialWrapper = document.querySelector('.testimonial-wrapper');


const testimonials = Array.from(testimonialWrapper.children);
testimonials.forEach((card) => {
    const clone = card.cloneNode(true);
    testimonialWrapper.appendChild(clone);
});


let scrollPosition = 0;

function startInfiniteScroll() {
    const cardWidth = testimonials[0].offsetWidth + 20; // Card width + gap
    const totalWidth = cardWidth * testimonials.length;

    setInterval(() => {
        scrollPosition += cardWidth;

        if (scrollPosition >= totalWidth) {
   
            testimonialWrapper.scrollLeft = 0;
            scrollPosition = cardWidth;
        }

        testimonialWrapper.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }, 4000);
}

startInfiniteScroll();


