document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    // Fix input field issues
    document.querySelector('input[type="text"][name="homeAddress"]').setAttribute('type', 'text');
    document.querySelector('input[type="tel"][name="phoneNumber"]').setAttribute('type', 'tel');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            homeAddress: document.getElementById('homeAddress').value,
            phoneNumber: document.getElementById('phoneNumber').value,
            course: document.getElementById('course').value,
        };

        console.log('Form Data:', formData);

        // Use fetch API to post the data to JSON Server
        fetch('http://localhost:3000/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Registration successful!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });

        // Example of adding a new item to the page
        const container = document.createElement('div');
        container.className = 'item';
        container.textContent = `Registered: ${formData.name} - ${formData.course}`;
        document.body.appendChild(container);
    });

    // Example of dynamically adding more items based on the form data or other actions
    // You can modify this part to add items as needed
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Item';
    addButton.addEventListener('click', function() {
        const newItem = document.createElement('div');
        newItem.className = 'item';
        newItem.textContent = 'New Dynamic Item';
        document.body.appendChild(newItem);
    });
    document.body.appendChild(addButton);
});
