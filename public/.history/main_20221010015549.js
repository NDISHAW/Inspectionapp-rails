const user = signIn)
 console.log(user);
async function signIn(re) {

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
      user_id = result.data;
      // Signed in
      // document.write("You are Signed In");
      // window.location = "form.html";
      // window.location = "dashboard.html";
       re = result.user_id;
      // console.log(user_id);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
    return user_id;
}

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
const me = (re)=>{

console.log(re);
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
}