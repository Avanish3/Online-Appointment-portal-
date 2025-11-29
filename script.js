
// SAVE APPOINTMENT
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("appointmentForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const doctor = document.getElementById("doctor").value;
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;

            if (!name || !phone || !doctor || !date || !time) {
                alert("Please fill all fields");
                return;
            }

            let list = JSON.parse(localStorage.getItem("appointments")) || [];
            list.push({ name, phone, doctor, date, time });

            localStorage.setItem("appointments", JSON.stringify(list));

            alert("Appointment booked successfully!");
            window.location.href = "appointments.html";
        });
    }

    // LOAD APPOINTMENTS PAGE
    const appointmentListDiv = document.getElementById("appointmentList");
    
    if (appointmentListDiv) {
        let list = JSON.parse(localStorage.getItem("appointments")) || [];

        if (list.length === 0) {
            appointmentListDiv.innerHTML = "<p>No appointments found.</p>";
            return;
        }

        let html = "";
        list.forEach((a, i) => {
            html += `
                <div class="card">
                    <h3>${i + 1}. ${a.name}</h3>
                    <p>Phone: ${a.phone}</p>
                    <p>Doctor: ${a.doctor}</p>
                    <p>Date: ${a.date}</p>
                    <p>Time: ${a.time}</p>
                </div>
            `;
        });

        appointmentListDiv.innerHTML = html;
    }
});

