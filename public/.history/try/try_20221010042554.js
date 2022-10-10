const res = {};
localStorage.setItem("user_id", res.user_id);

 function getUserid() {
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
       resp=result.data
       res = resp.id
       document.write("You are Signed In");
       // window.location = "form.html";
      //  window.location = "dashboard.html";

       console.log(res);
     })
     .catch((error) => {
       console.log(error.code);
       console.log(error.message);
     });
 }
function response() {
  const res = localStorage.getItem("user_id");
}

//   const getAccessToken = async () => {
//     try {
//         const body = new URLSearchParams({
//             grant_type: 'client_credentials',
//             scope: 'manage:all'
//         }).toString();

//         const config = {
//             headers: {
//                 Content_Type: 'application/x-www-form-urlencoded'
//             },
//             auth: {
//                 username: clientId,
//                 password: clientSecret
//             }
//         };

//         const { data: res } = await axios.post(
//             `${baseUrl}/oauth2/token`,
//             body,
//             config
//         );

//         return res;
//     } catch (err) {
//         console.log(err);
//     }
// };