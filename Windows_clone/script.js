let currentStorage = 0;
const maxStorage = 100;

const cross = document.getElementById('cross');

cross.addEventListener('click',function(){
    window.location.href = "index.html";

});

document.getElementById('mines').addEventListener('dblclick', function(){
    window.open("mines.html","myPcWindow", "width=800,height=600,resizable=yes");
});

document.getElementById('snake').addEventListener('click', function(){
    window.open("snake.html","myPcWindow", "width=800,height=600,resizable=yes");
});

function addItem() {
    if (currentStorage < maxStorage) {
        currentStorage += 1;  // Increase the storage by 10 units
        updateStorageBar();
    } else {
        alert('Storage is full!');
    }
}

function updateStorageBar() {
    const storageBar = document.getElementById('storageBar');
    storageBar.style.width = `${(currentStorage / maxStorage) * 100}%`;
}

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-list li');
   
    });

    const mines = document.getElementById('mines');

mines.addEventListener('dblclick', function(){
    window.location.href = "mines.html";

});

const navItems = document.querySelectorAll('.nav-list li');

    // Loop through the items and add a click event listener
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove the 'active' class from all items
            navItems.forEach(i => i.classList.remove('active'));

            // Add the 'active' class to the clicked item
            this.classList.add('active');
        });
    });