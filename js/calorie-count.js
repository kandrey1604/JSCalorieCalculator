function CalorieCalculator() {
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var growth = document.getElementById("growth").value;
    var weight = document.getElementById("weight").value;
    var active = document.getElementById("active").value;
    var result = 0;

    if (gender === "Male") {
        var result = 88.362 + (13.397 * weight) + (4.799 * growth) - (5.677 * age); 
    } else if (gender === "Female") {
        var result = 447.593 + (9.247 * weight) + (3.098 * growth) - (4.330 * age);
    }

    var totalResult = result * active;

    document.getElementById("totalCallorie").textContent = totalResult.toFixed(0) + " ккал";
    console.log(totalResult);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calorieCount").addEventListener("click", CalorieCalculator);
});
