// Chemin relatif vers le fichier JSON
const jsonFilePath = './weapon_category.json';

// Déclaration de la variable pour stocker les données
let weaponData = {};

// Utilisation de fetch pour charger le fichier JSON
fetch(jsonFilePath)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Stocker les données dans la variable
        weaponData = data;

        // Vérifier les données importées
        console.log('Données importées :', weaponData);

        // Vérification de la structure des données
        if (weaponData && typeof weaponData === 'object' && !Array.isArray(weaponData)) {
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

// Changer le fill des armes en fonction du pourcentage
function change_fill(percent_weapon, weapon_type) {
    let class_test = document.getElementById(`${weapon_type}`);
    if (class_test) {
        class_test.style.clipPath = `rect(${percent_weapon}px 100px 100px 0px)`;
    } else {
        console.error(`Element with id ${weapon_type} not found.`);
    }
}

change_fill(0, "daggers");


//const weapons_json = JSON.parse(weaponData);
console.log(weaponData);

function test_json() {

};

test_json();