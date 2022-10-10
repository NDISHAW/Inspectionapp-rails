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
//  const { data: res } = await axios.post("http://localhost:3000/api/login", {
//   user
//  });
//  return res;
const getUserid = async () => {
  try {
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