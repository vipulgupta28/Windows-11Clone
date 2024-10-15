const boxy  = document.getElementById('box');
const dropdown = document.getElementById('myDropdown');
const SystemIn  = document.getElementById('SystemInbuilt');
const Myimage = document.getElementById('image');
const starting = document.getElementById('start');
const Internet = document.getElementById('chrome');
const MySpotify = document.getElementById('spotify');
const content = document.getElementById('content');


document.getElementById('startButton').addEventListener('click', function() {
    var startMenu = document.getElementById('startMenu');
    if (startMenu.style.display == 'none' || startMenu.style.display == '') {
        startMenu.style.display = 'block';
    } else {
        startMenu.style.display = 'none';
    }
});

// Optional: Hide the start menu when clicking outside of it
document.addEventListener('click', function(event) {
    var startButton = document.getElementById('startButton');
    var startMenu = document.getElementById('startMenu');
    if (!startButton.contains(event.target) && !startMenu.contains(event.target)) {
        startMenu.style.display = 'none';
    }
});



document.getElementById('class').addEventListener('click', function() {
    var right = document.getElementById('right-bar');
    if (right.style.display === 'none' || right.style.display === '') {
        right.style.display = 'block';
    } else {
        right.style.display = 'none';
    }
});


// document.addEventListener('click', function(event) {
//     var classy = document.getElementById('class');
//     var right = document.getElementById('right');
//     if (!classy.contains(event.target) && !right.contains(event.target)) {
//         right.style.display = 'none';
//     }
// });


function updateSlider(value) {
    const sliderFill = document.getElementById('sliderFill-1');
    sliderFill.style.width = value + '%';
}

function updateSlider2(value) {
    const sliderFill = document.getElementById('sliderFill-2');
    sliderFill.style.width = value + '%';
}



document.querySelector('#screensharing').addEventListener('mouseenter', () => {
    const multiple = document.querySelector('.multiple');
    multiple.style.display = 'block';
});

document.querySelector('#screensharing').addEventListener('mouseleave', () => {
    const multiple = document.querySelector('.multiple');
    multiple.style.display = 'none';
});



document.querySelector('#display-content-view').addEventListener('mouseenter', () => {
    document.querySelector('.display-content-view').style.display = 'block';
});

document.querySelector('#display-content-view').addEventListener('mouseleave', () => {
    document.querySelector('.display-content-view').style.display = 'none';
});


document.querySelector('#display-content-sort').addEventListener('mouseenter', () => {
    document.querySelector('.display-content-sort').style.display = 'block';
});

document.querySelector('#display-content-sort').addEventListener('mouseleave', () => {
    document.querySelector('.display-content-sort').style.display = 'none';
});


document.querySelector('#display-content-new').addEventListener('mouseenter', () => {
    document.querySelector('.display-content-new').style.display = 'block';
});

document.querySelector('#display-content-new').addEventListener('mouseleave', () => {
    document.querySelector('.display-content-new').style.display = 'none';
});

MySpotify.addEventListener('click', function(){
    window.open("https://www.spotify.com","myPcWindow", "width=800,height=600,resizable=yes");
});

Internet.addEventListener('click', function(){
    window.open("https://www.google.com","myPcWindow", "width=800,height=600,resizable=yes");
});

starting.addEventListener('click',function(event){
    event.preventDefault();

    const x = event.clientX;
    const y = event.clientY;

    starting.style.left = `${x}px`;
    starting.style.top = `${y}px`;
    starting.style.display = 'block';
});

Myimage.addEventListener('dblclick', function(){
    window.open("myPc.html", "myPcWindow", "width=800,height=600,resizable=yes");
});

document.getElementById('calci').addEventListener('click', function(){
    window.open("calci.html","myPcWindow", "width=800,height=600,resizable=yes");
});

document.getElementById('mines').addEventListener('click', function(){
    window.open("mines.html","myPcWindow", "width=800,height=600,resizable=yes");
});

document.getElementById('to-do').addEventListener('click', function(){
    window.open("todo.html","myPcWindow", "width=800,height=600,resizable=yes");
});


document.getElementById('calender').addEventListener('click', function(){
    window.open("calender.html","myPcWindow", "width=800,height=600,resizable=yes");
});

document.getElementById('games').addEventListener('click', function(){
    window.open("chef's kiss.html","myPcWindow", "width=800,height=600,resizable=yes");
});

document.getElementById('amazon').addEventListener('click', function() {
    window.open("https://www.amazon.com", "myPcWindow", "width=800,height=600,resizable=yes");
});


document.getElementById('edge').addEventListener('click', function() {
    window.open("https://www.microsoft.com", "myPcWindow", "width=800,height=600,resizable=yes");
});

document.getElementById('stopwatch').addEventListener('click', function() {
    window.open("stopwatch.html", "myPcWindow", "width=800,height=600,resizable=yes");
});


document.getElementById('text-editor').addEventListener('click', function() {
    window.open("text-editor.html", "myPcWindow", "width=800,height=600,resizable=yes");
});


document.getElementById('language').addEventListener('click', function() {
    window.open("language.html", "myPcWindow", "width=800,height=600,resizable=yes");
});

document.getElementById('folder').addEventListener('dblclick', function() {
    window.open("chef's kiss.html", "myPcWindow", "width=800,height=600,resizable=yes");
});

document.getElementById('file-explorer').addEventListener('click', function() {
    window.open("home.html", "myPcWindow", "width=800,height=600,resizable=yes");
});

document.getElementById('refresh').addEventListener('click', function() {
    location.reload(); 
});


document.getElementById('store').addEventListener('click', function() {
    window.open("https://apps.microsoft.com", "myPcWindow", "width=800,height=600,resizable=yes");
});

Myimage.addEventListener('contextmenu',function(event){
    event.preventDefault();

    const x = event.clientX;
    const y = event.clientY;

    SystemIn.style.left = `${x}px`;
    SystemIn.style.top = `${y}px`;
    SystemIn.style.display = 'block';
});

boxy.addEventListener('contextmenu', function(event) {
    event.preventDefault();

    const dropdownWidth = dropdown.offsetWidth;
    const windowWidth = boxy.innerWidth;

    let x = event.clientX + 2;
    let y = event.clientY + 2;

    // Check if there's enough space to the right
    if (x + dropdownWidth > windowWidth) {
        // Position the dropdown to the left of the click
        x = event.clientX - dropdownWidth - 2;
    }

    dropdown.style.left = `${x}px`;
    dropdown.style.top = `${y}px`;
    dropdown.style.display = 'block';
});

document.addEventListener('click', function(event) {
    if (boxy.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});


function updateDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;

    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = formattedDate;
    
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display the date and time immediately
updateDateTime();






document.getElementById('newFolder').addEventListener('click', function() {
    const My = document.getElementById('my');

    const newImage = document.createElement('img');
    newImage.src = './icons8-folder-48 (2).png'; 
    newImage.alt = 'Placeholder Image';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Enter folder name';

    My.appendChild(newImage);
    My.appendChild(nameInput);
});


document.getElementById('large').addEventListener('click', function() {
    changeIconSize('large');
});

document.getElementById('medium').addEventListener('click', function() {
    changeIconSize('medium');
});

document.getElementById('small').addEventListener('click', function() {
    changeIconSize('small');
});

function changeIconSize(size) {
    const icons = document.querySelectorAll('.image');
    icons.forEach(icon => {
        icon.classList.remove('large', 'medium', 'small');
        if (size !== 'medium') {  // Medium is default size, so no need to add a class for it
            icon.classList.add(size);
        }
    });
}


