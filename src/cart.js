import { handleBooksCartLoad } from './js/handlers';
import { updateHeaderCounter } from './js/render-function';

document.addEventListener('DOMContentLoaded', handleBooksCartLoad);
document.addEventListener('DOMContentLoaded', updateHeaderCounter);
refs.books.addEventListener('click', handleBookClick);
