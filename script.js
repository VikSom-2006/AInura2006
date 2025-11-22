document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('nav a');
    const pageSections = document.querySelectorAll('.page-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPageId = this.dataset.page + '-page';
            
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            pageSections.forEach(section => {
                section.classList.add('hidden');
                section.classList.remove('active-page');
            });
            
            const targetSection = document.getElementById(targetPageId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
                setTimeout(() => targetSection.classList.add('active-page'), 10); 
            }
        });
    });

    const submitButton = document.getElementById('submit-btn');
    const userAnswerInput = document.getElementById('user-answer');
    const feedbackDiv = document.getElementById('feedback');

    const correctAnswers = [
        "pi/4+2*pi*n", "3*pi/4+2*pi*n",
        "п/4+2*п*n", "3*п/4+2*п*n",
        "π/4+2*π*n", "3*π/4+2*π*n"
    ];

    submitButton.addEventListener('click', function() {
        const userAnswer = userAnswerInput.value.trim().toLowerCase().replace(/\s/g, '');

        feedbackDiv.classList.remove('feedback-correct', 'feedback-incorrect');
        submitButton.classList.remove('btn-correct', 'btn-incorrect');
        
        if (correctAnswers.some(answer => userAnswer.includes(answer))) {
            feedbackDiv.textContent = 'Отлично! Верное решение.';
            feedbackDiv.classList.add('feedback-correct');
            submitButton.classList.add('btn-correct');
        } else {
            feedbackDiv.textContent = 'Попробуйте еще раз. Где-то ошибка.';
            feedbackDiv.classList.add('feedback-incorrect');
            submitButton.classList.add('btn-incorrect');
        }

        setTimeout(() => {
            submitButton.classList.remove('btn-correct', 'btn-incorrect');
        }, 2000);
    });

    const stars = document.querySelectorAll('.stars span');
    const ratingFeedback = document.getElementById('rating-feedback');
    let currentRating = 0; 

    function renderStars(rating) {
        stars.forEach(star => {
            star.classList.toggle('star-selected', star.dataset.value <= rating);
        });
    }

    stars.forEach(star => {
        star.addEventListener('mouseover', function() {
            renderStars(this.dataset.value);
        });

        star.addEventListener('mouseout', function() {
            renderStars(currentRating);
        });

        star.addEventListener('click', function() {
            currentRating = this.dataset.value;
            ratingFeedback.textContent = `Спасибо за вашу оценку в ${currentRating} звезд!`;
            renderStars(currentRating);
        });
    });
});
