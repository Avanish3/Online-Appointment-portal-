// Doctor List Data
const doctors = [
    { name: "Dr. Raj Mehta", specialty: "Cardiologist", experience: "10 years" },
    { name: "Dr. Priya Sharma", specialty: "Dermatologist", experience: "7 years" },
    { name: "Dr. Aarav Patel", specialty: "Neurologist", experience: "12 years" }
];

// Load doctors on Home Page
window.onload = function () {
    let doctorSection = document.getElementById("doctor-list");
    if (doctorSection) {
        doctorSection.innerHTML = "";
        doctors.forEach(doc => {
            doctorSection.innerHTML += `
                <div class="doctor-card">
                    <h3>${doc.name}</h3>
                    <p><strong>Specialty:</strong> ${doc.specialty}</p>
                    <p><strong>Experience:</strong> ${doc.experience}</p>
                </div>
                <hr>
            `;
        });
    }
};

document.getElementById("generateBtn").addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;

  if (name === "" || phone === "") {
    alert("Please fill all fields");
    return;
  }

  document.getElementById("output").style.display = "block";
  document.getElementById("output").innerHTML = `
    <h3>Generated Data</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
  `;
});
