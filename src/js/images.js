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
    } else if (currentLang === "es-ES") {
        return [
            getImage("animaux", "chat", "gato"),
            getImage("animaux", "chien", "perro"),
            getImage("animaux", "crocodile", "cocodrilo"),
            getImage("animaux", "elephant", "elefante"),
            getImage("animaux", "girafe", "jirafa"),
            getImage("animaux", "hibou", "buho"),
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

export const getImagesComposants = () => {
    if (currentLang === "en-US" || currentLang === "en-GB") {
        return [
            getImage("composants", "cpu", "central processing unit"),
            getImage("composants", "gpu", "graphics card"),
            getImage("composants", "case", "case"),
            getImage("composants", "hdd", "hard disk"),
            getImage("composants", "mobo", "motherboard"),
            getImage("composants", "psu", "power supply"),
            getImage("composants", "ram", "RAM"),
            getImage("composants", "ssd", "ssd"),
        ]
    } else if (currentLang === "es-ES") {
        return [
            getImage("composants", "cpu", "procesador"),
            getImage("composants", "gpu", "tarjeta grafica"),
            getImage("composants", "case", "caja"),
            getImage("composants", "hdd", "disco duro"),
            getImage("composants", "mobo", "placa base"),
            getImage("composants", "psu", "fuente de alimentacion"),
            getImage("composants", "ram", "RAM"),
            getImage("composants", "ssd", "ssd"),
        ]
    } else {
        return [
            getImage("composants", "cpu", "processeur"),
            getImage("composants", "gpu", "carte graphique"),
            getImage("composants", "case", "boitier"),
            getImage("composants", "hdd", "disque dur"),
            getImage("composants", "mobo", "carte mere"),
            getImage("composants", "psu", "alimentation"),
            getImage("composants", "ram", "RAM"),
            getImage("composants", "ssd", "ssd"),
        ]
    }

}