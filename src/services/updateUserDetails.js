import axios from "axios";

function updateUserDetails(password, image, bio) {
  return axios
    .put("http://localhost:5000/user", {
      user: {
        password: password,
        image: image,
        bio: bio
      }
    })
    .then(response => response.data)
    .catch(error => console.log(error));
}

export default updateUserDetails;
