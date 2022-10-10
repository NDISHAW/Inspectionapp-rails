function signIn() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // firebase code
    // firebase.auth().signInWithEmailAndPassword(email, password)
    axios
      .post("https://inspectionsapp-rails.herokuapp.com//api/login", {
        password: password,
        username: username,
        // phone: phone,
        // licence_no: licence_no,
        // address: address,
      })
      .then((result) => {
        let res = result.data;
        localStorage.setItem("user_id", res.user_id);
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
  axios
    .post("https://inspectionsapp-rails.herokuapp.com//api/signup", {
      username: username,
      password: password,
      phone: phone,
      licence_no: licence_no,
      address: address,
      email: email,
    })
    .then((result) => {
      // Signed in
      // document.write("You are Signed Up");
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
  const user_id = 2;
  // const btn = document.getElementById("submit-btn").value;

  axios
    .post("https://inspectionsapp-rails.herokuapp.com//api/bookings", {
      service: service,
      date: date,
      time: time,
      user_id: user_id,
    })
    .then((result) => {
      // Signed in
      alert(`Your Apointment is set. See you on ${date} @ ${time}`,1000)
      
      // window.location.reload()
      // window.location = "dashboard.html";

      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
}

function vehicles(){
  // event.preventdefault();
  
  const numberplate = document.getElementById("numberplate").value;
  const chasisnumber = document.getElementById("chasisnumber").value;
  const model = document.getElementById("model").value;
  const user_id = 2;
  // const btn = document.getElementById("submit-btn").value;

  axios
    .post("https://inspectionsapp-rails.herokuapp.com//api/vehicles", {
      numberplate: numberplate,
      chasisnumber: chasisnumber,
      model: model,
      user_id: user_id,
    })
    .then((result) => {
      // Signed in
      alert(`Conguratulations!! Your ${model} has been added to our database!`, 1000);

      // window.location.reload()
      // window.location = "dashboard.html";

      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
}