const user_id = signIn();
 console.log();
async function signIn(user_id) {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  // firebase code
  // firebase.auth().signInWithEmailAndPassword(email, password)
  axios
    .post("http://localhost:3000/api/login", {
      password: password,
      username: username,
      // phone: phone,
      // licence_no: licence_no,
      // address: address,
    })
    .then((result) => {
      re = result.data;
      // Signed in
      // document.write("You are Signed In");
      // window.location = "form.html";
      window.location = "dashboard.html";
      user_id = re.id;
      // console.log(re.id);
      // console.log(user_id);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
  return user_id;
}
console.log(signIn("sixty@gmail.com", "sixty@gmail.com"));
function signUp() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;const phone = document.getElementById("phone").value;const licence_no = document.getElementById("licence_no").value;const address = document.getElementById("address").value;
  axios
    .post("http://localhost:3000/api/signup", {
      username: username,
      password: password,
      phone: phone,
      licence_no: licence_no,
      address: address,
      email: email,
    })
    .then((result) => {
      // Signed in
      document.write("You are Signed Up");
      // window.location = "form.html";
      window.location = "dashboard.html";

      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
}

function Booking(event) {
  // event.preventdefault();
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const user_id = document.getElementById("time").value;
  const btn = document.getElementById("submit-btn").value;

  axios
    .post("http://localhost:3000/api/bookings", {
      service: service,
      date: date,
      time: time,
      user_id: user_id,
    })
    .then((result) => {
      // Signed in
      alert("Message received")
      document.write("You can proceed to the inspection site. Your request has been received");
      // window.location.reload()
      // window.location = "dashboard.html";

      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
}
const me = (user_id) => {
  signIn("sixty@gmail.com","");
  console.log(user_id);
  // axios
  //   .get("http://localhost:3000/api/me")
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // always executed
  //   });
};

const user = {
  username: document.getElementById("username").value,
  password: document.getElementById("password").value,
};

const sendPostRequest = async () => {
  try {
    const resp = await axios.post("http://localhost:3000/api/login", user);

    console.log(resp.data);
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};