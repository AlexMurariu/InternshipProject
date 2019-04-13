import axios from "axios";

function getUserArticles(user) {
  return axios
    .get(
      "http://localhost:5000/articles?author=" + user + "&limit=100&offset=0"
    )
    .then(response => response.data)
    .catch(e => console.log(e));
}

export default getUserArticles;
