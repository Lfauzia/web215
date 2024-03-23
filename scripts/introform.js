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

    function validateForm() {
        // my validation logic for each input field
        const photo = document.getElementById('user-photo').value;
        const caption = document.getElementById('photocaption').value;
        const name = document.getElementById('fullname').value;

        // more validation rules 
        if (photo === '' || caption === '' || name === '') {
            alert('Please fill out all required fields.');
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
        const personalBackground = document.getElementById('personalbackgroung').value;
        const professionalBackground = document.getElementById('probackgroung').value;
        const academicBackground = document.getElementById('acabackgroung').value;
        const subjectBackground = document.getElementById('subbackgroung').value;
        const platform = document.getElementById('platform').value;
        const coursesRaw = document.getElementById('coursebackgroung').value;
        const coursesList = coursesRaw.split(',').map(course => course.trim()); // Split courses and trim whitespace
        const funnyItem = document.getElementById('funny').value;
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
                    <img src="${URL.createObjectURL(userPhoto)}" alt="User Photo" style="display: block; margin: 0 auto; width: 250px;">
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

    
});
