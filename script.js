
document.addEventListener('DOMContentLoaded', function() {

    
    const navLinks = document.querySelectorAll('nav a');

    
    const pageSections = document.querySelectorAll('.page-section');

    
    function switchPage(event) {
        
        event.preventDefault();

        
        const targetPageId = this.dataset.page + '-page'; 

        
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        
        this.classList.add('active');

        
        pageSections.forEach(section => {
            section.classList.add('hidden');
        });

        
        const targetSection = document.getElementById(targetPageId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
    }

    
    navLinks.forEach(link => {
        link.addEventListener('click', switchPage);
    });


});
