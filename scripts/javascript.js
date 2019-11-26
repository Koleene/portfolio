function transitionEntree() {
    document.getElementById("cache_transition").className = "transitionEntree";
}


function transitionSortie() {
    document.getElementById("cache_transition").className = "transitionSortie";
}

function boutonAccueil() {
    document.getElementById("header").style.display = "block";
    document.getElementById("section_portfolio").style.display = "none";
    document.getElementById("section_apropos").style.display = "none";
    document.getElementById("section_contact").style.display = "none";
    document.getElementById("section_jeudisoir").style.display = "none";
    document.getElementById("section_micromondes").style.display = "none";
    document.getElementById("section_lane").style.display = "none";
    document.getElementById("section_femmegeante").style.display = "none";
    document.getElementById("section_biennaleducirque").style.display = "none";
    document.getElementById("section_tissou").style.display = "none";
}

document.getElementById("bouton_menu_accueil").addEventListener("click", function() {
    transitionEntree();
    setTimeout(boutonAccueil, 400);
    setTimeout(transitionSortie, 600);
});

function boutonApropos() {
    document.getElementById("header").style.display = "none";
    document.getElementById("section_tissou").style.display = "none";
    document.getElementById("section_portfolio").style.display = "none";
    document.getElementById("section_lane").style.display = "none";
    document.getElementById("section_apropos").style.display = "block";
    document.getElementById("section_micromondes").style.display = "none";
    document.getElementById("section_femmegeante").style.display = "none";
    document.getElementById("section_contact").style.display = "none";
    document.getElementById("section_jeudisoir").style.display = "none";
    document.getElementById("section_biennaleducirque").style.display = "none";
}

document.getElementById("bouton_menu_apropos").addEventListener("click", function() {
    transitionEntree();
    setTimeout(boutonApropos, 400);
    setTimeout(transitionSortie, 600);
});

function boutonPortfolio() {
    document.getElementById("header").style.display = "none";
    document.getElementById("section_apropos").style.display = "none";
    document.getElementById("section_portfolio").style.display = "block";
    document.getElementById("section_tissou").style.display = "none";
    document.getElementById("section_contact").style.display = "none";
    document.getElementById("section_femmegeante").style.display = "none";
    document.getElementById("section_lane").style.display = "none";
    document.getElementById("section_micromondes").style.display = "none";
    document.getElementById("section_jeudisoir").style.display = "none";
    document.getElementById("section_biennaleducirque").style.display = "none";
}

document.getElementById("bouton_menu_portfolio").addEventListener("click", function() {
    transitionEntree();
    setTimeout(boutonPortfolio, 400);
    setTimeout(transitionSortie, 600);
});

function boutonContact() {
    document.getElementById("header").style.display = "none";
    document.getElementById("section_apropos").style.display = "none";
    document.getElementById("section_portfolio").style.display = "none";
    document.getElementById("section_contact").style.display = "block";
    document.getElementById("section_tissou").style.display = "none";
    document.getElementById("section_jeudisoir").style.display = "none";
    document.getElementById("section_lane").style.display = "none";
    document.getElementById("section_micromondes").style.display = "none";
    document.getElementById("section_biennaleducirque").style.display = "none";
    document.getElementById("section_femmegeante").style.display = "none";
}

document.getElementById("bouton_menu_contact").addEventListener("click", function() {
    transitionEntree();
    setTimeout(boutonContact, 400);
    setTimeout(transitionSortie, 600);
});

function boutonJeudiSoir() {
    document.getElementById("header").style.display = "none";
    document.getElementById("section_apropos").style.display = "none";
    document.getElementById("section_tissou").style.display = "none";
    document.getElementById("section_portfolio").style.display = "none";
    document.getElementById("section_contact").style.display = "none";
    document.getElementById("section_femmegeante").style.display = "none";
    document.getElementById("section_biennaleducirque").style.display = "none";
    document.getElementById("section_micromondes").style.display = "none";
    document.getElementById("section_lane").style.display = "none";
    document.getElementById("section_jeudisoir").style.display = "flex";
}

document.getElementById("hover_jeudisoir").addEventListener("click", function() {
    transitionEntree();
    setTimeout(boutonJeudiSoir, 400);
    setTimeout(transitionSortie, 600);
});

