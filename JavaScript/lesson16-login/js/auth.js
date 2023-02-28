const user = {
  email: "info@example.com",
  pass: "info123",
};
const emailInput = document.querySelectorAll("input")[0];
const passInput = document.querySelectorAll("input")[1];
const form = document.querySelector("form");
const alert  = document.querySelector('#alert');

const checkLogin = (e) => {
  e.preventDefault();
        if (!emailInput.value || !passInput.value) {
            alert.className = "text-center col-6 alert alert-warning";
            alert.innerHTML = "Please, fill input";
        }else{
            if (emailInput.value === user.email && passInput.value === user.pass) {
                alert.className = "text-center col-6 alert alert-success";
                alert.innerHTML = "login success";
                location.assign("http://127.0.0.1:5500/dashboard.html");
          }else{
            alert.className = "text-center col-6 alert alert-danger";
            alert.innerHTML = "Email or password is wrong!";
          }
        }
};

form.onsubmit = checkLogin;
