let formEl = document.getElementById("submitting");
console.log(formEl);

formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let title = document.getElementById("title").value;
let content = document.getElementById("content").value;

if (!username || title || content) {
    window.alert ('You need to complete the form');
    return;
}
});