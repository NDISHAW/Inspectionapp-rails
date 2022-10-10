const newPost = {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
};

const sendPostRequest = async () => {
  const 
  const     
  try {
    const resp = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        password: password,
        username: username,
      }
    );

    console.log(resp.data);
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

sendPostRequest();
