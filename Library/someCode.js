let library = [];

function Book(author, title, pages, readStatus) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.hasRead = function () {
      return readStatus;
    });
}

function getInformation() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").value;
  const myNewBook = new Book(author, title, pages, read);
  library.push(myNewBook);
  
  document.querySelector(".namesOfBooks").innerHTML = "";

  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    const titleDisplay = document.createElement("li");
    titleDisplay.textContent = book.title;
    document.querySelector(".namesOfBooks").append(titleDisplay);

    const div = document.createElement("div");
    div.classList.add("info");
    div.innerHTML = 
    `
      <h1>Book information</h1>
      <h2>Author: <span>${book.author}</span></h2>
      <h2>Title: <span>${book.title}</span></h2>
      <h2>Pages: <span>${book.pages} pages</span></h2>
      <h2>Have you read it? <span> ${book.hasRead()}</span></h2>
    `
    titleDisplay.appendChild(div)
  }
}
document.addEventListener("DOMContentLoaded", function () {
  let btn = document.querySelector(".myForm");
  btn.addEventListener("click", function () {
    let form = document.querySelector("form");
    form.innerHTML = `<label for="author">Author:</label><br/>
      <input type="text" id="author" placeholder="Authour"/><br/>
      
      <label for="title">Title:</label><br/>
      <input type="text" id="title" placeholder="title"/><br/>
      
      <label for="pages">Pages:</label><br/>
      <input type="number" id="pages" placeholder="pages"/><br/>
      
      <label for="read">You read it?:</label><br/>
      <input type="text" id="read" placeholder="read ?"/><br/>
      <br/>
      <button type="submit" id="submit">Add Book</button>
      `;
    btn.style.display = "none";

    document.querySelector("form").onsubmit = function () {
      getInformation();
      document.querySelector("form").innerHTML = "";
      btn.style.display = "block";
      return false;
    };
  });
  document.querySelector("ol").addEventListener("click", function(event) {
    const title = event.target;
    const myDiv = title.querySelector(".info");
    myDiv.classList.toggle("displayeDeactivate");
  });
});
