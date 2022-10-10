
async function getUserid() {
    username= document.getElementById("username").value,
  passwordocument.getElementById("password").value,
const user = {

  };  
  try {
    const { data: res } = await axios.post(
      "http://localhost:3000/api/login",
      user
    );
    window.location = "dashboard.html";
    console.log(res.id);
    return res;
  } catch (err) {
    console.log(err);
  }
  window.location = "dashboard.html";
}
const res = await getUserid();
localStorage.setItem("user_id", res.user_id);
