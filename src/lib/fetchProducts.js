export function fetchProducts() {
  return fetch("/data/ProductData.json")
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      return json.Products;
    });
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
