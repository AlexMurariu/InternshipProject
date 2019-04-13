import axios from "axios";

function getComments(article) {
    return axios
        .get("http://localhost:5000/articles/"+article+"/comments")
        .then(res => (res.data))
        .catch(err => console.log("[Error] article-comment get: " + err));
}

export default getComments;
