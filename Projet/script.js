//Table json
let weaponData = {
    daggers: { "name": "daggers","elden_ring": 16, "dark_souls_iii": 13, "sekiro": 0, "remant_ii": 2, "bloodborne": 0, "nioh": 0, "total": 31 },
    straight_swords: { "name": "straight_swords","elden_ring": 19, "dark_souls_iii": 17, "sekiro": 0, "remant_ii": 6, "bloodborne": 4, "nioh": 0, "total": 46 },
    greatswords: { "name": "greatswords","elden_ring": 21, "dark_souls_iii": 16, "sekiro": 0, "remant_ii": 2, "bloodborne": 3, "nioh": 19, "total": 61 },
    colossal_swords: { "name": "colossal_swords","elden_ring": 11, "dark_souls_iii": 11, "sekiro": 0, "remant_ii": 3, "bloodborne": 0, "nioh": 0, "total": 25 },
    thrusting_swords: { "name": "thrusting_swords","elden_ring": 7, "dark_souls_iii": 6, "sekiro": 0, "remant_ii": 0, "bloodborne": 0, "nioh": 0, "total": 13 },
    heavy_thrusting_swords: { "name": "heavy_thrusting_swords","elden_ring": 4, "dark_souls_iii": 0, "sekiro": 0, "remant_ii": 0, "bloodborne": 0, "nioh": 0, "total": 4 },
    curved_swords: { "name": "curved_swords","elden_ring": 15, "dark_souls_iii": 15, "sekiro": 0, "remant_ii": 0, "bloodborne": 0, "nioh": 0, "total": 30 },
    curved_greatswords: { "name": "curved_greatswords","elden_ring": 9, "dark_souls_iii": 5, "sekiro": 0, "remant_ii": 0, "bloodborne": 0, "nioh": 0, "total": 14 },
    katanas: { "name": "katanas","elden_ring": 8, "dark_souls_iii": 8, "sekiro": 2, "remant_ii": 3, "bloodborne": 1, "nioh": 70, "total": 92 },
    twinblades: { "name": "twinblades","elden_ring": 6, "dark_souls_iii": 0, "sekiro": 0, "remant_ii": 0, "bloodborne": 0, "nioh": 0, "total": 6 },
    axe: { "name": "axe","elden_ring": 13, "dark_souls_iii": 10, "sekiro": 0, "remant_ii": 2, "bloodborne": 1, "nioh": 29, "total": 55 },
    greataxes: { "name": "greataxes","elden_ring": 11, "dark_souls_iii": 7, "sekiro": 0, "remant_ii": 0, "bloodborne": 1, "nioh": 0, "total": 19 },
    hammers: { "name": "hammers","elden_ring": 15, "dark_souls_iii": 7, "sekiro": 0, "remant_ii": 3, "bloodborne": 1, "nioh": 0, "total": 26 },
    flails: { "name": "flails","elden_ring": 5, "dark_souls_iii": 1, "sekiro": 0, "remant_ii": 2, "bloodborne": 0, "nioh": 0, "total": 8 },
    great_hammers: { "name": "great_hammers","elden_ring": 14, "dark_souls_iii": 14, "sekiro": 0, "remant_ii": 3, "bloodborne": 1, "nioh": 0, "total": 32 },
    colossal_weapons: { "name": "colossal_weapons","elden_ring": 15, "dark_souls_iii": 0, "sekiro": 0, "remant_ii": 0, "bloodborne": 1, "nioh": 0, "total": 16 },
    spears: { "name": "spears","elden_ring": 16, "dark_souls_iii": 21, "sekiro": 0, "remant_ii": 3, "bloodborne": 1, "nioh": 33, "total": 74 },
    great_spears: { "name": "great_spears","elden_ring": 6, "dark_souls_iii": 0, "sekiro": 0, "remant_ii": 0, "bloodborne": 0, "nioh": 0, "total": 6 },
    halberds: { "name": "halberds","elden_ring": 16, "dark_souls_iii": 11, "sekiro": 0, "remant_ii": 0, "bloodborne": 0, "nioh": 0, "total": 27 },
    reapers: { "name": "reapers","elden_ring": 4, "dark_souls_iii": 4, "sekiro": 0, "remant_ii": 2, "bloodborne": 0, "nioh": 0, "total": 10 },
    whips: { "name": "whips","elden_ring": 6, "dark_souls_iii": 5, "sekiro": 0, "remant_ii": 0, "bloodborne": 0, "nioh": 0, "total": 11 },
    kusarigama: { "name": "kusarigama","elden_ring": 0, "dark_souls_iii": 0, "sekiro": 0, "remant_ii": 0, "bloodborne": 0, "nioh": 28, "total": 28 },
    fists: { "name": "fists","elden_ring": 9, "dark_souls_iii": 3, "sekiro": 0, "remant_ii": 1, "bloodborne": 0, "nioh": 15, "total": 28 },
    claws: { "name": "claws","elden_ring": 4, "dark_souls_iii": 3, "sekiro": 0, "remant_ii": 5, "bloodborne": 1, "nioh": 0, "total": 13 },
    light_bows: { "name": "light_bows","elden_ring": 5, "dark_souls_iii": 0, "sekiro": 0, "remant_ii": 0, "bloodborne": 0, "nioh": 0, "total": 5 },
    bows: { "name": "bows","elden_ring": 7, "dark_souls_iii": 7, "sekiro": 0, "remant_ii": 1, "bloodborne": 0, "nioh": 7, "total": 22 },
    greatbows: { "name": "greatbows","elden_ring": 4, "dark_souls_iii": 3, "sekiro": 0, "remant_ii": 2, "bloodborne": 0, "nioh": 0, "total": 9 },
    crossbows: { "name": "crossbows","elden_ring": 7, "dark_souls_iii": 7, "sekiro": 0, "remant_ii": 2, "bloodborne": 0, "nioh": 0, "total": 16 },
    ballistas: { "name": "ballistas","elden_ring": 2, "dark_souls_iii": 0, "sekiro": 0, "remant_ii": 0, "bloodborne": 0, "nioh": 7, "total": 9 },
    glintstone_staffs: { "name": "glintstone_staffs","elden_ring": 18, "dark_souls_iii": 12, "sekiro": 0, "remant_ii": 4, "bloodborne": 0, "nioh": 0, "total": 34 },
    sacred_seals: { "name": "sacred_seals","elden_ring": 9, "dark_souls_iii": 0, "sekiro": 0, "remant_ii": 0, "bloodborne": 0, "nioh": 0, "total": 9 },
    tools: { "name": "tools","elden_ring": 11, "dark_souls_iii": 16, "sekiro": 10, "remant_ii": 0, "bloodborne": 3, "nioh": 0, "total": 40 },
    hand_guns: { "name": "hand_guns","elden_ring": 0, "dark_souls_iii": 0, "sekiro": 0, "remant_ii": 21, "bloodborne": 0, "nioh": 0, "total": 21 },
    long_guns: { "name": "long_guns","elden_ring": 0, "dark_souls_iii": 0, "sekiro": 0, "remant_ii": 27, "bloodborne": 0, "nioh": 8, "total": 35 },
    trick_weapons: { "name": "trick_weapons","elden_ring": 0, "dark_souls_iii": 0, "sekiro": 0, "remant_ii": 0, "bloodborne": 8, "nioh": 0, "total": 8 },
    toutes_armes: { "name": "total","elden_ring": 313, "dark_souls_iii": 222, "sekiro": 12, "remant_ii": 94, "bloodborne": 26, "nioh": 216, "total": 883 },
    rien: { "name": "rien","elden_ring": 0, "dark_souls_iii": 0, "sekiro": 0, "remant_ii": 0, "bloodborne": 0, "nioh": 0, "total": 0 }
};

