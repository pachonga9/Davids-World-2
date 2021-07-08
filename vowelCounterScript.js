const submitButton = document.getElementById('submitButton');
const userInput = document.getElementById('userInput').value;
const outputContainer = document.getElementById('outputContainer');
const vowels = "aeiou";




const doStuff = () => {
    const countVowels = (userInput) => {
        let count = 0;
             for (let letter of userInput.toLowerCase()) {
                if (vowels.includes(letter)) {
                    count++;
        }
    }
        return count;
 }
    const result = countVowels(userInput);
    
    let paragraph = document.createElement('p');
    outputContainer.appendChild(paragraph);
    paragraph.innerHTML = `there are ${result} vowels in your string.`;
    paragraph.style.color = 'white';

    
};

submitButton.addEventListener('click', doStuff); 