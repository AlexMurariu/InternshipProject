import axios from "axios";

function getLoggedInUser() {
  return axios
    .get("http://localhost:5000/user")
    .then(
      response => (response.data)
    )
    .catch(error => console.log(error));
}

export default getLoggedInUser;
