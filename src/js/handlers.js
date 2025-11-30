import { getCategories, getProducts } from './products-api';
import { refs } from './refs';
import {
  createTemplateCategories,
  createTemplateProducts,
} from './render-function';

export const initialHome = async e => {
  const categories = await getCategories();

  const markup = createTemplateCategories(categories);
  refs.categoryList.innerHTML = markup;

  const products = await getProducts();
  const markupProducts = createTemplateProducts(products.products);
  refs.productsList.innerHTML = markupProducts;
};
