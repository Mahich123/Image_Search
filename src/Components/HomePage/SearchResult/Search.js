import axios from "axios"

export default function unsplash(sq, callback) {
    axios.get(`https://corsanywhere.herokuapp.com/https://unsplash.com/s/photos/${encodeURIComponent(sq)}`)
        .then(
            (page_source) => {
                var urls = page_source.data.match(/https:\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/g);

                var imageURLs = new Set()

                for (let i = 0; i < urls.length; i++) {
                    let urlparse = new URL(urls[i])

                    if (urlparse.hostname == "images.unsplash.com" && urlparse.pathname.substring(1, 6) == "photo") {
                        imageURLs.add(`${urlparse.origin}${urlparse.pathname}`)
                    }
                }

                callback({ total: [...imageURLs].length, images: [...imageURLs] })
            }
        )
}