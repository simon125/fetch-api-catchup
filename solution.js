fetch("https://dummyjson.com/products?limit=10")
  .then((res) => res.json())
  .then((data) => {
    const $tbody = document.getElementById("product-output");
    $tbody.innerHTML = data.products
      .map(
        (product) => `
            <tr>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>${product.stock}</td>
                <td>${product.category}</td>
                <td><button>See product</button></td>
            </tr>
            `
      )
      .join("");
  });

document.getElementById("add-product").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const { title, stock, price } = Object.fromEntries(formData);

  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      stock,
      price,
    }),
  })
    .then((res) => res.json())
    .then(console.log);
});

document
  .getElementById("update-product")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { id, title, stock, price } = Object.fromEntries(formData);

    fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        stock,
        price,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  });

document
  .getElementById("update-product")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { id, title, stock, price } = Object.fromEntries(formData);

    fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        stock,
        price,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  });

document
  .getElementById("elements-to-delete")
  .addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const id = event.target.getAttribute("data-id");

      fetch(`https://dummyjson.com/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(console.log);
    }
  });