//Dictionnaire des jeux
let dict_games = {
    elden_ring: false,
    dark_souls_iii: false,
    sekiro: false,
    remnant_ii: false,
    bloodborne: false,
    nioh: false,
};

function change_game_status(div) {
    if (div.checked == true) {
        dict_games[div.value] = true;
    } else {
        dict_games[div.value] = false;
    }
    gothrough_weapons();
};

//Changer en pourcent
function change_to_pourcent(chosen_weapon,weapon_name) {
    let weapon_percentage = (Number(chosen_weapon)/Number(weaponData[weapon_name]["total"])*100);
    console.log(Math.round(weapon_percentage));
    return Math.round(weapon_percentage);
};

//Changer le fill des armes en fonction du pourcentage
function change_fill(percent_weapon, weapon_type) {
    let class_test = document.getElementById(`${weapon_type}`);
    class_test.style.clipPath = `rect(${100-percent_weapon}px 100px 100px 0px)`;
};

/* let games_chosen = "";
function change_game() {
    var my_check_box = document.getElementById("elden_ring_checkbox");
    if (my_check_box.checked == true){
        games_chosen = my_check_box.value;
        //Boucle passage dans les objets
        for (let x in weaponData) {
            //console.log(weaponData[x]["total"]);
            change_fill(change_to_pourcent(weaponData[x][games_chosen],x),x);
        };
    } else {
        games_chosen = "rien";
        for (let x in weaponData) {
            //console.log(weaponData[x]["total"]);
            change_fill(change_to_pourcent(weaponData[x][games_chosen],x),x);
        };
    }
}; */

