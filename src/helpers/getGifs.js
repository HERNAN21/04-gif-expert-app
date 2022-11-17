// https://api.giphy.com/v1/gifs/search?api_key=OwK4TGIKcSs7cutUEc3hZl43Hgppb14P&q=dragon boll z&limit=1

export const getGifs = async(category)=> {
    const ulr = `https://api.giphy.com/v1/gifs/search?api_key=OwK4TGIKcSs7cutUEc3hZl43Hgppb14P&q=${category}&limit=20`;
    const resp = await fetch(ulr);
  
    const {data} = await resp.json();
  
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }))
  
    // console.log(data);
    return gifs;
}