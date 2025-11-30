import"./assets/styles-JE8YjOlG.js";import{a as s}from"./assets/vendor-N5iQpiFS.js";async function a(){const o="https://dummyjson.com/products"+"/category-list",n={};return(await s.get(o,{params:n})).data}const r={categoryList:document.querySelector(".categories")};function c(t){return`<li class="categories__item">
   <button class="categories__btn" type="button">${t}</button>
 </li>
`}function i(t){return t.map(c).join("")}const u=async t=>{const e=await a();console.log(e);const o=i(e);r.categoryList.innerHTML=o};document.addEventListener("DOMContentLoaded",u);
//# sourceMappingURL=index.js.map
