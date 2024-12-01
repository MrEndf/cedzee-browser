
document.getElementById("searchForm").addEventListener("submit", function (event) {
    
    const search = document.getElementById('searchinput').value;
    const link = `https://www.google.com/search?q=${encodeURIComponent(search)}`;
    
    setTimeout(() => {
        window.location.href = link;
    }, 50);

    event.preventDefault();
    return false;
    
});
