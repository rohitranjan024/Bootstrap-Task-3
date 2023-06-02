const form = document.getElementById('projectForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      clearErrorMessages();

      const firstName = document.getElementById('firstName');
      const lastName = document.getElementById('lastName');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const address = document.getElementById('address');
      const city = document.getElementById('city');
      const state = document.getElementById('state');
      const projectDescription = document.getElementById('projectDescription');

      if (!firstName.value) {
        showError(firstName, 'First name is required');
      }

      if (!lastName.value) {
        showError(lastName, 'Last name is required');
      }

      if (!email.value) {
        showError(email, 'Email is required');
      } else if (!validateEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
      }

      if (!phone.value) {
        showError(phone, 'Phone number is required');
      }

      if (!address.value) {
        showError(address, 'Address is required');
      }

      if (!city.value) {
        showError(city, 'City is required');
      }

      if (!state.value) {
        showError(state, 'State is required');
      }

      if (!projectDescription.value) {
        showError(projectDescription, 'Project description is required');
      }
    });

    function showError(input, message) {
      const errorText = input.nextElementSibling;
      errorText.textContent = message;
    }

    function clearErrorMessages() {
      const errorTextList = document.getElementsByClassName('error-text');
      for (let i = 0; i < errorTextList.length; i++) {
        errorTextList[i].textContent = '';
      }
    }

    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }