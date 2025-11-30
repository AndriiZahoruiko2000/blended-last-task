import"./assets/styles-JE8YjOlG.js";import{a as r}from"./assets/vendor-N5iQpiFS.js";const c="https://dummyjson.com/products";async function i(){const s=c+"/category-list",e={};return(await r.get(s,{params:e})).data}async function u(t=1){const e=c+"",a={limit:12,skip:(t-1)*12};return(await r.get(e,{params:a})).data}const o={categoryList:document.querySelector(".categories"),productsList:document.querySelector(".products")};function p(t){return`<li class="categories__item">
   <button class="categories__btn" type="button">${t}</button>
 </li>
`}function d(t){return t.map(p).join("")}function l(t){return`<li class="products__item" data-id="${t.id}">
    <img class="products__image" src="${t.thumbnail}" alt=""/>
    <p class="products__title">${t.title}</p>
    <p class="products__brand">${t.brand}<span class="products__brand--bold">Brand:</span></p>
    <p class="products__category">Category:${t.category} </p>
    <p class="products__price">Price: ${t.price}$</p>
 </li>
`}function m(t){return t.map(l).join("")}const g=async t=>{const s=await i(),e=d(s);o.categoryList.innerHTML=e;const a=await u(),n=m(a.products);o.productsList.innerHTML=n};document.addEventListener("DOMContentLoaded",g);
//# sourceMappingURL=index.js.map
