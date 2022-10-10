// const user = {
//     username: document.getElementById("username").value,
//     password: document.getElementById("password").value
// };

const sendPostRequest = async () => {     
  try {
    const resp = await axios.post("http://localhost:3000/api/login",
        user
    );

    console.log(resp.data);
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

// sendPostRequest();

const user = {
  username: document.getElementById("username").value,
  password: document.getElementById("password").value,
};
 const { data: res } = await axios.post("http://localhost:3000/api/login", {
  user
 });
 return res;
const getAccessToken = async () => {
  try {
    const body = new URLSearchParams({
      grant_type: "client_credentials",
      scope: "manage:all",
    }).toString();

    const config = {
      headers: {
        Content_Type: "application/x-www-form-urlencoded",
      },
      auth: {
        username: clientId,
        password: clientSecret,
      },
    };

    const { data: res } = await axios.post(
      `${baseUrl}/oauth2/token`,
      body,
      config
    );

    return res;
  } catch (err) {
    console.log(err);
  }
};