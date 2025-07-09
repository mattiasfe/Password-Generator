document.getElementById('app').innerHTML;

function mainView(){
    app.innerHTML = /*HTML*/`
        <div id="password-generator">
            <div id="password">
                <input type="text" id="result" value="password" readonly>
                <button id="copy-button">Copy</button>
            </div>
            <label for="password-length">Password Length:</label>
            <input type="range" min="8" max="32" value="8" name="password-length"
            id="password-length" oninput="this.nextElementSibling.value = this.value">
            <output>8</output> 
        </div>
    `;
}