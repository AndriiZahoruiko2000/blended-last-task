import { getCategories } from './products-api';
import { refs } from './refs';
import { createTemplateCategories } from './render-function';

export const initialHome = async e => {
  const categories = await getCategories();
  console.log(categories);

  const markup = createTemplateCategories(categories);
  refs.categoryList.innerHTML = markup;
};
