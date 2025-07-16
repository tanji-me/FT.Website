document.addEventListener("DOMContentLoaded", function () {
    const confirmBtn = document.getElementById("confirmBtn");
    const contactForm = document.getElementById("contactForm");

    function checkRequiredFields() {
        const requiredFields = contactForm.querySelectorAll("input[required], select[required], textarea[required]");
        let allFilled = true;

        requiredFields.forEach(field => {
            if (field.type === "radio") {
                const group = contactForm.querySelectorAll(`input[name="${field.name}"]`);
                const oneChecked = Array.from(group).some(r => r.checked);
                if (!oneChecked) allFilled = false;
            } else if (field.type === "checkbox" && !field.checked) {
                allFilled = false;
            } else if (field.type !== "radio" && field.type !== "checkbox" && field.value.trim() === "") {
                allFilled = false;
            }
        });

        if (allFilled) {
            confirmBtn.disabled = false;
            confirmBtn.classList.add("enabled");
        } else {
            confirmBtn.disabled = true;
            confirmBtn.classList.remove("enabled");
        }
    }

    contactForm.addEventListener("input", checkRequiredFields);
    contactForm.addEventListener("change", checkRequiredFields);
});