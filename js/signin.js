function myfun(event) {
  event.preventDefault(); // Prevent form submission
  var name1 = document.getElementById("f_name").value;
  var pwd1 = document.getElementById("n_pwd").value;
  if (name1.length == 0 || pwd1.length == 0) {
    alert("Some fields are empty!");
  } else if (name1 == "admin" && pwd1 == "admin") {
    alert("Login Successful");
    window.location.href = "./dashboard.html"; // Correct path
  } else {
    alert("Invalid credentials!");
  }
}
