// $(document).ready(function () {
//   $("#registerForm").on("submit", async function (e) {
//     e.preventDefault();

//     const username = $("#regUsername").val();
//     const email = $("#regEmail").val();
//     const password = $("#regPassword").val();

//     try {
//       const res = await fetch("http://localhost:3000/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, email, password }),
//       });

//       const data = await res.json();
//       console.log(data);
//     } catch (err) {
//       console.error(err);
//     }
//     $("#loginForm").on("submit", async function (e) {
//       e.preventDefault();

//       const email = $("#loginEmail").val();
//       const password = $("#loginPassword").val();

//       try {
//         const res = await fetch("http://localhost:3000/auth/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email, password }),
//         });

//         if (!res.ok) {
//           const errorData = await res.json();
//           console.log(`Error: ${errorData.message}`);
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }

//         const data = await res.json();
//         console.log(data);

//         // Redirect to the homepage if login is successful
//         if (data.redirectUrl) {
//           window.location.href = data.redirectUrl;
//         }
//       } catch (err) {
//         console.error("Error:", err);
//         alert(`Error: ${err.message}`);
//       }
//     });
//   });
// });
