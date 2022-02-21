# Mastermind

## Projet de la séance de travaux pratiques n°2

Le TP consiste à recréer un jeu de mastermind en utilisant le framework Angular.

Une combinaison de 4 couleurs parmi 7 disponibles est générée en début de partie par l'ordinateur.
Le joueur possède alors 10 tentatives pour essayer de trouver cette combinaison (les bonnes couleurs, et dans le bon ordre).

L'ordinateur fournira à chaque tentative des indices :

* Fond vert si une couleur est à la bonne place
* Fond rouge si une couleur n'est pas utilisée dans la combinaison à trouver, ou si elle était déjà trouvée (fond vert) ailleurs
* Fond jaune si une couleur est utilisée dans la combinaison à trouver, mais pas à la bonne place

Au bout de ces 10 tentatives, si le joueur a trouvé la bonne combinaison, il gagne, sinon il perd.