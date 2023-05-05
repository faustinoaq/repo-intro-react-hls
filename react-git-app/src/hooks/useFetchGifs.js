import { useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useEffect } from "react";

export const useFetchGifs = (category) => {

    const [images, setImage] = useState ([])
    const [isLoading, setIsLoading] = useState (true)
    const [onError, setOnError] = useState(false)

    const getImages = async () => {
        try {
            const newImages = await getGifs(category)
            setImage(newImages)
            setIsLoading(false)
        } catch {
            setOnError(true)
        }
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading,
        onError
    }
};