import axios from 'axios'

function deleteFavoriteArticle(url) {
    return axios
        .delete(url)
        .then(console.log("Ready to be deleted"))
        .catch(err => {
            console.log("[Error] article-favorite delete: " + err);
        });
}

export default deleteFavoriteArticle;