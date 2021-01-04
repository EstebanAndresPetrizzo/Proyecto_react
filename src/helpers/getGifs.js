export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=HPPNCohqeoOHgif6CQltCgsVEM70ey0E`;
    //el encodeURI() es por si la categoria tiene espacios o algo que pueda hacer explotar la busqueda
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url//El signo de pregunta se utiliza para validar que venga informacion
        }
    })

    return gifs;
}