//Boucle passage dans les objets: name
function gothrough_weapons(){
    for (let x in weaponData) {
        var total_weapon_number = 0;
        if (dict_games["elden_ring"] == true){
            total_weapon_number += weaponData[x]["elden_ring"];
        };
        if (dict_games["dark_souls_iii"] == true){
            total_weapon_number += weaponData[x]["dark_souls_iii"];
        };
        if (dict_games["sekiro"] == true){
            total_weapon_number += weaponData[x]["sekiro"];
        };
        if (dict_games["remnant_ii"] == true){
            total_weapon_number += weaponData[x]["remant_ii"];
        };
        if (dict_games["bloodborne"] == true){
            total_weapon_number += weaponData[x]["bloodborne"];
        };
        if (dict_games["nioh"] == true){
            total_weapon_number += weaponData[x]["nioh"];
        };
        change_fill(change_to_pourcent(total_weapon_number,x),x);
        document.getElementById(`${x}_descr`).innerHTML = `${change_to_pourcent(total_weapon_number,x)}%`;
    };
};

//Catégorisation des armes selon leur(s) jeu(x)
const checkboxData = {
    daggers_checkbox: {
        visibleClasses: ['weapon_identifier_DS', 'weapon_identifier_ER', 'weapon_identifier_R'],
        shadowId: 'shadow_daggers'
    },
    straight_swords_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS', 'weapon_identifier_R', 'weapon_identifier_B'],
        shadowId: 'shadow_straight_swords'
    },
    greatswords_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS', 'weapon_identifier_R', 'weapon_identifier_B', 'weapon_identifier_N'],
        shadowId: 'shadow_greatswords'
    },
    colossal_swords_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS', 'weapon_identifier_R'],
        shadowId: 'shadow_colossal_swords'
    },
    thrusting_swords_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS'],
        shadowId: 'shadow_thrusting_swords'
    },
    heavy_thrusting_swords_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS'],
        shadowId: 'shadow_heavy_thrusting_swords'
    },
    curved_swords_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS'],
        shadowId: 'shadow_curved_swords'
    },
    curved_greatswords_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS'],
        shadowId: 'shadow_curved_greatswords'
    },
    katanas_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS', 'weapon_identifier_S', 'weapon_identifier_R', 'weapon_identifier_B', 'weapon_identifier_N'],
        shadowId: 'shadow_katanas'
    },
    twinblades_checkbox: {
        visibleClasses: ['weapon_identifier_ER'],
        shadowId: 'shadow_twinblades'
    },
    axe_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS', 'weapon_identifier_R', 'weapon_identifier_B', 'weapon_identifier_N'],
        shadowId: 'shadow_axes'
    },
    greataxes_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS', 'weapon_identifier_B'],
        shadowId: 'shadow_greataxes'
    },
    hammers_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS', 'weapon_identifier_R', 'weapon_identifier_B'],
        shadowId: 'shadow_hammers'
    },
    flails_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS', 'weapon_identifier_R'],
        shadowId: 'shadow_flails'
    },
    great_hammers_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS', 'weapon_identifier_R', 'weapon_identifier_B'],
        shadowId: 'shadow_great_hammers'
    },
    colossal_weapons_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_B'],
        shadowId: 'shadow_colossal_weapons'
    },
    spears_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS', 'weapon_identifier_R', 'weapon_identifier_B', 'weapon_identifier_N'],
        shadowId: 'shadow_spears'
    },
    great_spears_checkbox: {
        visibleClasses: ['weapon_identifier_ER'],
        shadowId: 'shadow_great_spears'
    },
    halberds_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS'],
        shadowId: 'shadow_halberds'
    },
    reapers_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS', 'weapon_identifier_R'],
        shadowId: 'shadow_reapers'
    },
    whips_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS'],
        shadowId: 'shadow_whips'
    },
    kusarigama_checkbox: {
        visibleClasses: ['weapon_identifier_N'],
        shadowId: 'shadow_kusarigama'
    },
    fists_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS', 'weapon_identifier_R', 'weapon_identifier_N'],
        shadowId: 'shadow_fists'
    },
    claws_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS', 'weapon_identifier_R', 'weapon_identifier_B'],
        shadowId: 'shadow_claws'
    },
    light_bows_checkbox: {
        visibleClasses: ['weapon_identifier_ER'],
        shadowId: 'shadow_light_bows'
    },
    bows_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS', 'weapon_identifier_R', 'weapon_identifier_N'],
        shadowId: 'shadow_bows'
    },
    greatbows_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS', 'weapon_identifier_R'],
        shadowId: 'shadow_greatbows'
    },
    crossbows_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS', 'weapon_identifier_R'],
        shadowId: 'shadow_crossbows'
    },
    ballistas_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_N'],
        shadowId: 'shadow_ballistas'
    },
    glintstone_staffs_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS', 'weapon_identifier_R'],
        shadowId: 'shadow_glintstone_staffs'
    },
    sacred_seals_checkbox: {
        visibleClasses: ['weapon_identifier_ER'],
        shadowId: 'shadow_sacred_seals'
    },
    tools_checkbox: {
        visibleClasses: ['weapon_identifier_ER', 'weapon_identifier_DS', 'weapon_identifier_S', 'weapon_identifier_B'],
        shadowId: 'shadow_tools'
    },
    hand_guns_checkbox: {
        visibleClasses: ['weapon_identifier_R'],
        shadowId: 'shadow_hand_guns'
    },
    long_guns_checkbox: {
        visibleClasses: ['weapon_identifier_R', 'weapon_identifier_N'],
        shadowId: 'shadow_long_guns'
    },
    trick_weapons_checkbox: {
        visibleClasses: ['weapon_identifier_B'],
        shadowId: 'shadow_trick_weapons'
    }
};

