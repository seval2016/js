function calculateAge() {
    // 1- input elementlerini ve result elementlerini seç ve değişkene ata

    const birthDay = document.querySelector("#day");
    const birthMonth = document.querySelector("#month");
    const birthYear = document.querySelector("#year");
    const lblYears = document.querySelector("#lblYears");
    const lblMonths = document.querySelector("#lblMonths");
    const lblDays = document.querySelector("#lblDays");

    // 2- inputların değerlerini al ve değişkene ata
    const day = Number(birthDay.value);
    const month = Number(birthMonth.value);
    const year = Number(birthYear.value);

    const currentDateTime = new Date();

    // falsy values: null, undefined, empty, false, 0
    // 3- input değerlerini kontrol et (validation)

    if (!day || day < 1 || day > 31) {
        alert("Invalid day");
        return;
    } else if (!month || month < 1 || month > 12) {
        alert("Invalid month");
        return;
    } else if (!year || year < 1900 || year > currentDateTime.getFullYear()) {
        alert("Invalid year");
        return;
    }

    // 4- hesapla

    const birthDate = new Date(year, month - 1, day);

    if (birthDate > currentDateTime) {
        alert("Invalid birthdate");
        return;
    }

    // 5- sonucu yazdır.
    const currentYear = currentDateTime.getFullYear();
    const currentMonth = currentDateTime.getMonth() + 1;
    const currentDay = currentDateTime.getDate();

    let ageYear = currentYear - year;
    let ageMonth = currentMonth - month;
    let ageDay = currentDay - day;

    if (ageDay < 0) {
        // Adjust for the previous month
        const previousMonth = currentMonth - 1;
        const daysInPreviousMonth = new Date(currentYear, previousMonth, 0).getDate();
        ageDay += daysInPreviousMonth;
        ageMonth--;
    }

    if (ageMonth < 0) {
        ageMonth += 12;
        ageYear--;
    }

    lblYears.textContent = ageYear;
    lblMonths.textContent = ageMonth;
    lblDays.textContent = ageDay;
}
