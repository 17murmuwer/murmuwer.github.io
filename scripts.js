document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }


    showSlide(currentSlide);

    // это потом бля хуйня не работает
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', nextSlide);
    document.body.appendChild(nextButton);
});
// анимка при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const profileInfo = document.querySelector('.profile-info');
    const projects = document.querySelectorAll('.project');
    const header = document.querySelector('header');
    
    profileInfo.style.opacity = 0;
    profileInfo.style.transform = 'translateY(-20px)';
    header.style.opacity = 0;
    header.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        profileInfo.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        profileInfo.style.opacity = 1;
        profileInfo.style.transform = 'translateY(0)';
        header.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        header.style.opacity = 1;
        header.style.transform = 'translateY(0)';
    }, 300);
    
    projects.forEach((project, index) => {
        project.style.opacity = 0;
        project.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            project.style.transition = `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`;
            project.style.opacity = 1;
            project.style.transform = 'translateY(0)';
        }, 500);
    });
});

// прокрут стр
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        const link = project.querySelector('a');

    });
});
