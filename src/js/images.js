export const getImage = (categorie, name) => {
    const img = new Image();
    img.src = `../images/${categorie}/${name}.png`;
    img.alt = `${name}`;
    return img;
}

export const getImagesVoitures = () => {
    return [
        getImage("voitures", "renault"),
        getImage("voitures", "peugeot"),
        getImage("voitures", "citroen"),
        getImage("voitures", "audi"),
        getImage("voitures", "volvo"),
        getImage("voitures", "dacia"),
        getImage("voitures", "bmw"),
        getImage("voitures", "volkswagen"),
    ]
}

export const getImagesAnimaux = () => {
    return [
        getImage("animaux", "chat"),
        getImage("animaux", "chien"),
        getImage("animaux", "crocodile"),
        getImage("animaux", "elephant"),
        getImage("animaux", "girafe"),
        getImage("animaux", "hibou"),
        getImage("animaux", "koala"),
        getImage("animaux", "panda"),
    ]
}