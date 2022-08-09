import axios from "axios";
class ApiProvider {
  constructor(config) {
    this.config = config || {};
    this.httpClient = new axios.create({
      baseURL: this.baseUrl,
      headers: this.headers,
    });
  }

  get baseUrl() {
    return this.config.baseUrl || null;
  }
  get token() {
    return localStorage.getItem("jwt") || null;
  }
  set token(token) {
    localStorage.setItem("jwt", token);
  }

  get user() {
    return JSON.parse(localStorage.getItem("user") || "null") || null;
  }
  set user(user) {
    localStorage.setItem("user", JSON.stringify(user || null));
  }

  get isAuth() {
    return this.token && this.user;
  }

  deleteAuthData() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    this.httpClient.defaults.headers.common = this.headers;
  }

  get headers() {
    console.log("user Auth token", this.token);
    if (this.token) {
      return {
        Authorization: "Bearer " + this.token,
      };
    }
    return {};
  }

  signUp = (email, password, username,country,firstName,lastName,gender,phoneNumber,type) => {
    const { Authorization = null, ...headers } = this.headers;
    return this.httpClient
      .post(
        "auth/local/register",
        {
          email,
          password,
          username,
          country, 
          profile:{
            firstName:firstName,
            lastName: lastName,
            gender: gender,
            phoneNumber:phoneNumber,
            type:type
          }
        },
        {
          headers,
        }
      )
      .then((response) => {
        if (response.data.jwt) {
          this.token = response.data.jwt;
          this.httpClient.defaults.headers.common = this.headers;
          this.user = response.data.user;
        }

        return {
          token: response.data.jwt,
          user: response.data.user,
        };
      });
  };
  sigin = (identifier, password) => {
    return this.httpClient
      .post(
        "auth/local",
        {
          identifier,
          password,
        },
        {
          headers: this.headers,
        }
      )
      .then((response) => {
        if (response.data.jwt) {
          this.token = response.data.jwt;
          this.user = response.data.user;
          this.httpClient.defaults.headers.common = this.headers;
        }
        return {
          token: response.data.jwt,
          user: response.data.user,
        };
      });
  };
}

const authService = new ApiProvider({
  baseUrl: "https://api.carelobby.flux.i.ng/v1",
});
export default authService;