
const colorPicker = document.getElementById('colorPicker');
const fontSizeInput = document.getElementById('fontSize');
const fontFamilySelect = document.getElementById('fontFamily');
const paragraph = document.getElementById('paragraph');


function updateColor() {
    paragraph.style.color = colorPicker.value;
}

function updateFontSize() {
    paragraph.style.fontSize = fontSizeInput.value + 'px';
}

function updateFontFamily() {
    paragraph.style.fontFamily = fontFamilySelect.value;
}


colorPicker.addEventListener('input', updateColor);
fontSizeInput.addEventListener('input', updateFontSize);
fontFamilySelect.addEventListener('change', updateFontFamily);