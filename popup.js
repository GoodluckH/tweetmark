// Get the bookmarks from storage
chrome.storage.local.get("bookmarks", function (result) {
  const bookmarks = result.bookmarks || [];
  const bookmarksList = document.getElementById("bookmarks");
  // Iterate over each bookmark and add it to the list
  bookmarks.forEach((bookmark) => {
    const li = document.createElement("li");
    li.innerHTML = `<h3>${bookmark.text}</h3><p>${bookmark.user}</p><p>${bookmark.date}</p>`;
    bookmarksList.appendChild(li);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var exportButton = document.getElementById("export-csv");

  exportButton.addEventListener("click", function () {
    chrome.storage.local.get("bookmarks", function (result) {
      const bookmarks = result.bookmarks || [];
      const csv = bookmarks.map((bookmark) => {
        return `${bookmark.date},${bookmark.user},"${bookmark.text}"`;
      });
      const csvContent = "data:text/csv;charset=utf-8," + csv.join("\n");
      var encodedUri = encodeURI(csvContent);
      window.open(encodedUri);
    });
  });
});
