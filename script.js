window.onload = function() {
    generateCaptcha();
};

function generateCaptcha() {
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var captchaLength = 5;
    var captcha = '';
    
    for (var i = 0; i < captchaLength; i++) {
        var index = Math.floor(Math.random() * letters.length);
        captcha += letters[index];
    }
    var generatedCaptcha = document.getElementById('generatedCaptcha');
    generatedCaptcha.innerText = captcha;
}

document.getElementById('resultForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Check if captcha matches
    var userCaptcha = document.getElementById('securityPin').value;
    var generatedCaptcha = document.getElementById('generatedCaptcha').innerText;

    if (userCaptcha === generatedCaptcha) {
        // Redirect button
        var redirectButton = document.createElement('a');
        redirectButton.href = 'https://i.imghippo.com/files/hgXrj1714828828.jpg';
        redirectButton.textContent = 'Redirect';
        redirectButton.style.display = 'none';
        document.body.appendChild(redirectButton);
        redirectButton.click();
    } else {
        alert('Incorrect Captcha! Please try again.');
    }
});