export const getGifs = async(categoria) => {
    //Del URL solo he cambiado los espacios por '+'
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=ZQqLKIHfdmpkY17T2RxDxvL1lYXJDtA6`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });
    
    return gifs;
}