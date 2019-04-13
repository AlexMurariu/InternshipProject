import axios from 'axios'

function postComments(article, collection) {
    return axios
        .post("http://localhost:5000/articles/"+article+"/comments",
            collection
        )
        .catch(error => {
            console.log(error);
        });
}

export default postComments;