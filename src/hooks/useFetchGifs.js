import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    const newEmages = async () => {
        const images = await getGifs(category);
        setImages(images);
        setIsLoading(false);
    }

    useEffect(() => {
      newEmages();
    },[])

    return {
        images,
        isLoading
    }
}

