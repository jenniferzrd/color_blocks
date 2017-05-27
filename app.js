var app = (function app() {
  "use strict";
  // alert("coucou");
  var dom, observer, creerBlocks, mettreBlocksActifsAjour, gererSelectionBlock, actives;

  dom = {};

  window.onload = function start() {
    dom.btn = byId("create_blocks");
    dom.color = byId("color_blocks");
    dom.count = byId("nb_blocks");
    dom.blocks = byId("blocks");
    observer();
  };


  gererSelectionBlock = function gererSelectionBlock() {
    this.classList.toggle("is-active");
    };

mettreBlocksActifsAjour = function mettreBlocksActifsAjour(actives) {
  var i;
  for (i = 0; i < actives.length; i += 1) {
    actives[i].style.background = dom.color.value;
  }
};

  creerBlocks = function creerBlocks() {
    // log("creer blocks!");
    var limit, i, div;
    // log(Number(dom.count.value));
    limit = Number(dom.count.value);
    for (i = 0; limit >= 1 && i < limit; i += 1) {
      div = document.createElement("div");
      div.classList.add("block");
      dom.blocks.appendChild(div);
      div.style.background = dom.color.value;
      // appliquer la couleur aux blocs
      div.onclick = gererSelectionBlock;
    }

    };

    observer = function observer() {
      // dom.btn.onclick = creerBlocks;
      dom.btn.onclick = function choisir() {
      // les blocks cliqués ont la classe active
      var actives = dom.blocks.querySelectorAll(".block.is-active");
      // on utilise cette info pour choisir l'action suivante
      if (!actives.length){
        creerBlocks();
        // si la longueur du blocks actifs est strictement égal a 0
      } else {
        mettreBlocksActifsAjour(actives);
      }
};
    };

  }());

  // créer un sous programme permettant la sélection/déselection au clicks des blocks,
  // la bordure du block change de couleur (actif/inactif)
  // au changement de l'input de couleur, les blocks selectionnés sont affectés
