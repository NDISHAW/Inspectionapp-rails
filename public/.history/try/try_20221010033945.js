
async function getUserid() {
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
