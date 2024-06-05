
//Changer le fill des armes en fonction du pourcentage
function change_fill(percent_weapon, weapon_type) {
    let class_test = document.getElementById(`${weapon_type}`);
    class_test.style.clipPath = `rect(${percent_weapon}px 100px 100px 0px)`;
}

change_fill(0,"daggers");