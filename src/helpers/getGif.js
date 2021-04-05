
const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=uybUaPVChOLZbFYgTjKm8IzexXlmGVEi`;
    const respuesta = await fetch( url )
    const { data } = await respuesta.json();

    const gifs = data.map( ({ id, title, images })  => {
        return {
            id: id,
            title: title,
            url: images?.downsized_medium.url,
        }
    });

    return gifs;
}

export default getGifs;