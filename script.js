document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('nav a');
    const pageSections = document.querySelectorAll('.page-section');

    function switchPage(event) {
        event.preventDefault();
        const targetPageId = this.dataset.page + '-page';
        
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');

        pageSections.forEach(section => section.classList.add('hidden'));
        
        const targetSection = document.getElementById(targetPageId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
    }

    navLinks.forEach(link => link.addEventListener('click', switchPage));


    
    const submitButton = document.getElementById('submit-btn');
    const feedbackDiv = document.getElementById('feedback');

    submitButton.addEventListener('click', function() {
        
        feedbackDiv.textContent = 'Неверно решено!';
        
        feedbackDiv.classList.add('feedback-incorrect');
        
    });


    const stars = document.querySelectorAll('.stars span');
    const ratingFeedback = document.getElementById('rating-feedback');
    let currentRating = 0; // Переменная для хранения текущей оценки

    function renderStars(rating) {
        stars.forEach(star => {
            if (star.dataset.value <= rating) {
                star.classList.add('star-selected');
            } else {
                star.classList.remove('star-selected');
            }
        });
    }

    stars.forEach(star => {
        
        star.addEventListener('mouseover', function() {
            
            stars.forEach(s => s.classList.remove('star-hover'));
            
            for (let i = 0; i < this.dataset.value; i++) {
                stars[i].classList.add('star-hover');
            }
        });

        
        star.addEventListener('mouseout', function() {
            
             stars.forEach(s => s.classList.remove('star-hover'));
        });

        
        star.addEventListener('click', function() {
            currentRating = this.dataset.value; 
            ratingFeedback.textContent = 'Спасибо за отзыв!'; 
            renderStars(currentRating);
        });
    });

});
