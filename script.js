const form = document.getElementById('loginForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username === '' || password === '') {
    alert('Please enter both username and password 💫');
    return;
  }

  // Add animation or redirect later
  alert('Welcome back, ' + username + ' 🌸');
  form.reset();
});




// ---------------- Login Form ----------------
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
      alert('Please enter both username/email and password.');
      return;
    }

    // Example: Just a demo alert
    alert(`Welcome back, ${username}! 🎉`);
    loginForm.reset();
  });
}

// ---------------- Sign Up Form ----------------
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!fullname || !email || !username || !password || !confirmPassword) {
      alert('Please fill all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Example: Just a demo alert
    alert(`Account created successfully! Welcome, ${fullname}! 🌸`);
    signupForm.reset();
  });
}

// ---------------- Forgot Password Form ----------------
const forgotForm = document.getElementById('forgotForm');
if (forgotForm) {
  forgotForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();

    if (!email) {
      alert('Please enter your email.');
      return;
    }

    // Example: Simulate sending reset link
    alert(`Reset link sent to ${email}! Check your inbox. 💌`);
    forgotForm.reset();
  });
}
