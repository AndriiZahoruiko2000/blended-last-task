import{a as l}from"./vendor-N5iQpiFS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const y of c.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&s(y)}).observe(document,{childList:!0,subtree:!0});function e(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(r){if(r.ep)return;r.ep=!0;const c=e(r);fetch(r.href,c)}})();const u="Cart-Product-List",p="Wishlist-Product-List",m="https://dummyjson.com/products";//!================================================
async function L(){const o=m+"/category-list",e={};return(await l.get(o,{params:e})).data}//!================================================
async function P(t=1){const e=m+"",s={limit:12,skip:(t-1)*12};return(await l.get(e,{params:s})).data}//!================================================
async function b(t){const o=`/category/${t}`,e=m+o,s={};return(await l.get(e,{params:s})).data}//!================================================
async function S(t){const o=`/${t}`,e=m+o,s={};return(await l.get(e,{params:s})).data}const n={categoryList:document.querySelector(".categories"),productsList:document.querySelector(".products"),divModal:document.querySelector(".modal"),divModalProduct:document.querySelector(".modal-product"),addToCartBtn:document.querySelector(".js-modal-product__btn--cart"),cartProductsList:document.querySelector(".js-products"),cartInfo:document.querySelector(".js-cart-summary__inner"),closeModal:document.querySelector(".modal__close-btn"),addToWishlist:document.querySelector(".js-modal-product__btn--wishlist"),wishlist:document.querySelector(".wishlist-products"),headerCartCount:document.querySelector("[data-cart-count]"),headerWishlistCount:document.querySelector("[data-wishlist-count]")};function g(t,o){const e=JSON.stringify(o);localStorage.setItem(t,e)}function a(t,o){const e=localStorage.getItem(t);try{return JSON.parse(e)||o}catch{return e||o}}//!================================================
//!================================================
function T(t){return`<li class="categories__item">
   <button class="categories__btn" type="button">${t}</button>
 </li>
`}function $(t){return t.map(T).join("")}//!================================================
function v(t){return`<li class="products__item" data-id="${t.id}">
    <img class="products__image" src="${t.thumbnail}" alt=""/>
    <p class="products__title">${t.title}</p>
    <p class="products__brand">${t.brand}<span class="products__brand--bold">Brand:</span></p>
    <p class="products__category">Category:${t.category} </p>
    <p class="products__price">Price: ${t.price}$</p>
 </li>
`}function f(t){return t.map(v).join("")}//!================================================
function w(t){return`<img class="modal-product__img" src="${t.images[0]}" alt="" />
      <div class="modal-product__content">
        <p class="modal-product__title">${t.title}</p>
        <ul class="modal-product__tags">${t.tags}</ul>
        <p class="modal-product__description">${t.description}</p>
        <p class="modal-product__shipping-information">Shipping:${t.shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy:${t.returnPolicy}</p>
        <p class="modal-product__price">Price: ${t.price}</p>
        <button class="modal-product__buy-btn" type="button" data-id="${t.id}">Buy</button>
      </div>
`}//!================================================
function q(t){const o=t.length;let e=0;for(const s of t)e+=s.price;n.cartInfo.querySelector("[data-count]").textContent=o,n.cartInfo.querySelector("[data-price]").textContent=e.toFixed(2)+"$"}//!================================================
const _=t=>{a(u,[]).includes(t)?n.addToCartBtn.textContent="Remove from Cart":n.addToCartBtn.textContent="Add to Cart"},h=t=>{a(p,[]).includes(t)?n.addToWishlist.textContent="Remove from Wishlist":n.addToWishlist.textContent="Add to Wishlist"};//!================================================
const C=()=>{console.log(n);const t=a(u),o=a(p);n.headerCartCount.textContent=t.length,n.headerWishlistCount.textContent=o.length};//!================================================
const x=async t=>{const o=await L();o.unshift("All");const e=$(o);n.categoryList.innerHTML=e;const s=await P(),r=f(s.products);n.productsList.innerHTML=r};//!================================================
const I=async t=>{if(t.target.nodeName!=="BUTTON")return;const o=t.target.textContent,e=await b(o),s=f(e.products);n.productsList.innerHTML=s};//!================================================
const O=async t=>{const o=t.target.closest("li");if(!o)return;const e=o.dataset.id,s=await S(e),r=w(s);n.divModalProduct.innerHTML=r,n.divModal.classList.add("modal--is-open"),_(e),h(e)};//!================================================
const B=t=>{n.divModal.classList.remove("modal--is-open")};//!================================================
let i=a(u,[]),d=a(p,[]);//!================================================
n.closeModal.addEventListener("click",B);//!================================================
n.addToCartBtn.addEventListener("click",t=>{const e=n.divModalProduct.querySelector(".modal-product__buy-btn").dataset.id;i.includes(e)?(i=i.filter(s=>s!==e),console.log("deleted")):(i.push(e),console.log("add")),g(u,i),_(e),C()});//!================================================
n.addToWishlist.addEventListener("click",t=>{const e=n.divModalProduct.querySelector(".modal-product__buy-btn").dataset.id;d.includes(e)?d=d.filter(s=>s!==e):d.push(e),g(p,d),h(e),C()});export{p as L,q as a,u as b,f as c,S as g,I as h,x as i,a as l,O as o,n as r,C as u};
//# sourceMappingURL=modal-Y7jQDyqm.js.map
