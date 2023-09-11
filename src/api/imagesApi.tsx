
const numberOfImgsToLoadEveryTime = 13;
const numberOfPages = 111;

const imageUrl = (page: number, numberOfImgsToLoad: number) => {
    return `https://picsum.photos/v2/list?page=${page}&limit=${numberOfImgsToLoad}`
}

var pagesToLoad = Array.from({ length: numberOfPages }, (_, i) => i + 1)

const fetchImages = async () => {

    if (pagesToLoad.length > 0) {
        const page = pagesToLoad[Math.floor(Math.random() * pagesToLoad.length)];
        const indexToRemove = pagesToLoad.indexOf(page);
        pagesToLoad.splice(indexToRemove, 1);
        const url = imageUrl(page, numberOfImgsToLoadEveryTime);

        return fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((results) => {
                return results;
            })
            .catch((err) => {
                console.log(err);
                throw new Error(`Failed fetch images: ${err.message}`);
            });
    }
    else {
        console.log("No more images to fetch!");
        throw new Error(`No more images to fetch!`);
    }
};

export default fetchImages;