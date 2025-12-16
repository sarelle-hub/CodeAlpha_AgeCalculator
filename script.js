const today = new Date(); 

const outputYears = document.getElementById('years');
const outputMonths = document.getElementById('months');
const outputDays = document.getElementById('days');

function isValidDate(day, month, year) {
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Please enter a complete date of birth.");
        return false;
    }
    
    const inputDate = new Date(year, month - 1, day);
    
    if (inputDate.getTime() > today.getTime()) {
        alert("Date of Birth cannot be in the future (It is currently Dec 16, 2025).");
        return false;
    }

    if (inputDate.getDate() !== day || inputDate.getMonth() !== (month - 1) || inputDate.getFullYear() !== year) {
         alert("Please enter a valid calendar date.");
         return false;
    }

    return true;
}


function calculateAge() {
    // Get and parse inputs
    const inputDay = parseInt(document.getElementById('day').value);
    const inputMonth = parseInt(document.getElementById('month').value);
    const inputYear = parseInt(document.getElementById('year').value);

    // Validation Check
    if (!isValidDate(inputDay, inputMonth, inputYear)) {
        outputYears.textContent = '--';
        outputMonths.textContent = '--';
        outputDays.textContent = '--';
        return;
    }

    const dob = new Date(inputYear, inputMonth - 1, inputDay);

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--; 
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        const daysInPrevMonth = prevMonth.getDate();
        days += daysInPrevMonth;
    }

    if (months < 0) {
        years--; 
        months += 12; 
    }

    // Display the result
    outputYears.textContent = years;
    outputMonths.textContent = months;
    outputDays.textContent = days;
}