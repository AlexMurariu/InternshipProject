import axios from 'axios'

function postFavoriteArticle(url) {
    return axios
        .post(url)
        .then(console.log("Ready to be posted"))
        .catch(err => {
            console.log("[Error] article-favorite post: " + err);
        });
}

export default postFavoriteArticle;