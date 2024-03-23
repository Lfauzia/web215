document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-cont');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validate the form inputs
        if (validateForm()) {
            // If the form is valid, display the results
            displayResults();
        }
    });

    // Add event listeners to input fields to check for empty values on form submission
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            validateInput(input);
        });
    });

    function validateForm() {
        // my validation logic for each input field
        const photo = document.getElementById('user-photo').value;
        const caption = document.getElementById('photocaption').value;
        const name = document.getElementById('fullname').value;
        const courses = document.getElementById('coursebackground').value;
        const additionalShare = document.getElementById('additionalshare').value;
        const pBack = document.getElementById('personalbackground').value;
        const proBack = document.getElementById('probackground').value;
        const acaBack = document.getElementById('acabackground').value;
        const subBack = document.getElementById('subbackground').value;
        const platform = document.getElementById('platform').value;
        const funnyItem = document.getElementById('funny').value;
        


        // Create an array to store the names of empty fields
        const emptyFields = [];

        // Check each required field and push its name to the emptyFields array if empty
        if (photo === '') {
            emptyFields.push('Photo');
        }
        if (caption === '') {
            emptyFields.push('Caption');
        }
        if (name === '') {
            emptyFields.push('Name');
        }
        if (courses === '') {
            emptyFields.push('Courses');
        }

        if (additionalShare === '') { // Validate the additional textarea
            emptyFields.push('Additional Share');
        }

        if (pBack == '' ) { // Validate the additional textarea
            emptyFields.push('Personal Background');
        }

        if (proBack == '') { emptyFields.push('Professional Background');
        }

        if (acaBack == '') { emptyFields.push('Academic Background');
        }

        if (subBack == '') { emptyFields.push('Subject Background')

        }
        
        if (platform == '') { emptyFields.push('Computer Platform');
        }

        if (funnyItem == '') { emptyFields.push('Funny Item');
        }


        // If there are empty fields, construct and display a warning message
        if (emptyFields.length > 0) {
            // Construct the warning message
            const errorMessage = `Please fill out all required fields: ${emptyFields.join(', ')}.`;
            alert(errorMessage);
            return false;
        }

        return true;
    }

    function displayResults() {
        const formContainer = document.getElementById('form-cont');
        const formBackgroundColor = window.getComputedStyle(formContainer).getPropertyValue('background-color');
        const formPadding = window.getComputedStyle(formContainer).getPropertyValue('padding');
        const formBoxShadow = window.getComputedStyle(formContainer).getPropertyValue('box-shadow');
        const formBorderRadius = window.getComputedStyle(formContainer).getPropertyValue('border-radius');

        const resultsContainer = document.createElement('div');
        resultsContainer.style.backgroundColor = formBackgroundColor; // background color
        resultsContainer.style.padding = formPadding; //padding
        resultsContainer.style.boxShadow = formBoxShadow; //box shadow
        resultsContainer.style.borderRadius = formBorderRadius; //border radius

        // Get values from the form
        const name = document.getElementById('fullname').value;
        const personalBackground = document.getElementById('personalbackground').value;
        const professionalBackground = document.getElementById('probackground').value;
        const academicBackground = document.getElementById('acabackground').value;
        const subjectBackground = document.getElementById('subbackground').value;
        const platform = document.getElementById('platform').value;
        const coursesRaw = document.getElementById('coursebackground').value;
        const coursesList = coursesRaw.split(',').map(course => course.trim()); // Split courses by commas and trim whitespace
        const funnyItem = document.getElementById('funny').value;
        const additionalShare = document.getElementById('additionalshare').value;
        const enjoyCoding = document.querySelector('input[name="enjoycoding"]:checked').value;
        const programmingLanguages = document.querySelectorAll('input[name="programinglanguages"]:checked');
        const userPhoto = document.getElementById('user-photo').files[0];
        const caption = document.getElementById('photocaption').value;
        const formattedCourses = coursesList.map(course => course.replace(/(WEB250-N801-|WEB215-N801-|CSC221-N801)/g, '<strong>$1</strong>'));

        // results HTML
        const resultsHTML = `
            <ul>
                <div style="text-align: center;">
                    <h3>${name}</h3>
                    <img src="${URL.createObjectURL(userPhoto)}" alt="User Photo" style="display: block; margin: 0 auto; width: 350px;">
                    <figcaption style="font-style: italic;">${caption}</figcaption>
                </div>
                
                <li><strong>Personal Background:</strong> ${personalBackground}</li>
                <li><strong>Professional Background:</strong> ${professionalBackground}</li>
                <li><strong>Academic Background:</strong> ${academicBackground}</li>
                <li><strong>Subject Background:</strong> ${subjectBackground}</li>
                <li><strong>Primary Computer Platform:</strong> ${platform}</li>
                <li><strong>Courses I'm taking & why:</strong></li>
                <ul>
                    ${formattedCourses.map(course => `<li>${course}</li>`).join('')}
                </ul>
                <li><strong>Funny Item to Remember me by:</strong> ${funnyItem}</li>
                <li><strong>I'd also like to Share:</strong> ${additionalShare}</li>
                <li><strong>Do you enjoy coding?</strong> ${enjoyCoding}</li>
                <li><strong>Programming languages you know:</strong> ${Array.from(programmingLanguages).map(lang => lang.value).join(', ')}</li>
            </ul>
        `;

        // Append the results to the form container
        resultsContainer.innerHTML = resultsHTML;
        formContainer.parentNode.insertBefore(resultsContainer, formContainer.nextSibling);
        formContainer.style.display = 'none'; // Hide the form
    }

    function previewUserPhoto() {
        const userPhotoInput = document.getElementById('user-photo');
        const previewImage = document.getElementById('user-photo-preview');

        if (userPhotoInput.files && userPhotoInput.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                previewImage.src = e.target.result;
            };

            reader.readAsDataURL(userPhotoInput.files[0]);
        }
    }

    // Function to validate individual input fields
    function validateInput(input) {
        if (input.value.trim() === '') {
            // If the input value is empty, show a warning message for the corresponding label
            const label = input.closest('label').textContent.split(':')[0];
            alert(`${label} should not be empty.`);
        }
    }
});
