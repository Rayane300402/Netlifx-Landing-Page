document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector(".email");
  const placeholder = document.querySelector(".placeholder");
  const warning = document.querySelector(".warning");

  function updatePlaceholder() {
    if (emailInput.value) {
      placeholder.classList.add("has-content");
    } else {
      placeholder.classList.remove("has-content");
    }
  }

  function validateEmail() {
    const email = emailInput.value;
    if (email.includes("@") && email.includes(".")) {
      warning.classList.add("hide");
      emailInput.classList.remove("invalid");
    } else if (email.length >= 4 && !email.includes("@")) {
      warning.classList.remove("hide");
      emailInput.classList.add("invalid");
      warning.innerHTML =
        '<i class="fa-solid fa-xmark"></i> Please enter a valid email address';
    } else if (email.length <= 3 && !email.includes("@")) {
      warning.classList.remove("hide");
      emailInput.classList.add("invalid");
      warning.innerHTML = '<i class="fa-solid fa-xmark"></i> Email required';
    }
  }

  emailInput.addEventListener("input", updatePlaceholder);
  emailInput.addEventListener("blur", updatePlaceholder);

  emailInput.addEventListener("input", validateEmail);
  emailInput.addEventListener("blur", () => {
    if (emailInput.value === "") {
      validateEmail();
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.querySelector("#email-2");
    const placeholder = document.querySelector("#placeholder-2");
    const warning = document.querySelector("#warning-2");
  
    function updatePlaceholder() {
      if (emailInput.value) {
        placeholder.classList.add("has-content");
      } else {
        placeholder.classList.remove("has-content");
      }
    }
  
    function validateEmail() {
      const email = emailInput.value;
      if (email.includes("@") && email.includes(".")) {
        warning.classList.add("hide");
        emailInput.classList.remove("invalid");
      } else if (email.length >= 4 && !email.includes("@")) {
        warning.classList.remove("hide");
        emailInput.classList.add("invalid");
        warning.innerHTML =
          '<i class="fa-solid fa-xmark"></i> Please enter a valid email address';
      } else if (email.length <= 3 && !email.includes("@")) {
        warning.classList.remove("hide");
        emailInput.classList.add("invalid");
        warning.innerHTML = '<i class="fa-solid fa-xmark"></i> Email required';
      }
    }
  
    emailInput.addEventListener("input", updatePlaceholder);
    emailInput.addEventListener("blur", updatePlaceholder);
  
    emailInput.addEventListener("input", validateEmail);
    emailInput.addEventListener("blur", () => {
      if (emailInput.value === "") {
        validateEmail();
      }
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  const accordion = document.querySelectorAll('input[type="radio"][name="accordion"]')
  const faqSection = document.querySelector(".faq_height")
  console.log(faqSection)
  accordion.forEach((item) => {
    if (item.checked) {
      document.querySelector(`label[for="${item.id}"] span`).classList.add("rotated")
      // faqSection.classList.add('expanded')
    } else{
      document.querySelector(`label[for="${item.id}"] span`).classList.remove("rotated")
      // faqSection.classList.remove('expanded')
    }
    item.addEventListener("change", () => {
      accordion.forEach((item) => {
        document.querySelector(`label[for="${item.id}"] span`).classList.remove("rotated")
        // faqSection.classList.remove('expanded')

      })
      document.querySelector(`label[for="${item.id}"] span`).classList.add("rotated")
      // faqSection.classList.add('expanded')

    })
  })
}) 