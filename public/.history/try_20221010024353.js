const newPost = {
  userId: 1,
  title: "A new post",
  body: "This is the body of the new post",
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
