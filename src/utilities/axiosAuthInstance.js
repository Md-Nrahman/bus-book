import axios from "axios";
import { baseurl } from "../common/baseUrls";
import store from "../store/store";

const axiosInstance = axios.create({
  baseURL: baseurl,
  timeout: 20000,
  timeoutErrorMessage: "Connections took longer then expected.",
});

axiosInstance.defaults.headers.common["Authorization"] = JSON.parse(
  localStorage.getItem("token")
)
  ? JSON.parse(localStorage.getItem("token")).access_token
  : store.getState().userLogin.token.access_token;

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.data.error === "invalid_token" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      const { refresh_token } = JSON.parse(localStorage.getItem("token"));
      const formdata = new FormData();

      formdata.append("grant_type", "refresh_token");
      formdata.append("refresh_token", refresh_token);

      const grant_type = formdata.get("grant_type");
      const refreshing_token = formdata.get("refresh_token");

      const { data } = await axios.post(
        `${baseurl}/oauth/token?grant_type=${grant_type}&refresh_token=${refreshing_token}`,
        {},
        { headers: { Authorization: "Basic d2ViOjEyMw==" } }
      );

      if (data.expire_date >= Date.now()) {
        try {
          localStorage.setItem("token", JSON.stringify(data));

          axios.defaults.headers["Authorization"] =
            "Bearer " + data.access_token;
          originalRequest.headers["Authorization"] =
            "Bearer " + data.access_token;

          return await axiosInstance(originalRequest);
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("refresh token expired.");
      }

      return Promise.reject(error);
    }
  }
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // console.log("Entering into the interceptor");

    if (
      error.response.data.error === "invalid_token" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      const { refresh_token } = JSON.parse(localStorage.getItem("token"));
      const formdata = new FormData();

      formdata.append("grant_type", "refresh_token");
      formdata.append("refresh_token", refresh_token);

      const grant_type = formdata.get("grant_type");
      const refreshing_token = formdata.get("refresh_token");

      // console.log("Sending request again");
      // const { data } = await axios.post(`${baseurl}/oauth/token?grant_type=${grant_type}&refresh_token=${refreshing_token}`, {}, { headers: { 'Authorization': 'Basic d2ViOjEyMw==' } });
      // console.log("It does entered the special condition");

      axios
        .post(
          `${baseurl}/oauth/token?grant_type=${grant_type}&refresh_token=${refreshing_token}`,
          {},
          { headers: { Authorization: "Basic d2ViOjEyMw==" } }
        )
        .then(({ data }) => {
          if (data.expire_date >= Date.now()) {
            // try {
            localStorage.removeItem("token");
            localStorage.setItem("token", JSON.stringify(data));

            const newToken = JSON.parse(localStorage.getItem("token"));
            axios.defaults.headers["Authorization"] =
              "Bearer " + newToken.access_token;
            originalRequest.headers["Authorization"] =
              "Bearer " + newToken.access_token;

            // return await axios(originalRequest);
            return axios(originalRequest);
            // } catch (error) {
            //   return Promise.reject(error);
            // }
          }
        })
        .catch((error) => {
          console.log("Got error fron catch error!");
          if (
            error.response.data.error === "invalid_token" &&
            error.response.status === 401 &&
            error.response.statusText === "Unauthorized"
          ) {
            console.log("Got error from refresh token expiration");
            //   store.dispatch(alternativeLogOut()());
          }
        });

      // if (data.expire_date >= Date.now()) {
      //   // try {
      //   localStorage.setItem("token", JSON.stringify(data));

      //   axios.defaults.headers['Authorization'] = "Bearer " + data.access_token;
      //   originalRequest.headers['Authorization'] = "Bearer " + data.access_token;

      //   // return await axios(originalRequest);
      //   return await axios(originalRequest);
      //   // } catch (error) {
      //   //   return Promise.reject(error);
      //   // }
      // } else {
      //   return store.dispatch(logout())();
      // }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
