const categories = [
  { id: 1, name: "Chuyên mục 1" },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      { id: 4, name: "Chuyên mục 2.1" },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          { id: 10, name: "Chuyên mục 2.2.1" },
          { id: 11, name: "Chuyên mục 2.2.2" },
          { id: 12, name: "Chuyên mục 2.2.3" },
        ],
      },
      { id: 6, name: "Chuyên mục 2.3" },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      { id: 7, name: "Chuyên mục 3.1" },
      { id: 8, name: "Chuyên mục 3.2" },
      { id: 9, name: "Chuyên mục 3.3" },
    ],
  },
];

const result = function (categories, level = 0) {
  let html = "";
  for (const category of categories) {
    let phanCap = "|--".repeat(level);
    html += `<option value="${category.id}">${phanCap}${category.name}</option>`;
    if (category.children) {
      html += result(category.children, level + 1);
    }
  }
  return html;
};

const content = result(categories);
document.write(content);
