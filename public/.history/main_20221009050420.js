function signIn() {
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
            // Signed in
            document.write("You are Signed In");
            // window.location = "form.html";
            window.location = "dashboard.html";

            console.log(result);
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
}

function signUp() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;const phone = document.getElementById("phone").value;const licence_no = document.getElementById("licence_no").value;const address = document.getElementById("address").value;
  // firebase code
  // firebase.auth().signInWithEmailAndPassword(email, password)
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

function Booking() {
  const service = document.getElementById("username").value;
  const date = document.getElementById("email").value;
  const time = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;
  const licence_no = document.getElementById("licence_no").value;
  const address = document.getElementById("address").value;
  // firebase code
  // firebase.auth().signInWithEmailAndPassword(email, password)
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