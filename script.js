function submitform() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    if (name && email && phone) {
        // ✅ Added spaces and better message formatting
        document.getElementById('confirmation').innerText =
            'Thank you, ' + name + '! You have successfully registered.';
        
        console.log('Registration details:', {
            Name: name,
            Email: email,
            Phone: phone
        });
    } else {
        alert("Please enter all the details.");
    }
}
