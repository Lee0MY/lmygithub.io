let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if( mySrc === 'images/firefox-icon.jpeg'){
        myImage.setAttribute('src', 'images/firefox-icon2.jpg');
    }
    else{
        myImage.setAttribute('src', 'images/firefox-icon.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName || myName === null) {
        myHeading.textContent = 'Mozilla 酷毙了';
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
    
}

if( localStorage.getItem('name') ){
    setUserName();
}else{
    // let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了';
}

myButton.onclick = function() {
    setUserName();
}