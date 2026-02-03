function getAkanName() {
    const birthday = document.getElementById("dateOfBirth").value;
    const gender = document.getElementById("gender").value;
    const resultElement = document.getElementById("result");

    // 2. Input Validation
    if (!birthday || !gender) {
        resultElement.innerHTML = "<p style='color: red;'>Please enter both your birthday and gender.</p>";
        return;
    }

    // 3. Convert date to a day index
    const date = new Date(birthday);
    const dayIndex = date.getDay();

    // 4. Define Akan name arrays based on tradition
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // 5. Select the correct name based on gender and day
    let akanName = (gender === "male") ? maleNames[dayIndex] : femaleNames[dayIndex];

    // 6. Display the result
    resultElement.innerHTML = `
        <div style="margin-top: 20px; padding: 15px; border: 2px solid #ce1126; background: #fffcf0;">
            <p>You were born on a <strong>${dayNames[dayIndex]}</strong>.</p>
            <h3 style="color: #006b3f;">Your Akan name is: ${akanName}</h3>
        </div>
    `;
}
