


export const getGifs= async( category ) => {
    //PETICION HTTPS EN JS
            //const url= `https://api.giphy.com/v1/gifs/trending?q=${encodeURI(category) }&limit=10&api_key=AigrkZZzieKBpGWH7JRCY6Xj7Osg0lQS`
           const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category) }&limit=10&api_key=PihHsZ4UjvogjnVPN9wiyeIhQdqxAN2B`
            const resp= await fetch(url);
            const { data } = await resp.json();
    
            const gifs = data.map( img => {
                return {
                    id: img.id,
                    title: img.title,
                    url: img.images?.downsized_medium.url
                }
            })
    
            return gifs;
            
            }
            