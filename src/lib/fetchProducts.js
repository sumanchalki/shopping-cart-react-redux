export function fetchProducts() {
  return fetch("/data/ProductData.json")
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      return json.Products;
    });
}

export function fetchProductDetails(id) {
  return fetch("/data/ProductData.json")
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      return json.Products.filter(product => {
        if (product.Id === id) {
          return true;
        }
        else {
          return false;
        }
      });
    });
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
