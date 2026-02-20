const productContainer = document.getElementById("products");
const errorText = document.getElementById("error");

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";

      div.innerHTML = `
        <h4>${product.title}</h4>
        <img src="${product.image}" alt="${product.title}">
      `;

      productContainer.appendChild(div);
    });
  })
  .catch(() => {
    errorText.textContent = "Error fetching product data.";
  });
