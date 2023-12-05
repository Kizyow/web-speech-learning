import {currentLang} from "./SpeechRecognition.js";

export const getImage = (categorie, name, title) => {
    const img = new Image();
    img.src = `../images/${categorie}/${name}.png`;
    img.alt = `${title}`;
    img.width = 150;
    img.height = 150;
    return img;
}

export const getImagesVoitures = () => {
    if (currentLang === "en-US" || currentLang === "en-GB") {
        return [
            getImage("voitures", "renault", "renault"),
            getImage("voitures", "peugeot", "peugeot"),
            getImage("voitures", "citroen", "citroen"),
            getImage("voitures", "audi", "audi"),
            getImage("voitures", "volvo", "volvo"),
            getImage("voitures", "dacia", "dacia"),
            getImage("voitures", "bmw", "bmw"),
            getImage("voitures", "volkswagen", "volkswagen"),
        ]
    } else {
        return [
            getImage("voitures", "renault", "renault"),
            getImage("voitures", "peugeot", "peugeot"),
            getImage("voitures", "citroen", "citroen"),
            getImage("voitures", "audi", "audi"),
            getImage("voitures", "volvo", "volvo"),
            getImage("voitures", "dacia", "dacia"),
            getImage("voitures", "bmw", "bmw"),
            getImage("voitures", "volkswagen", "volkswagen"),
        ]
    }
}

export const getImagesAnimaux = () => {
    if (currentLang === "en-US" || currentLang === "en-GB") {
        return [
            getImage("animaux", "chat", "cat"),
            getImage("animaux", "chien", "dog"),
            getImage("animaux", "crocodile", "crocodile"),
            getImage("animaux", "elephant", "elephant"),
            getImage("animaux", "girafe", "giraffe"),
            getImage("animaux", "hibou", "owl"),
            getImage("animaux", "koala", "koala"),
            getImage("animaux", "panda", "panda"),
        ]
    } else {
        return [
            getImage("animaux", "chat", "chat"),
            getImage("animaux", "chien", "chien"),
            getImage("animaux", "crocodile", "crocodile"),
            getImage("animaux", "elephant", "elephant"),
            getImage("animaux", "girafe", "girafe"),
            getImage("animaux", "hibou", "hibou"),
            getImage("animaux", "koala", "koala"),
            getImage("animaux", "panda", "panda"),
        ]
    }

}