function hoverPortfolioGif(idimage, urlimage) {
    document.getElementById(idimage).src = urlimage;
}

function boutonFemmeGeante() {
    document.getElementById("header").style.display = "none";
    document.getElementById("section_apropos").style.display = "none";
    document.getElementById("section_portfolio").style.display = "none";
    document.getElementById("section_contact").style.display = "none";
    document.getElementById("section_femmegeante").style.display = "flex";
    document.getElementById("section_jeudisoir").style.display = "none";
    document.getElementById("section_micromondes").style.display = "none";
    document.getElementById("section_tissou").style.display = "none";
    document.getElementById("section_lane").style.display = "none";
    document.getElementById("section_biennaleducirque").style.display = "none";
}

document.getElementById("hover_femmegeante").addEventListener("click", function() {
    transitionEntree();
    setTimeout(boutonFemmeGeante, 400);
    setTimeout(transitionSortie, 600);
});

function boutonBiennale() {
    document.getElementById("header").style.display = "none";
    document.getElementById("section_apropos").style.display = "none";
    document.getElementById("section_portfolio").style.display = "none";
    document.getElementById("section_contact").style.display = "none";
    document.getElementById("section_femmegeante").style.display = "none";
    document.getElementById("section_jeudisoir").style.display = "none";
    document.getElementById("section_micromondes").style.display = "none";
    document.getElementById("section_tissou").style.display = "none";
    document.getElementById("section_lane").style.display = "none";
    document.getElementById("section_biennaleducirque").style.display = "flex";
}

document.getElementById("hover_biennaleducirque").addEventListener("click", function() {
    transitionEntree();
    setTimeout(boutonBiennale, 400);
    setTimeout(transitionSortie, 600);
});

function boutonMicroMondes() {
    document.getElementById("header").style.display = "none";
    document.getElementById("section_apropos").style.display = "none";
    document.getElementById("section_portfolio").style.display = "none";
    document.getElementById("section_contact").style.display = "none";
    document.getElementById("section_femmegeante").style.display = "none";
    document.getElementById("section_jeudisoir").style.display = "none";
    document.getElementById("section_biennaleducirque").style.display = "none";
    document.getElementById("section_tissou").style.display = "none";
    document.getElementById("section_lane").style.display = "none";
    document.getElementById("section_micromondes").style.display = "flex";
}

document.getElementById("hover_micromondes").addEventListener("click", function() {
    transitionEntree();
    setTimeout(boutonMicroMondes, 400);
    setTimeout(transitionSortie, 600);
});

function boutonTissou() {
    document.getElementById("header").style.display = "none";
    document.getElementById("section_apropos").style.display = "none";
    document.getElementById("section_portfolio").style.display = "none";
    document.getElementById("section_contact").style.display = "none";
    document.getElementById("section_femmegeante").style.display = "none";
    document.getElementById("section_jeudisoir").style.display = "none";
    document.getElementById("section_biennaleducirque").style.display = "none";
    document.getElementById("section_micromondes").style.display = "none";
    document.getElementById("section_lane").style.display = "none";
    document.getElementById("section_tissou").style.display = "flex";
}

document.getElementById("hover_tissou").addEventListener("click", function() {
    transitionEntree();
    setTimeout(boutonTissou, 400);
    setTimeout(transitionSortie, 600);
});

function boutonLane() {
    document.getElementById("header").style.display = "none";
    document.getElementById("section_apropos").style.display = "none";
    document.getElementById("section_portfolio").style.display = "none";
    document.getElementById("section_contact").style.display = "none";
    document.getElementById("section_femmegeante").style.display = "none";
    document.getElementById("section_jeudisoir").style.display = "none";
    document.getElementById("section_biennaleducirque").style.display = "none";
    document.getElementById("section_micromondes").style.display = "none";
    document.getElementById("section_tissou").style.display = "none";
    document.getElementById("section_lane").style.display = "flex";
}

document.getElementById("hover_lane").addEventListener("click", function() {
    transitionEntree();
    setTimeout(boutonLane, 400);
    setTimeout(transitionSortie, 600);
});