const userInput = document.getElementById('userInput');
const submitButton = document.getElementById('submitButton');
const outputContainer = document.getElementById('outputContainer');


function getTask(){
    const paragraph = document.createElement('p');
    outputContainer.appendChild(paragraph);
    paragraph.innerHTML = userInput.value;
    paragraph.style.textAlign = 'center';
    paragraph.style.color = 'white';
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })

};

submitButton.addEventListener('click', getTask);








