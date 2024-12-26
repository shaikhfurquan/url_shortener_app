document.getElementById('shortenerBtn').addEventListener('click', async () => {
    const originalUrl = document.getElementById('originalUrl').value.trim();
    const shortUrl = document.getElementById('shortenerUrl').value.trim();

    if (!originalUrl || !isValidUrl(originalUrl)) {
        alert('Please enter a valid URL');
        return;
    }

    try {
        // Create payload
        const payload = shortUrl ? { originalUrl, shortUrl } : { originalUrl };

        // API call
        const response = await fetch('/shortener', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorData = await response.json();
            if (errorData.message === 'Short URL already exists') {
                alert('The short URL is already in use. Please choose a unique one.');
            } else {
                throw new Error(errorData.message || `HTTP Error ${response.status}`);
            }
            return;
        }

        const data = await response.json();  // Get the data from the API response
        console.log(data);  // Optionally, log the data for debugging

        // Create an anchor element
        const link = document.createElement('a');
        link.href = `${window.location.origin}/${data.shortUrl}`;  // Use the shortUrl from API response
        link.textContent = `Shortened URL: ${window.location.origin}/${data.shortUrl}`; // Set the text content

        // Set the link to open in a new tab
        link.target = '_blank';

        // Append the anchor element to the result container
        document.getElementById('result').innerHTML = '';
        document.getElementById('result').appendChild(link);

        // Using the short URL in the GET request
        const encodedShortUrl = encodeURIComponent(data.shortUrl);
        // console.log(encodedShortUrl, "encoded short");

        // If you want to make a GET request with the encoded short URL:
        const redirectResponse = await fetch(`${window.location.origin}/api/${encodedShortUrl}`);
        console.log(redirectResponse);
        if (!redirectResponse.ok) {
            throw new Error('Failed to retrieve original URL');
        }

        // You can either redirect to the original URL or show it in a message
        const redirectData = await redirectResponse.json();
        // console.log('Redirected to original URL:', redirectData.originalUrl);

    } catch (error) {
        console.error('Error while shortening URL:', error.message);
        // alert(`Error while shortening URL: ${error.message}`);
    }
});

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch {
        return false;
    }
}
