let formEl = document.getElementById("submitting");
console.log(formEl);
let listBlog = []

let insideLocal = JSON.parse(localStorage.getItem("Blog"));
console.log(insideLocal);
if(insideLocal) {
    listBlog = insideLocal
}

formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let title = document.getElementById("title").value;
let content = document.getElementById("content").value;

if (!username || title || content) {
    window.alert ('You need to complete the form');
    return;
}
let inputData = {
    username, title, content
}
listBlog.push(inputData);
console.log(listBlog);

localStorage.setItem("Blogs", JSON.stringify(listBlog));

});