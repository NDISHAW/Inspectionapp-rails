const newPost = {
  userId: 1,
  title: "A new post",
  body: "This is the body of the new post",
};

const sendPostRequest = async () => {
  try {
    const resp = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
        const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
    );
    console.log(resp.data);
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

sendPostRequest();