//Fonction pour montrer chaque jeu
function showTitle(checkbox) {
    // Désactiver toutes les autres checkboxes d'armes
    document.querySelectorAll('input.weapon-checkbox[type="checkbox"]').forEach(cb => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });

    // Supprimer les ombres de tous les éléments correspondants
    document.querySelectorAll('[id^=shadow_]').forEach(shadow => {
        shadow.style.boxShadow = 'none';
    });

    // Si la checkbox actuelle n'est pas cochée, arrêter ici
    if (!checkbox.checked) {
        document.querySelectorAll('.container_2 img').forEach(img => {
            img.style.visibility = 'visible';
        });
        return;
    }

    const data = checkboxData[checkbox.id];
    if (!data) return;

    // Afficher/Masquer les images selon la checkbox actuelle
    document.querySelectorAll('.container_2 img').forEach(img => {
        if (data.visibleClasses.some(cls => img.classList.contains(cls))) {
            img.style.visibility = 'visible';
        } else {
            img.style.visibility = 'hidden';
        }
    });

    // Ajouter une ombre à l'élément correspondant
    document.getElementById(data.shadowId).style.boxShadow = "0 0 10px #9ecaed";
}


function pos_div_descr() {
    let top_pos = 0;
    let left_pos = -45;
    compteur = 0;
    
    for (let w in weaponData) {
        let weapon = document.getElementById(`${w}_descr`);
        top_pos += 150;
        if (w != "toutes_armes" && w != "rien") {
            weapon.style.position = "absolute";
            weapon.style.top = `${top_pos}px`;
            weapon.style.left = `${left_pos}px`;
            weapon.style.fontSize = `14px`;
            weapon.style.color = `#B87333`;
            weapon.style.fontFamily = "Lucida Console", "Courier New";
            weapon.style.textAlignLast = "justify";
            weapon.style.textShadow = "0px 2px 4px orange";
            weapon.style.zIndex = 3;
            compteur++;
            console.log(compteur);
            if ((compteur-1) % 6 == 0) {
                top_pos = 105;
                left_pos += 150;
                weapon.style.position = "absolute";
                weapon.style.top = `${top_pos}px`;
                weapon.style.left = `${left_pos}px`;
            }
        };
    };
};

