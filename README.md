Voici un modèle de `README.md` pour ton projet **My Containered App**, mettant en avant l'utilisation de scripts Bash pour gérer la construction et l'exécution d'une application conteneurisée dans Docker.

```markdown
# My Containered App

## Application conteneurisée avec Docker

### Description

**My Containered App** est un projet conteneurisé utilisant Docker qui permet de construire et de lancer le projet [**Hyrule Castle**](https://github.com/jonasisteu/TheHyruleCastle). Le projet inclut deux scripts Bash pour faciliter la construction de l'image Docker et l'exécution de l'application.

### En quoi consiste le jeu ?

- :game_die: Le joueur commence avec un personnage généré aléatoirement, chaque personnage ayant des statistiques uniques.
- :shield: Le jeu se déroule en tour par tour. Le joueur peut frapper, se mettre en garde ou se soigner à chaque tour.
- :crossed_swords: Des ennemis générés aléatoirement apparaissent à chaque étage. Tous les 10 étages, un boss puissant attend le joueur.
- :star: Le joueur peut choisir entre la version de base du jeu et une version moddée avec des fonctionnalités supplémentaires et du *lore* enrichi.

### Fonctionnalités

- **Version moddée du jeu** : Ajoute des éléments de *lore* et des mécaniques supplémentaires pour enrichir l'expérience de jeu.
- **Personnages divers** : Chaque personnage a des statistiques uniques (attaque, défense, vie, etc.), garantissant des parties variées.
- **Système de niveau** : Gagnez en expérience et améliorez vos statistiques après chaque victoire.
- **Actions en combat** : Frapper, se mettre en garde, se soigner et possibilité de s'échapper (mécanique non fonctionnelle).
- **Génération aléatoire** : Personnages, ennemis et boss sont générés aléatoirement pour chaque partie.
- **Choix de la difficulté et des combats** : Définissez la difficulté et le nombre d'étages à parcourir.

## Installation

### Pré-requis

Assurez-vous que **Docker engine** est installé sur votre machine. Si ce n'est pas le cas, installez-le via [le site officiel de Docker](https://www.docker.com/products/docker-engine).

### Installation et construction de l'image Docker

1. Téléchargez le projet en cliquant sur le bouton **Code** puis en sélectionnant **Download ZIP**.
2. Accédez au dossier du projet :

  ```
  cd MyContaineredApp
  ```

3. Exécutez le script `hyruleInstall.sh` pour construire l'image Docker :

  ```
  sudo ./hyruleInstall.sh
  ```
  Ce script utilise le **Dockerfile** inclus pour construire une image basée sur une image **Node**.

### Exécution du jeu

1. Pour lancer l'application, utilisez le script `hyruleRun.sh` avec la commande suivante :

  ```
  sudo ./hyruleRun.sh --<base ou modded>
  ```
  - Remplacez `<base ou modded>` par `base` pour jouer à la version de base ou `modded` pour jouer à la version enrichie du jeu.

2. Une fois la commande exécutée, le conteneur Docker sera démarré et le jeu se lancera dans le terminal.

#### Exemple de commande pour lancer le jeu en mode moddé :

```
sudo ./hyruleRun.sh --modded
```
