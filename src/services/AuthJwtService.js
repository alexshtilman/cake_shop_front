import { Axios } from "axios-observable";
import { map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { ACCESS_TOKEN, INIT_STATE, REFRESH_TOKEN } from "../config/config";
export default class AuthJwtService {
  constructor(url) {
    if (!url) {
      throw Error("url is undefined");
    }
    this.url = url;
    try {
      console.log(window.callback_refresh_token);
      console.log(window.callback_refresh_token);
    } catch (error) {
      console.log("none");
    }
  }
  login(credentials) {
    return Axios.post(this.url + "login", credentials).pipe(
      mergeMap((response) => {
        localStorage.setItem(ACCESS_TOKEN, response.data.access_token);
        localStorage.setItem(REFRESH_TOKEN, response.data.refresh_token);
        return this.getUserData();
      })
    );
  }
  logout() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  }
  getUserData() {
    const jwt = localStorage.getItem(ACCESS_TOKEN);
    if (!jwt || jwt == 'null') {
      return of({ identity: INIT_STATE });
    }
    try {
      const jwtBody = JSON.parse(atob(jwt.split(".")[1]));

      const currentTimeInSeconds = new Date() / 1000;
      if (currentTimeInSeconds > jwtBody.exp) {
        this.logout();
        return of({ identity: INIT_STATE });
      }
      return of({ ...jwtBody });
    } catch (error) {
      return of({ identity: INIT_STATE, error });
    }

  }
}
