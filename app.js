console.log('Projet Open chargé !');
alert('Bienvenue sur mon site !');
// ========================================
// PROJET OPEN - JAVASCRIPT COMPLET
// ========================================

// 1. Message de bienvenue dans la console
console.log('🚀 Bienvenue sur mon projet Open !');
console.log('Site web créé avec ❤️ et Git');

// 2. Message de bienvenue dynamique
window.addEventListener('DOMContentLoaded', function() {
    // Créer un élément de bienvenue
    const titre = document.querySelector('h1');
    if (titre) {
        setTimeout(function() {
            console.log('🎉 Titre trouvé : ' + titre.textContent);
        }, 500);
    }
    
    // Afficher l'heure actuelle
    const date = new Date();
    console.log('📅 Date actuelle : ' + date.toLocaleDateString('fr-FR'));
    console.log('⏰ Heure : ' + date.toLocaleTimeString('fr-FR'));
});

// 3. Animation au chargement
alert('✨ Bienvenue sur mon site web ! ✨');

// 4. Créer un compteur de clics
let compteurClics = 0;

// Ajouter un bouton si vous en avez un
const btn = document.querySelector('#btn');
if (btn) {
    btn.addEventListener('click', function() {
        compteurClics++;
        console.log(`🖱️ Bouton cliqué ${compteurClics} fois`);
        alert(`Vous avez cliqué ${compteurClics} fois !`);
        
        // Changer la couleur du bouton
        if (compteurClics % 5 === 0) {
            this.style.backgroundColor = 'red';
            alert('🎯 5 clics ! Changement de couleur !');
        }
    });
} else {
    console.log('⚠️ Aucun bouton trouvé sur la page');
}

// 5. Afficher une citation aléatoire
const citations = [
    '💻 "Le code, c\'est comme écrire de la poésie."',
    '🐛 "Un bug par jour éloigne le développeur pour toujours."',
    '🚀 "Git rend la vie plus belle !"',
    '🎯 "La pratique rend parfait."',
    '🌟 "Chaque grand projet commence par git init"'
];

function citationAleatoire() {
    const index = Math.floor(Math.random() * citations.length);
    console.log('💡 Citation du jour : ' + citations[index]);
}

citationAleatoire();

// 6. Compter le nombre de paragraphes
const paragraphes = document.querySelectorAll('p');
console.log(`📝 Nombre de paragraphes : ${paragraphes.length}`);

// 7. Ajouter un effet de survol sur les paragraphes
paragraphes.forEach(function(para, index) {
    para.addEventListener('mouseenter', function() {
        console.log(`🖱️ Souris sur paragraphe ${index + 1}`);
        this.style.transform = 'scale(1.02)';
        this.style.transition = '0.3s';
    });
    
    para.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// 8. Afficher les informations de la page
console.log('📄 Informations de la page :');
console.log('- URL : ' + window.location.href);
console.log('- Largeur : ' + window.innerWidth + 'px');
console.log('- Hauteur : ' + window.innerHeight + 'px');

// 9. Horloge en temps réel (optionnel)
function afficherHeure() {
    const maintenant = new Date();
    const heure = maintenant.getHours();
    const minutes = maintenant.getMinutes();
    const secondes = maintenant.getSeconds();
    
    console.log(`⏱️ ${heure}h${minutes}m${secondes}s`);
}

// Afficher l'heure toutes les 30 secondes
setInterval(afficherHeure, 30000);

//