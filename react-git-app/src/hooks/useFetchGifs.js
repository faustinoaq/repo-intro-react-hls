import { useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useLayoutEffect } from "react";

export const useFetchGifs = (category) => {

    const [images, setImage] = useState ([])
    const [isLoading, setIsLoading] = useState (true)

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImage(newImages)
        setIsLoading(false)
    }

    useLayoutEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
};