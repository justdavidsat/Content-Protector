// Function to perform text protection when the "Protect Now" button is clicked
function protect() {
    // Get input values from the form fields
    const originalText = document.getElementById('originalText').value; // Get the value of the original text from the textarea
    const wordsToHide = document.getElementById('wordsToScramble').value.split(' '); // Get the words to be hidden and split them into an array
    const replacementChars = document.getElementById('replacementChars').value; // Get the replacement characters from the input field

    // Initialize variables to track protection statistics
    let protectedText = originalText; // Set the initial protected text to the original text
    let stats = {
        wordsScanned: 0, // Initialize the number of words scanned
        wordsHidden: 0, // Initialize the number of words hidden
        charsHidden: 0, // Initialize the number of characters hidden
    };

    // Iterate through each word to be hidden
    wordsToHide.forEach(word => {
        // Create a regular expression to match the word globally and case-insensitively
        const regex = new RegExp('\\b' + word + '\\b', 'gi');
        // Replace matched words with the specified replacement characters
        protectedText = protectedText.replace(regex, match => {
            // Update protection statistics
            stats.wordsHidden++; // Increment the number of words hidden
            stats.charsHidden += match.length; // Add the length of the matched word to the total characters hidden
            return replacementChars; // Return the replacement characters for the matched word
        });
    });

    // Count the total number of words in the original text
    stats.wordsScanned = originalText.split(/\s+/).length;

    // Display the protected text and statistics on the webpage
    document.getElementById('protectedText').textContent = protectedText; // Display the protected text
    document.getElementById('stats').innerHTML = `
        <p>Words Scanned: ${stats.wordsScanned}</p>
        <p>Words Hidden: ${stats.wordsHidden}</p>
        <p>Chars Hidden: ${stats.charsHidden}</p>
    `; // Display the protection statistics
}
