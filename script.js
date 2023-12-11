document.addEventListener("DOMContentLoaded", function () {
        const textToType = "Data Scientist | Researcher | Assistant Professor | IEEE Member | ACM Member";
        const typingText = document.getElementById("typing-text");
        let charIndex = 0;

        function typeCharacter() {
          if (charIndex < textToType.length) {
            typingText.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeCharacter, 70); 
          }
        }

        typingText.textContent = "";

        typeCharacter();
      });

const form = document.querySelector("form")

    form.addEventListener('submit', e => {
    if (!form.checkValidity()) {
      e.preventDefault()
    }
    form.classList.add('was-validated')
    });
  