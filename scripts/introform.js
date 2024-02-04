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
        // Add validation logic for each input field
        const photo = document.getElementById('user-photo').value;
        const caption = document.getElementById('photocaption').value;
        const name = document.getElementById('fullname').value;

        // You can add more validation rules as needed
        if (photo === '' || caption === '' || name === '') {
            alert('Please fill out all required fields.');
            return false;
        }

        return true;
    }

    function displayResults() {
        const resultsContainer = document.getElementById('results-container');
    
        // Get values from the form
        const name = document.getElementById('fullname').value;
        const personalBackground = document.getElementById('personalbackgroung').value;
        const professionalBackground = document.getElementById('probackgroung').value;
        const academicBackground = document.getElementById('acabackgroung').value;
        const subjectBackground = document.getElementById('subbackgroung').value;
        const platform = document.getElementById('platform').value;
        const courses = document.getElementById('coursebackgroung').value;
        const funnyItem = document.getElementById('funny').value;
        const enjoyCoding = document.querySelector('input[name="enjoycoding"]:checked').value;
        const programmingLanguages = document.querySelectorAll('input[name="programinglanguages"]:checked');
        const userPhoto = document.getElementById('user-photo').files[0];
        const caption = document.getElementById('photocaption').value; // Added line
    
        // Build the results HTML
        const resultsHTML = `
            <h2>Submitted Information</h2>
            <img src="${URL.createObjectURL(userPhoto)}" alt="User Photo"> <!-- Moved image tag here -->
            <p><strong>Caption:</strong> ${caption}</p> <!-- Added line -->
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Personal Background:</strong> ${personalBackground}</p>
            <p><strong>Professional Background:</strong> ${professionalBackground}</p>
            <p><strong>Academic Background:</strong> ${academicBackground}</p>
            <p><strong>Subject Background:</strong> ${subjectBackground}</p>
            <p><strong>Platform:</strong> ${platform}</p>
            <p><strong>Courses:</strong> ${courses}</p>
            <p><strong>Funny Item:</strong> ${funnyItem}</p>
            <p><strong>Enjoy Coding:</strong> ${enjoyCoding}</p>
            <p><strong>Programming Languages:</strong> ${Array.from(programmingLanguages).map(lang => lang.value).join(', ')}</p>
        `;
    
        // Replace the form with the results on the page
        resultsContainer.innerHTML = resultsHTML;
        document.getElementById('form-cont').style.display = 'none';
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
