export const getImage = (name) => {
    const img = new Image();
    img.src = `../images/${name}.png`;
    img.alt = `${name}`;
    return img;
}

export const getImagesVoitures = () => {
    return [
        getImage("renault"),
        getImage("peugeot"),
        getImage("citroen"),
        getImage("audi"),
        getImage("volvo"),
        getImage("dacia"),
        getImage("bmw"),
        getImage("volkswagen"),
    ]
}