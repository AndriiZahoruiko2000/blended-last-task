import"./assets/styles-JE8YjOlG.js";import{a as c}from"./assets/vendor-N5iQpiFS.js";const r="https://dummyjson.com/products";//!================================================
async function d(){const o=r+"/category-list",s={};return(await c.get(o,{params:s})).data}//!================================================
async function l(t=1){const s=r+"",e={limit:12,skip:(t-1)*12};return(await c.get(s,{params:e})).data}//!================================================
async function u(t){const o=`/category/${t}`,s=r+o,e={};return(await c.get(s,{params:e})).data}//!================================================
async function p(t){const o=`/${t}`,s=r+o,e={};return(await c.get(s,{params:e})).data}const n={categoryList:document.querySelector(".categories"),productsList:document.querySelector(".products"),divModal:document.querySelector(".modal"),divModalProduct:document.querySelector(".modal-product")};function m(t){return`<li class="categories__item">
   <button class="categories__btn" type="button">${t}</button>
 </li>
`}function g(t){return t.map(m).join("")}//!================================================
function y(t){return`<li class="products__item" data-id="${t.id}">
    <img class="products__image" src="${t.thumbnail}" alt=""/>
    <p class="products__title">${t.title}</p>
    <p class="products__brand">${t.brand}<span class="products__brand--bold">Brand:</span></p>
    <p class="products__category">Category:${t.category} </p>
    <p class="products__price">Price: ${t.price}$</p>
 </li>
`}function i(t){return t.map(y).join("")}//!================================================
function _(t){return`<img class="modal-product__img" src="${t.images[0]}" alt="" />
      <div class="modal-product__content">
        <p class="modal-product__title">${t.title}</p>
        <ul class="modal-product__tags">${t.tags}</ul>
        <p class="modal-product__description">${t.description}</p>
        <p class="modal-product__shipping-information">Shipping:${t.shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy:${t.returnPolicy}</p>
        <p class="modal-product__price">Price: ${t.price}</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`}//!================================================
const P=async t=>{const o=await d();o.unshift("All");const s=g(o);n.categoryList.innerHTML=s;const e=await l(),a=i(e.products);n.productsList.innerHTML=a};//!================================================
const L=async t=>{if(t.target.nodeName!=="BUTTON")return;const o=t.target.textContent,s=await u(o),e=i(s.products);n.productsList.innerHTML=e};//!================================================
const $=async t=>{const o=t.target.closest("li");if(!o)return;const s=o.dataset.id,e=await p(s),a=_(e);n.divModalProduct.innerHTML=a,n.divModal.classList.add("modal--is-open")};document.addEventListener("DOMContentLoaded",P);n.categoryList.addEventListener("click",L);n.productsList.addEventListener("click",$);
//# sourceMappingURL=index.js.map
