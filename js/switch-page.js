function showPage(number_page) {
    var currentPage = document.getElementById(number_page);
    var fieldsets = document.getElementsByTagName("fieldset");

    currentPage.style.display = "block";
    currentPage.classList.add("show");

    for (var i = 0; i < fieldsets.length; i++) {
        if (fieldsets[i] !== currentPage) {
            fieldsets[i].style.display = "none";
            fieldsets[i].classList.remove("show");
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    showPage('page-1');
});