pos_div_descr();

// Données pour lwa couleurs spécifiques pour chaque jeu (bar et pie)
let gamesData = [
  { name: "elden_ring", value: weaponData.toutes_armes.elden_ring, color: "#eaa10b" },
  { name: "dark_souls_iii", value: weaponData.toutes_armes.dark_souls_iii, color: "#dbe02a" },
  { name: "sekiro", value: weaponData.toutes_armes.sekiro, color: "#78c756" },
  { name: "remant_ii", value: weaponData.toutes_armes.remant_ii, color: "#FF0000" },
  { name: "bloodborne", value: weaponData.toutes_armes.bloodborne, color: "#8A2BE2" },
  { name: "nioh", value: weaponData.toutes_armes.nioh, color: "#178eb3" }
];

//Bar plot
// Fonction pour obtenir la couleur du jeu
function getGameColor(gameName) {
  const game = gamesData.find(g => g.name === gameName.toLowerCase().replace(/ /g, '_'));
  return game ? game.color : "darkorange"; // Couleur par défaut si le jeu n'est pas trouvé
}

// Fonction pour afficher le graphique en barres
function createBarChart(selectedWeapon) {
  // Filtre des données pour les armes sélectionnées
  const weapon = weaponData[selectedWeapon];

  const data = Object.keys(weapon)
      .filter(key => key !== "name" && key !== "total")
      .map(key => ({
          game: capitalizeWords(key.replace(/_/g, ' ')),
          count: weapon[key]
      }));

  d3.select("#chart").selectAll("*").remove();

  // Déclaration des dimensions et des marges du graphique
  const margin = { top: 40, right: 40, bottom: 100, left: 40 };  // Augmenter la marge inférieure
  const width = 600 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  // Déclaration de l'échelle x (jeux)
  const x = d3.scaleBand()
      .domain(data.map(d => d.game))
      .range([margin.left, width + margin.left])
      .padding(0.1);

  // Déclaration de l'échelle y (nombre d'armes)
  const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.count)])
      .nice()
      .range([height, 0]);

  // Création de l'élément SVG
  const svg = d3.select("#chart").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

  // Ajout des barres
  svg.selectAll("rect")
      .data(data)
      .enter().append("rect")
      .attr("x", d => x(d.game))
      .attr("y", d => y(d.count))
      .attr("height", d => height - y(d.count))
      .attr("width", x.bandwidth())
      .attr("fill", d => getGameColor(d.game)); // Utilisation de la couleur spécifiée pour chaque jeu

  svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("font-size", "12px")
      .style("font-family", "Arial, sans-serif")
      .attr("text-anchor", "end")
      .attr("transform", function(d) {
          return "rotate(-45) translate(-10,5)";
      })
      .style("text-anchor", "end")
      .style("dominant-baseline", "middle");

  // Ajout de l'axe y (nombre d'armes)
  svg.append("g")
      .call(d3.axisLeft(y).ticks(10))
      .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "-3.5em")
      .attr("text-anchor", "end")
      .text("Nombre d'armes");

  // Ajout du titre
  svg.append("text")
      .attr("x", width / 2)
      .attr("y", -margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "18px")
      .style("text-decoration", "underline")
      .text(`Nombre d'armes par jeu pour ${weapon.name.replace(/_/g, ' ')}`);
}

// Sélection de l'arme par défaut
const defaultWeapon = "daggers";
createBarChart(defaultWeapon);

// Sélection de l'arme via un menu déroulant
const select = d3.select("#weapon-select")
  .on("change", function() {
      const selectedWeapon = this.value;
      createBarChart(selectedWeapon);
  });

select.selectAll("option")
  .data(Object.keys(weaponData)
      .filter(d => d !== "rien" && d !== "toutes_armes"))
  .enter().append("option")
  .text(d => capitalizeWords(weaponData[d].name.replace(/_/g, ' ')))
  .attr("value", d => d);

