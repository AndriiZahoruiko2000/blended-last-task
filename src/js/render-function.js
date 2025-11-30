export function createTemplateCategory(category) {
  return `<li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
 </li>
`;
}

export function createTemplateCategories(categories) {
  return categories.map(createTemplateCategory).join('');
}

export function createTemplateProduct(product) {
  return `<li class="products__item" data-id="${product.id}">
    <img class="products__image" src="${product.thumbnail}" alt=""/>
    <p class="products__title">${product.title}</p>
    <p class="products__brand">${product.brand}<span class="products__brand--bold">Brand:</span></p>
    <p class="products__category">Category:${product.category} </p>
    <p class="products__price">Price: ${product.price}$</p>
 </li>
`;
}

export function createTemplateProducts(products) {
  return products.map(createTemplateProduct).join('');
}
