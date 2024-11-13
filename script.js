document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        let content = button.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

function filterContent() {
    let input = document.getElementById('search').value.toLowerCase();
    document.querySelectorAll('.topic').forEach(topic => {
        let text = topic.innerText.toLowerCase();
        topic.style.display = text.includes(input) ? "" : "none";
    });
}
