// Chemin relatif vers le fichier JSON
const jsonFilePath = './weapon_category.json';

// Utilisation de fetch pour charger le fichier JSON
fetch(jsonFilePath)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Vérifier les données importées
        console.log('Données importées :', data);

        // Vérification de la structure des données
        if (Array.isArray(data)) {
            console.log('La structure des données est correcte.');
            // Afficher un message de succès dans le DOM
            const successMessage = document.createElement('p');
            successMessage.textContent = 'Importation réussie!';
            successMessage.style.color = 'green';
            document.body.appendChild(successMessage);
        } else {
            throw new Error('La structure des données est incorrecte.');
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        // Afficher un message d'erreur dans le DOM
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `Erreur lors de l'importation : ${error.message}`;
        errorMessage.style.color = 'red';
        document.body.appendChild(errorMessage);
    });

//Changer le fill des armes en fonction du pourcentage
function change_fill(percent_weapon, weapon_type) {
    let class_test = document.getElementById(`${weapon_type}`);
    class_test.style.clipPath = `rect(${percent_weapon}px 100px 100px 0px)`;
}

change_fill(0,"daggers");