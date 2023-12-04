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
        getImage("animaux", "renault"),
        getImage("animaux", "peugeot"),
        getImage("animaux", "citroen"),
        getImage("animaux", "audi"),
        getImage("animaux", "volvo"),
        getImage("animaux", "dacia"),
        getImage("animaux", "bmw"),
        getImage("animaux", "volkswagen"),
    ]
}