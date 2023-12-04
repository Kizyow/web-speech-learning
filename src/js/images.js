export const getImage = (name) => {
    return {src: `../images/${name}.png`, alt: `${name}`};
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