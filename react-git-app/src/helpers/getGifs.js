export const getGifs = async (cat) => {
    const key = "uo7lctzcZjC7dggufC8xAPmq1KtBlq2R"
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${cat}&limit=15&offset=0&rating=g&lang=en`
    const res = await fetch(url)
    const { data } = await res.json()

    const gifInfo = data.map((data) => ({
        id: data.id,
        url: data.images.original.url,
        title: data.title
    }))

    return gifInfo
}