// Fonction pour capitaliser la première lettre de chaque mot et les chiffres romains
function capitalizeWords(str) {
  return str.replace(/\b([ivx]+)\b/gi, function(match) {
      return match.toUpperCase();
  }).replace(/\b\w/g, function(txt) {
      return txt.toUpperCase();
  });
}


//Pie chart
// Définir les dimensions et le rayon de la pie chart
let width = 600;
let height = 450;
let radius = Math.min(width, height - 50) / 2

// Sélectionner l'élément SVG et configurer l'élément g pour le graphique
let svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

let chartGroup = svg.append('g')
  .attr('transform', 'translate(' + width / 2 + ',' + (height / 2 + 20) + ')');

// Créer un arc basé sur les valeurs
let arc = d3.arc()
  .innerRadius(0)
  .outerRadius(radius);

// Données pour la pie chart
let pie = d3.pie()
  .value(d => d.value);

// Créer des arcs pour chaque segment de la pie chart
let arcs = chartGroup.selectAll('arc')
  .data(pie(gamesData))
  .enter()
  .append('g')
  .attr('class', 'arc');

// Ajouter des chemins pour chaque arc
arcs.append('path')
  .attr('d', arc)
  .attr('fill', d => d.data.color) // Utilisation de la couleur spécifiée pour chaque jeu
  .attr('stroke', 'white')
  .style('stroke-width', '2px');

// Ajouter des légendes au-dessus du graphique
let legend = svg.append('g')
.attr('class', 'legend')
.attr('transform', `translate(${width / 2},${10})`);

legend.selectAll('text')
.data(gamesData)
.enter()
.append('text')
.attr('x', (d, i) => (i % 3) * 200 - 200) // Répartir les légendes sur deux lignes
.attr('y', (d, i) => Math.floor(i / 3) * 20) // Espacer verticalement les lignes
.text(d => d.name.replace(/_/g, ' ').toUpperCase())
.style('font-size', '14px')
.style('fill', d => d.color)
.style('text-anchor', 'middle');

// Fonction pour calculer l'angle médian d'un arc
function midAngle(d) {
  return d.startAngle + (d.endAngle - d.startAngle) / 2;
}

// Force graph
let nodes = [];
let links = [];

// Ajouter les armes comme nœuds
Object.keys(weaponData).forEach(weapon => {
  if (weapon !== 'rien' && weapon !== 'toutes_armes') {
    let formattedWeaponName = weapon.replace(/_/g, ' '); // Remplace les underscores par des espaces
    formattedWeaponName = formattedWeaponName.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); // Met la première lettre de chaque mot en majuscule
    nodes.push({ id: weapon, type: 'weapon', formattedName: formattedWeaponName });
  }
});

// Ajouter les jeux comme nœuds avec les noms formatés
const games = Object.keys(weaponData.daggers).filter(key => key !== 'name' && key !== 'total');
games.forEach(game => {
  let formattedGameName = game.replace(/_/g, ' '); // Remplace les underscores par des espaces
  formattedGameName = formattedGameName.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); // Met la première lettre de chaque mot en majuscule
  formattedGameName = formattedGameName.replace(/\bIi\b/g, 'II').replace(/\bIii\b/g, 'III'); // Met les chiffres romains en majuscules
  nodes.push({ id: game, originalId: game, type: 'game', formattedName: formattedGameName });
});

// Créer des liens entre jeux et armes si la valeur est non nulle
games.forEach(game => {
  Object.keys(weaponData).forEach(weapon => {
    if (weapon !== 'rien' && weapon !== 'toutes_armes' && weaponData[weapon][game] !== 0) {
      links.push({ source: game, target: weapon, value: weaponData[weapon][game] });
    }
  });
});

// Dictionnaire de couleurs pour les jeux
const colorMapping = {
  elden_ring: "#eaa10b",
  dark_souls_iii: "#dbe02a",
  sekiro: "#78c756",
  remant_ii: "#FF0000",
  bloodborne: "#8A2BE2",
  nioh: "#178eb3"
};

