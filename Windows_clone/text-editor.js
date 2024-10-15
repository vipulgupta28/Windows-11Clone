document.getElementById('file').addEventListener('click', function() {
    document.getElementById('display-content-file').style.display = 'block';
    document.getElementById('display-content-edit').style.display = 'none';
    document.getElementById('display-content-view').style.display = 'none';
});

document.getElementById('edit').addEventListener('click', function() {
    document.getElementById('display-content-file').style.display = 'none';
    document.getElementById('display-content-edit').style.display = 'block';
    document.getElementById('display-content-view').style.display = 'none';
});

document.getElementById('view').addEventListener('click', function() {
    document.getElementById('display-content-file').style.display = 'none';
    document.getElementById('display-content-edit').style.display = 'none';
    document.getElementById('display-content-view').style.display = 'block';
});

document.addEventListener('click', function(e) {
    if (!e.target.matches('.buttons button')) {
        document.getElementById('display-content-file').style.display = 'none';
        document.getElementById('display-content-edit').style.display = 'none';
        document.getElementById('display-content-view').style.display = 'none';
    }
});
