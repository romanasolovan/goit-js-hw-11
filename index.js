import{a as p,S as u,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();const m="https://pixabay.com/api/",y="51420403-5f20d185bf97c75fff06f9d5f";async function h(s){const o={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:20};return(await p.get(m,{params:o})).data}const l=document.querySelector(".gallery"),f=document.querySelector(".loader"),g=new u(".gallery a",{captionsData:"alt",captionDelay:250});function v(s){const o=s.map(e=>`
        <li class="gallery-item">
        <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" width="360" height="200"/>
        </a>
        <div class="info-list">
        <div class="info-item">
        <p class="info-item-title">Likes</p>
        <p class="info-item-text">${e.likes}</p>
        </div>
        <div class="info-item">
        <p class="info-item-title">Views</p>
        <p class="info-item-text">${e.views}</p>
        </div>
        <div class="info-item">
        <p class="info-item-title">Comments</p>
        <p class="info-item-text">${e.comments}</p>
        </div>
        <div class="info-item">
        <p class="info-item-title">Downloads</p>
        <p class="info-item-text">${e.downloads}</p>
        </div>
        </div>
        </li>
        `).join("");l.insertAdjacentHTML("beforeend",o),g.refresh()}function L(){l.innerHTML=""}function w(){f.classList.remove("is-hidden")}function c(){f.classList.add("is-hidden")}const d=document.querySelector(".form"),S=d.querySelector('input[name="search-text"]');d.addEventListener("submit",async s=>{s.preventDefault(),L(),w();const o=S.value.trim();if(!o){n.warning({message:"Please enter a search term!",position:"topRight"}),c();return}try{const e=await h(o);e.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):v(e.hits)}catch(e){n.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.log(e)}finally{c()}});
//# sourceMappingURL=index.js.map
