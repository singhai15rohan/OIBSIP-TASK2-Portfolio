
    document.getElementById('downloadLink').addEventListener('click', function(event) {
        // Prevent the default behavior of the link
        event.preventDefault();

        // Get the href attribute of the link
        var pdfUrl = this.getAttribute('href');

        // Use JavaScript to trigger the download
        fetch(pdfUrl)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                // Set the filename for the download
                a.download = 'Rohan_Resume.pdf';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => console.error('Error:', error));
    });
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Display the "thank you" message
        document.getElementById("thankYouMessage").style.display = "block";

        // Optional: Hide the form after submission
        document.getElementById("contactForm").style.display = "none";
    });