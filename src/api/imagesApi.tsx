import { Image } from "../modules/Image";

const numberOfImgsToLoad = 13;

const imageUrl = (page: number, numberOfImgsToLoad: number) => {
    return `https://picsum.photos/v2/list?page=${page}&limit=${numberOfImgsToLoad}`
}

const fetchImages = async () => {
    const page = Math.floor((Math.random() * 110) + 1);
    const url = imageUrl(page, numberOfImgsToLoad);

    return fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((results) => {
            return results;
        })
        .catch((err) => {
            console.log(err);
            return [];
        });
};

export default fetchImages;