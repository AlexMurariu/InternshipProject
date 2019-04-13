import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export function login(user, pass) {
  return axios
    .post("http://localhost:5000/users/login", {
      user: { email: user, password: pass }
    })
    .then(response =>
      cookies.set("login_token", response.data.user.token, {
        path: "/",
        maxAge: 3600
      })
    )
    .catch(error => alert("Credentials are wrong"));
}

export function getToken() {
  return cookies.get("login_token");
}

export function logout() {
  cookies.remove("login_token");
}
