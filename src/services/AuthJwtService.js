import { Axios } from "axios-observable";
import { map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { ACCESS_TOKEN, INIT_STATE } from "../config/config";
export default class AuthJwtService {
  constructor(url) {
    if (!url) {
      throw Error("url is undefined");
    }
    this.url = url;
  }
  login(credentials) {
    return Axios.post(this.url + "login", credentials).pipe(
      mergeMap((response) => {
        localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
        return this.getUserData();
      })
    );
  }
  logout() {
    localStorage.removeItem(ACCESS_TOKEN);
  }
  getUserData() {
    const jwt = localStorage.getItem(ACCESS_TOKEN);
    if (!jwt) {
      return of({ identity: INIT_STATE });
    }
    const jwtBody = JSON.parse(atob(jwt.split(".")[1]));

    const currentTimeInSeconds = new Date() / 1000;
    if (currentTimeInSeconds > jwtBody.exp) {
      this.logout();
      return of({ identity: INIT_STATE });
    }
    return of({ jwtBody });
  }
}
