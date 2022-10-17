hideStartElement('test', 'startRules');
multiplyElement('directionIcon', 'scene');

function toggleBoxHandler (id) {
    const button = document.getElementById(id);
    let isToggled = button.style.display;
    const dispplayInfo = button.style.display
    if (isToggled === '') {
        button.style.display = 'none';
    } else {
        button.style.opacity = 1;
        button.style.display = '';
    }
}

function hideElement (e) {
    e.parentNode.style.display = 'none';
}

function hideStartElement(nameId, fatherNameId) {
    
    setTimeout(() => {
        const element = document.getElementById(nameId);
        element.style.opacity = 0;        
    } , 2000)

    setTimeout(() => {
        const element = document.getElementById(nameId);
        const fatherElement = document.getElementById(fatherNameId);
        fatherElement.style.display = 'none';
        element.style.opacity = 1;        
    } , 4000)

}

function multiplyElement (elementNameId, fatherNameId) {
    const element = document.getElementById(elementNameId);
    for (var i = 0; i <= 5; i++) {
        const newElement = element.cloneNode();
        newElement.id = `${elementNameId}Clone${i}`;
        newElement.position = `${i * 2 + 2} 0.5 4.5`;
        fatherNameId.appendChild(newElement)
    }
}