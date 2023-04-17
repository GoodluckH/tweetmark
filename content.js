setTimeout(() => {
  const bookmarkElements = document.querySelectorAll('[data-testid="tweet"]');

  const bookmarks_array = [];
  bookmarkElements.forEach((element) => {
    bookmarks_array.push({
      user: element
        .querySelector('[data-testid="User-Name"] a')
        .getAttribute("href")
        .replace("/", "@"),
      text: element
        .querySelector('[data-testid="tweetText"]')
        .textContent.trim(),
      date: element.querySelector("time").getAttribute("datetime"),
    });
  });
  console.log(bookmarks_array);
  chrome.storage.local.set({ bookmarks: bookmarks_array });
}, 3000);
