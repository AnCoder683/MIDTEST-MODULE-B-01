const highlightKeyword = function (content, keyword) {
  const highLight = `<strong>${keyword}</strong>`;
  return content.replace(new RegExp(keyword, "gi"), highLight);
};

console.log(
  highlightKeyword(
    "Học JavaScript không khó, Học javascript khó đã có CodeFarm lo,CodeFarm - Học là có việc!",
    "javascript",
  ),
);
