
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
