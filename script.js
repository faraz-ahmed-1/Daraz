function signup() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (!name || !email || !password) {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("darazUser", JSON.stringify({ name, email, password }));
    alert("Signup successful! Please login.");
    window.location.href = "index.html";
}

function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const user = JSON.parse(localStorage.getItem("darazUser"));

    if (!user) {
        alert("No account found. Please sign up.");
        return;
    }

    if (email === user.email && password === user.password) {
        window.location.href = "homepage.html";
    } else {
        alert("Invalid email or password");
    }
}