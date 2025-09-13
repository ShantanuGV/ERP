document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); // ❗ Stops the form from refreshing

      // Get input values
      const username = document.querySelector("input[type='text']").value.trim();
      const password = document.querySelector("input[type='password']").value.trim();
      const role = document.querySelector("select").value;

      // Basic validation
      if (username === "" || password === "") {
        alert("⚠ Please enter both username and password.");
        return;
      }

      // TEMPORARY: fake password check
      const correctPassword = "erp123"; 
      if (password !== correctPassword) {
        alert("❌ Incorrect password! Hint: Use 'erp123'");
        return;
      }

      // Redirect based on role
      if (role === "student") {
        window.location.href = "student-dashboard.html";
      } else if (role === "teacher") {
        window.location.href = "teacher/teacher-dashboard.html";
      } else if (role === "admin") {
        window.location.href = "admin-dashboard.html";
      } else {
        alert("❌ Invalid role selected.");
      }
    });
  }
});

