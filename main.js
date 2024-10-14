// Ajout du js pour la nav barre
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    const section = document.getElementById('content-section');
    
    menu.classList.toggle('hidden');
    section.classList.toggle('mt-40'); // Ajuste la marge en bas du menu
});


// Ajout de la fonction de défilement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Défilement en douceur
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