// Fonction pour créer le graphique
function createForceGraph({
  nodes,
  links
}, {
  nodeId = d => d.id,
  nodeGroup = d => d.type === 'weapon' ? 'weapon' : 'game',
  nodeTitle = d => d.formattedName, // Utiliser le nom formaté pour l'affichage
  nodeFill = d => d.type === 'weapon' ? '#173bb3' : colorMapping[d.originalId], // Utilisation de la couleur spécifiée pour chaque jeu
  nodeStroke = "#fff",
  nodeStrokeWidth = 1.5,
  nodeStrokeOpacity = 1,
  nodeRadius = 5,
  nodeStrength = -30,
  linkSource = ({ source }) => source,
  linkTarget = ({ target }) => target,
  linkStroke = "#999",
  linkStrokeOpacity = 0.6,
  linkStrokeWidth = d => Math.sqrt(d.value),
  linkStrokeLinecap = "round",
  width = 1000,
  height = 1000,
  invalidation
} = {}) {
  nodes = nodes.map(d => ({ id: nodeId(d), type: nodeGroup(d), ...d }));
  links = links.map(d => ({ source: linkSource(d), target: linkTarget(d), ...d }));

  const nodeGroups = Array.from(new Set(nodes.map(node => node.type))).sort();
  const color = d3.scaleOrdinal(nodeGroups, d3.schemeCategory10);
  const forceNode = d3.forceManyBody().strength(node => node.type === 'game' ? -100 : nodeStrength);
  const forceLink = d3.forceLink(links).id(d => d.id).distance(100).strength(1);

  const simulation = d3.forceSimulation(nodes)
    .force("link", forceLink)
    .force("charge", forceNode)
    .force("center", d3.forceCenter(width / 2, height / 2));

  const zoom = d3.zoom()
    .scaleExtent([0.1, 10])
    .on("zoom", zoomed);

  const svg = d3.create("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
    .call(zoom);

  const container = svg.append("g");

  const link = container.append("g")
    .attr("stroke", linkStroke)
    .attr("stroke-opacity", linkStrokeOpacity)
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke-width", linkStrokeWidth)
    .attr("stroke-linecap", linkStrokeLinecap);

  const node = container.append("g")
    .attr("stroke", nodeStroke)
    .attr("stroke-opacity", nodeStrokeOpacity)
    .attr("stroke-width", nodeStrokeWidth)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
    .attr("r", nodeRadius)
    .attr("fill", d => nodeFill(d))
    .call(drag(simulation));

  node.append("title").text(nodeTitle);

  const labels = container.append("g")
    .selectAll("text")
    .data(nodes)
    .join("text")
    .attr("text-anchor", "middle")
    .attr("dy", d => d.type === 'weapon' ? 12 : -6) // Ajuster la position en fonction du type de nœud
    .text(d => d.formattedName) // Utiliser le nom formaté pour l'affichage
    .attr("font-size", "10px")
    .attr("fill", "#fff") // Couleur du texte en blanc
    .attr("font-weight", "bold")
    .style("pointer-events", "none"); // Désactiver les événements de souris sur les étiquettes

  simulation.on("tick", () => {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

    labels
      .attr("x", d => d.x)
      .attr("y", d => d.type === 'weapon' ? d.y + 1 : d.y - 1); // Ajuster la position en fonction du type de nœud
  });

  if (invalidation != null) invalidation.then(() => simulation.stop());

  function zoomed(event) {
    container.attr("transform", event.transform);
  }

  function drag(simulation) {
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }

  return svg.node();
}

document.addEventListener("DOMContentLoaded", function () {
  const graphLink = document.getElementById("graph-link");

  graphLink.addEventListener("click", function (event) {
    event.preventDefault();
    openPopup();
  });
});

let popup;

// Fonction pour faire pop-up le graphe
function openPopup() {
  popup = window.open("", "Graph Popup", "width=1000,height=1000");

  if (popup.document.body.innerHTML === "") {
    const graphContainer = popup.document.createElement("div");
    graphContainer.id = "graph-container";
    graphContainer.className = "graph-container";

    const graph = createForceGraph({
      nodes: nodes,
      links: links
    }, {
      width: 500,
      height: 500
    });
    
    graphContainer.appendChild(graph);
    popup.document.body.appendChild(graphContainer);
  }

  const popupStyle = popup.document.createElement("style");
  popupStyle.innerHTML = `
    .graph-container {
      margin: 0;
      padding: 0;
    }
  `;
  popup.document.head.appendChild(popupStyle);
}

function closePopup() {
  if (popup) {
    popup.close();
  }
}
