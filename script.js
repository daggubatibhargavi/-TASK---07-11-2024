// function validation() {
//   let Name = document.getElementById("name").value.trim();
//   let email = document.getElementById("email").value.trim();
//   let Password = document.getElementById("password").value.trim();
//   let error_msg = document.getElementById("p");
//   error_msg.textContent = "";

//   let namePattern = /^[A-Za-z0-9]+$/;
//   let emailPattern = /^[a-zA-Z0-9#$^&*\-_]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
//   let passwordPattern = /^[A-Za-z0-9@#]{8,}$/;

//   let errors = [];
//   if (!namePattern.test(Name)) {
//     errors.push(" only letters and numbers allowed.");
//   }
//   if (!emailPattern.test(email)) {
//     errors.push("Invalid email format.");
//   }
//   if (!passwordPattern.test(Password)) {
//     errors.push(
//       " password must be at least 8 characters and contain only letters, numbers, @, or #."
//     );
//   }
//   if (errors.length > 0) {
//     error_msg.textContent = errors.join(" ");
//   } else {
//     error_msg.textContent = "All inputs are valid!";
//   }
// }
function validation() {
  let Name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let Password = document.getElementById("password").value.trim();
  let error_nameMsg = document.getElementById("p1");
  let error_passwordMsg = document.getElementById("p2");
  let error_emailMsg = document.getElementById("p3");
  error_nameMsg.textContent = "";
  error_passwordMsg.textContent = "";
  error_emailMsg.textContent = "";

  let namePattern = /^[A-Za-z0-9]+$/;
  let emailPattern = /^[a-zA-Z0-9#$^&*\-_]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
  let passwordPattern = /^[A-Za-z0-9@#]{8,}$/;

  if (!namePattern.test(Name)) {
    error_nameMsg.textContent =
      "Invalid name: only letters and numbers allowed.";
  }
  if (!emailPattern.test(email)) {
    error_emailMsg.textContent = "Invalid email format.";
  }
  function togglePassword() {
    // const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById("eyeIcon");

    if (Password.type === "password") {
      Password.type = "text";
      eyeIcon.innerHTML = '<i class="fas fa-eye-slash"></i>'; // Eye-slash icon for hidden password
    } else {
      Password.type = "password";
      eyeIcon.innerHTML = '<i class="fas fa-eye"></i>'; // Eye icon for visible password
    }
  }

  if (!passwordPattern.test(Password)) {
    error_passwordMsg.textContent =
      "Invalid password: must be at least 8 characters and contain only letters, numbers, @, or #.";
  } else {
    error_msg.textContent = "All inputs are valid!";
  }
}
