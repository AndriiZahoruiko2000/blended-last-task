export function createTemplateCategory(category) {
  return `<li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
 </li>
`;
}

export function createTemplateCategories(categories) {
  return categories.map(createTemplateCategory).join('');
}
