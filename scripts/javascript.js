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

document.getElementById("hover_jeudisoir_gif").addEventListener("mouseover", function() {
    hoverPortfolioGif("hover_jeudisoir_gif", "../images/portfolio/jeudisoir.gif");
});

document.getElementById("hover_jeudisoir_gif").addEventListener("mouseout", function() {
    hoverPortfolioGif("hover_jeudisoir_gif", "../images/portfolio/jeudisoir.jpg");
});

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

document.getElementById("hover_femmegeante_gif").addEventListener("mouseover", function() {
    hoverPortfolioGif("hover_femmegeante_gif", "../images/portfolio/femmegeante.gif");
});

document.getElementById("hover_femmegeante_gif").addEventListener("mouseout", function() {
    hoverPortfolioGif("hover_femmegeante_gif", "../images/portfolio/femmegeante.jpg");
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

document.getElementById("hover_biennaleducirque_gif").addEventListener("mouseover", function() {
    hoverPortfolioGif("hover_biennaleducirque_gif", "../images/portfolio/biennaleducirque.gif");
});

document.getElementById("hover_biennaleducirque_gif").addEventListener("mouseout", function() {
    hoverPortfolioGif("hover_biennaleducirque_gif", "../images/portfolio/biennaleducirque.jpg");
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

document.getElementById("hover_micromondes_gif").addEventListener("mouseover", function() {
    hoverPortfolioGif("hover_micromondes_gif", "../images/portfolio/micromondes.gif");
});

document.getElementById("hover_micromondes_gif").addEventListener("mouseout", function() {
    hoverPortfolioGif("hover_micromondes_gif", "../images/portfolio/micromondes.jpg");
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

document.getElementById("hover_tissou_gif").addEventListener("mouseover", function() {
    hoverPortfolioGif("hover_tissou_gif", "../images/portfolio/tissou.gif");
});

document.getElementById("hover_tissou_gif").addEventListener("mouseout", function() {
    hoverPortfolioGif("hover_tissou_gif", "../images/portfolio/tissou.jpg");
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

document.getElementById("hover_lane_gif").addEventListener("mouseover", function() {
    hoverPortfolioGif("hover_lane_gif", "../images/portfolio/lane.gif");
});

document.getElementById("hover_lane_gif").addEventListener("mouseout", function() {
    hoverPortfolioGif("hover_lane_gif", "../images/portfolio/lane.jpg");
});