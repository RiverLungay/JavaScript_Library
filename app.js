const save_btn = document.getElementById("save_btn");
const load_books = document.getElementById("load_books");
const div_delete = document.getElementById("div_delete");
const search_title = document.getElementById("search_title");
const search_author = document.getElementById("search_author");
window.onload = function () {
  loadAllBooks();
};
//function for adding books
function addBook(title, author) {
  const library = JSON.parse(localStorage.getItem("library")) || [];
  library.push({ title, author });

  localStorage.setItem("library", JSON.stringify(library));
}
//function for calling books from the local storage
function loadAllBooks() {
  const library1 = JSON.parse(localStorage.getItem("library")) || [];
  //loop for creating element for each item
  library1.forEach((element) => {
    console.log(element);

    const chosen_book = document.createElement("div");
    const info_book = document.createElement("div");
    const div_delete = document.createElement("div");

    chosen_book.className =
      "w-[440px] h-[30px] flex  border-b border-gray-300 mb-1 hover:-translate-y-1  transition  duration-300 ease-in-out ";
    info_book.className =
      "w-[225px] h-[30px]  flex flex-box rounded-sm grid grid-cols-1 ";
    div_delete.className =
      "w-[215px] h-[30px]   flex flex-col items-end justify-center rounded-sm ";

    const newAuthor = document.createElement("p");
    const newTitle = document.createElement("p");
    const newDelete = document.createElement("input");

    newAuthor.className = "text-[10px] font-semibold";
    newTitle.className = "text-[8px] text-gray-500 ";

    newDelete.className =
      "h-[25px] w-[45px] border border-gray-500 rounded-sm  text-[10px] p-1  font-bold bg-red-500 hover:bg-red-700 transition  duration-300 ease-in-out text-white  ";

    newDelete.value = "DELETE";
    newDelete.type = "submit";
    newAuthor.textContent = element.author;
    newTitle.textContent = element.title;

    newDelete.addEventListener("click", function () {
      console.log(element.title);
      console.log(element.author);

      deleteBook(element.title, element.author);
      load_books.innerHTML = "";

      loadAllBooks();
    });

    info_book.append(newAuthor);
    info_book.append(newTitle);
    div_delete.append(newDelete);
    chosen_book.append(info_book);
    chosen_book.append(div_delete);
    load_books.append(chosen_book);
  });
}
//Action Listener of the save button
save_btn.addEventListener("click", function () {
  const book_title = document.getElementById("bookTitle");
  const book_author = document.getElementById("bookAuthor");

  addBook(book_title.value, book_author.value);

  book_title.value = "";
  book_author.value = "";

  search_title.value = "";
  search_author.value = "";
  load_books.innerHTML = "";

  loadAllBooks();
});
//text listener for searching book title
search_title.addEventListener("input", function () {
  const results = searchBooks({
    title: this.value,
    author: search_author.value,
  });
  load_books.innerHTML = "";
  //loop for creating element for each item
  results.forEach((element) => {
    console.log(element);

    const chosen_book = document.createElement("div");
    const info_book = document.createElement("div");
    const div_delete = document.createElement("div");

    chosen_book.className =
      "w-[440px] h-[30px] flex  border-b border-gray-300 mb-1 hover:-translate-y-1  transition  duration-300 ease-in-out";
    info_book.className =
      "w-[225px] h-[30px]  flex flex-box rounded-sm grid grid-cols-1";
    div_delete.className =
      "w-[215px] h-[30px]   flex flex-col items-end justify-center rounded-sm ";

    const newAuthor = document.createElement("p");
    const newTitle = document.createElement("p");
    const newDelete = document.createElement("input");

    newAuthor.className = "text-[10px] font-semibold";
    newTitle.className = "text-[8px] text-gray-500 ";

    newDelete.className =
      "h-[25px] w-[45px] border border-gray-500 rounded-sm  text-[10px] p-1  font-bold bg-red-500 hover:bg-red-700 transition  duration-300 ease-in-out text-white  ";

    newDelete.value = "DELETE";

    newDelete.type = "submit";

    newAuthor.textContent = element.author;
    newTitle.textContent = element.title;

    newDelete.addEventListener("click", function () {
      console.log(element.title);
      console.log(element.author);

      deleteBook(element.title, element.author);
      load_books.innerHTML = "";

      searchSpecific();
    });
    info_book.append(newAuthor);
    info_book.append(newTitle);
    div_delete.append(newDelete);
    chosen_book.append(info_book);
    chosen_book.append(div_delete);
    load_books.append(chosen_book);
  });
});
//text listener for searching book author
search_author.addEventListener("input", function () {
  const results = searchBooks({
    title: search_title.value,
    author: this.value,
  });
  load_books.innerHTML = "";
  //loop for creating element for each item
  results.forEach((element) => {
    console.log(element);

    const chosen_book = document.createElement("div");
    const info_book = document.createElement("div");
    const div_delete = document.createElement("div");

    chosen_book.className =
      "w-[440px] h-[30px] flex  border-b border-gray-300 mb-1 hover:-translate-y-1  transition  duration-300 ease-in-out";
    info_book.className =
      "w-[225px] h-[30px]  flex flex-box rounded-sm grid grid-cols-1";
    div_delete.className =
      "w-[215px] h-[30px]   flex flex-col items-end justify-center rounded-sm ";

    const newAuthor = document.createElement("p");
    const newTitle = document.createElement("p");
    const newDelete = document.createElement("input");

    newAuthor.className = "text-[10px] font-semibold";
    newTitle.className = "text-[8px] text-gray-500 ";

    newDelete.className =
      "h-[25px] w-[45px] border border-gray-500 rounded-sm  text-[10px] p-1  font-bold bg-red-500 hover:bg-red-700 transition  duration-300 ease-in-out text-white  ";

    newDelete.value = "DELETE";
    newDelete.type = "submit";
    newAuthor.textContent = element.author;
    newTitle.textContent = element.title;

    newDelete.addEventListener("click", function () {
      console.log(element.title);
      console.log(element.author);

      deleteBook(element.title, element.author);
      load_books.innerHTML = "";

      searchSpecific();
    });
    info_book.append(newAuthor);
    info_book.append(newTitle);
    div_delete.append(newDelete);
    chosen_book.append(info_book);
    chosen_book.append(div_delete);
    load_books.append(chosen_book);
  });
});
//function for searching a book based from the input text from the local storage
function searchBooks({ title = "", author = "" }) {
  const library = JSON.parse(localStorage.getItem("library")) || [];

  return library.filter((book) => {
    const titleMatch = title
      ? book.title.toLowerCase().includes(title.toLowerCase())
      : true;
    const authorMatch = author
      ? book.author.toLowerCase().includes(author.toLowerCase())
      : true;
    return titleMatch && authorMatch;
  });
}
//function for deleting a book from the local storage
function deleteBook(title, author) {
  let library = JSON.parse(localStorage.getItem("library")) || [];

  library = library.filter(
    (book) =>
      book.title.toLowerCase() !== title.toLowerCase() ||
      book.author.toLowerCase() !== author.toLowerCase()
  );

  localStorage.setItem("library", JSON.stringify(library));
}
//function for searching books that is related to the search after its similar book is deleted
function searchSpecific() {
  const results = searchBooks({
    title: search_title.value,
    author: search_author.value,
  });
  load_books.innerHTML = "";
  //creating elements for each item
  results.forEach((element) => {
    console.log(element);

    const chosen_book = document.createElement("div");
    const info_book = document.createElement("div");
    const div_delete = document.createElement("div");

    chosen_book.className =
      "w-[440px] h-[30px] flex  border-b border-gray-300 mb-1 hover:-translate-y-1  transition  duration-300 ease-in-out";
    info_book.className =
      "w-[225px] h-[30px]  flex flex-box rounded-sm grid grid-cols-1";
    div_delete.className =
      "w-[215px] h-[30px]   flex flex-col items-end justify-center rounded-sm ";

    const newAuthor = document.createElement("p");
    const newTitle = document.createElement("p");
    const newDelete = document.createElement("input");

    newAuthor.className = "text-[10px] font-semibold";
    newTitle.className = "text-[8px] text-gray-500 ";

    newDelete.className =
      "h-[25px] w-[45px] border border-gray-500 rounded-sm  text-[10px] p-1  font-bold bg-red-500 hover:bg-red-700 transition  duration-300 ease-in-out text-white  ";

    newDelete.value = "DELETE";

    newDelete.type = "submit";

    newAuthor.textContent = element.author;
    newTitle.textContent = element.title;

    newDelete.addEventListener("click", function () {
      console.log(element.title);
      console.log(element.author);

      deleteBook(element.title, element.author);
      load_books.innerHTML = "";

      searchSpecific();
    });
    info_book.append(newAuthor);
    info_book.append(newTitle);
    div_delete.append(newDelete);
    chosen_book.append(info_book);
    chosen_book.append(div_delete);
    load_books.append(chosen_book);
  });
}
