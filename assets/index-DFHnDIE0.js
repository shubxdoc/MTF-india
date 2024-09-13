(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))p(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&p(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function p(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();const $=document.querySelector(".menuBtns"),g=document.querySelector(".menuopen"),a=document.querySelector(".menuclose"),h=document.querySelector(".sidemenu");function y(){g.classList.contains("hidden")?(g.classList.remove("hidden"),a.classList.add("hidden"),h.classList.add("hidden"),document.body.classList.remove("overflow-hidden")):(g.classList.add("hidden"),a.classList.remove("hidden"),h.classList.remove("hidden"),document.body.classList.add("overflow-hidden"))}$.addEventListener("click",y);h.querySelectorAll("a").forEach(i=>{i.addEventListener("click",()=>{g.classList.remove("hidden"),a.classList.add("hidden"),h.classList.add("hidden"),document.body.classList.remove("overflow-hidden")})});function b(i){const{activeClassName:s,contentElement:n,menuElement:p,scrollMarginTopOffset:r,topBarElement:l}=i;function c(){return Array.prototype.slice.call(n.querySelectorAll(".section"))}function d(){const e=c(),o=e[e.length-1],t=window.innerHeight-(l.offsetHeight+r)-(n.offsetHeight-o.offsetTop);t<0?n.removeAttribute("style"):n.style.paddingBottom=`${t}px`}let u;window.addEventListener("resize",()=>{clearTimeout(u),u=setTimeout(d,200)}),window.addEventListener("scroll",()=>{const e=c(),o=function(){const m=window.scrollY;for(const f of e.slice().reverse())if(f.offsetTop-l.offsetHeight-r<=m)return f.getAttribute("id");return null}();v(p,o,s)})}function v(i,s,n){i.querySelectorAll("a.navLinks").forEach(r=>{r.getAttribute("href").substring(1)===s?r.classList.add(n):r.classList.remove(n)})}document.addEventListener("DOMContentLoaded",function(){b({activeClassName:"active",contentElement:document.querySelector("main.content"),menuElement:document.querySelector(".sidemenu"),scrollMarginTopOffset:4,topBarElement:document.querySelector("header")})});async function k(){try{const s=await(await fetch("/data.json")).json(),n=document.querySelector("#gaming_quickR"),p=document.querySelector("#gaming_avgDeliveryR"),r=document.querySelector("#gaming_quick_notRec"),l=document.querySelector("#gaming_hold");s.gaming.recommended.quick.forEach(e=>{const o=document.createElement("div");o.innerHTML=`
          <p class="my-3"><strong>${e.name}</strong></p>
          <blockquote>
            <ul class="list-[circle] text-gray-500 border-l border-gray-700 pl-9 tracking-wide space-y-1 ">
              <li>
                <p><strong>Price:</strong> ${e.price}</p>
              </li>
              <li>
                <p><strong>Processor:</strong> ${e.processor}</p>
              </li>
              <li>
                <p><strong>Graphics:</strong> ${e.graphics}</p>
              </li>
              <li>
                <p><strong>Battery Health:</strong> ${e.battery_health}</p>
              </li>
              <li>
                <p><strong>RAM:</strong> ${e.ram}</p>
              </li>
              <li>
                <p><strong>Storage:</strong> ${e.storage}</p>
              </li>
              <li>
                <p><strong>Highlights:</strong> ${e.highlights}</p>
              </li>
              ${e.purchase_links.map(t=>`
                <li>
                  <p>
                    <strong>${t.platform}:</strong>
                    <a href="${t.url}" target="_blank" rel="nofollow" class="underline">Link</a>
                  </p>
                </li>
              `).join("")}
              <li>
                <p>
                  <strong>Video Review:</strong>
                  <a href="${e.video_review}"
                  target="_blank" rel="nofollow" class="underline">Watch here</a>
                </p>
              </li>
            </ul>
          </blockquote>
          <br>
        `,n.appendChild(o)}),s.gaming.recommended.late_delivery.forEach(e=>{const o=document.createElement("div");o.innerHTML=`
          <p class="my-3"><strong>${e.name}</strong></p>
          <blockquote>
            <ul class="list-[circle] text-gray-500 border-l border-gray-700 pl-9 tracking-wide space-y-1 ">
              <li>
                <p><strong>Price:</strong> ${e.price}</p>
              </li>
              <li>
                <p><strong>Processor:</strong> ${e.processor}</p>
              </li>
              <li>
                <p><strong>Graphics:</strong> ${e.graphics}</p>
              </li>
              <li>
                <p><strong>Battery Health:</strong> ${e.battery_health}</p>
              </li>
              <li>
                <p><strong>RAM:</strong> ${e.ram}</p>
              </li>
              <li>
                <p><strong>Storage:</strong> ${e.storage}</p>
              </li>
              <li>
                <p><strong>Highlights:</strong> ${e.highlights}</p>
              </li>
              ${e.purchase_links.map(t=>`
                <li>
                  <p>
                    <strong>${t.platform}:</strong>
                    <a href="${t.url}" target="_blank" rel="nofollow" class="underline">Link</a>
                  </p>
                </li>
              `).join("")}
              <li>
                <p>
                  <strong>Video Review:</strong>
                  <a href="${e.video_review}"
                  target="_blank" rel="nofollow" class="underline">Watch here</a>
                </p>
              </li>
            </ul>
          </blockquote>
          <br>
        `,p.appendChild(o)}),s.gaming.not_recommended.forEach(e=>{const o=document.createElement("div");o.innerHTML=`
          <p class="my-3"><strong>${e.name}</strong></p>
          <blockquote>
            <ul class="list-[circle] text-gray-500 border-l border-gray-700 pl-9 tracking-wide space-y-1 ">
              <li>
                <p><strong>Price:</strong> ${e.price}</p>
              </li>
              <li>
                <p><strong>Processor:</strong> ${e.processor}</p>
              </li>
              <li>
                <p><strong>Graphics:</strong> ${e.graphics}</p>
              </li>
              <li>
                <p><strong>Battery Health:</strong> ${e.battery_health}</p>
              </li>
              <li>
                <p><strong>RAM:</strong> ${e.ram}</p>
              </li>
              <li>
                <p><strong>Storage:</strong> ${e.storage}</p>
              </li>
              <li>
                <p><strong>Highlights:</strong> ${e.highlights}</p>
              </li>
              ${e.purchase_links.map(t=>`
                <li>
                  <p>
                    <strong>${t.platform}:</strong>
                    <a href="${t.url}" target="_blank" rel="nofollow" class="underline">Link</a>
                  </p>
                </li>
              `).join("")}
              <li>
                <p>
                  <strong>Video Review:</strong>
                  <a href="${e.video_review}"
                  target="_blank" rel="nofollow" class="underline">Watch here</a>
                </p>
              </li>
            </ul>
          </blockquote>
          <br>
        `,r.appendChild(o)}),s.gaming.hold.forEach(e=>{const o=document.createElement("div");o.innerHTML=`
          <p class="my-3"><strong>${e.name}</strong></p>
          <blockquote>
            <ul class="list-[circle] text-gray-500 border-l border-gray-700 pl-9 tracking-wide space-y-1 ">
              <li>
                <p><strong>Price:</strong> ${e.price}</p>
              </li>
              <li>
                <p><strong>Processor:</strong> ${e.processor}</p>
              </li>
              <li>
                <p><strong>Graphics:</strong> ${e.graphics}</p>
              </li>
              <li>
                <p><strong>Battery Health:</strong> ${e.battery_health}</p>
              </li>
              <li>
                <p><strong>RAM:</strong> ${e.ram}</p>
              </li>
              <li>
                <p><strong>Storage:</strong> ${e.storage}</p>
              </li>
              <li>
                <p><strong>Highlights:</strong> ${e.highlights}</p>
              </li>
              ${e.purchase_links.map(t=>`
                <li>
                  <p>
                    <strong>${t.platform}:</strong>
                    <a href="${t.url}" target="_blank" rel="nofollow" class="underline">Link</a>
                  </p>
                </li>
              `).join("")}
              <li>
                <p>
                  <strong>Video Review:</strong>
                  <a href="${e.video_review}"
                  target="_blank" rel="nofollow" class="underline">Watch here</a>
                </p>
              </li>
            </ul>
          </blockquote>
          <br>
        `,l.appendChild(o)});const c=document.querySelector("#non_gaming_quickR"),d=document.querySelector("#non_gaming_not_recommend"),u=document.querySelector("#non_gaming_on_hold");s.non_gaming.recommended.forEach(e=>{const o=document.createElement("div");o.innerHTML=`
          <p class="my-3"><strong>${e.name}</strong></p>
          <blockquote>
            <ul class="list-[circle] text-gray-500 border-l border-gray-700 pl-9 tracking-wide space-y-1 ">
              <li>
                <p><strong>Price:</strong> ${e.price}</p>
              </li>
              <li>
                <p><strong>Processor:</strong> ${e.processor}</p>
              </li>
              <li>
                <p><strong>Graphics:</strong> ${e.graphics}</p>
              </li>
              <li>
                <p><strong>Battery Health:</strong> ${e.battery_health}</p>
              </li>
              <li>
                <p><strong>RAM:</strong> ${e.ram}</p>
              </li>
              <li>
                <p><strong>Storage:</strong> ${e.storage}</p>
              </li>
              <li>
                <p><strong>Highlights:</strong> ${e.highlights}</p>
              </li>
              ${e.purchase_links.map(t=>`
                <li>
                  <p>
                    <strong>${t.platform}:</strong>
                    <a href="${t.url}" target="_blank" rel="nofollow" class="underline">Link</a>
                  </p>
                </li>
              `).join("")}
              <li>
                <p>
                  <strong>Video Review:</strong>
                  <a href="${e.video_review}"
                  target="_blank" rel="nofollow" class="underline">Watch here</a>
                </p>
              </li>
            </ul>
          </blockquote>
          <br>
        `,c.appendChild(o)}),s.non_gaming.not_recommended.forEach(e=>{const o=document.createElement("div");o.innerHTML=`
          <p class="my-3"><strong>${e.name}</strong></p>
          <blockquote>
            <ul class="list-[circle] text-gray-500 border-l border-gray-700 pl-9 tracking-wide space-y-1 ">
              <li>
                <p><strong>Price:</strong> ${e.price}</p>
              </li>
              <li>
                <p><strong>Processor:</strong> ${e.processor}</p>
              </li>
              <li>
                <p><strong>Graphics:</strong> ${e.graphics}</p>
              </li>
              <li>
                <p><strong>Battery Health:</strong> ${e.battery_health}</p>
              </li>
              <li>
                <p><strong>RAM:</strong> ${e.ram}</p>
              </li>
              <li>
                <p><strong>Storage:</strong> ${e.storage}</p>
              </li>
              <li>
                <p><strong>Highlights:</strong> ${e.highlights}</p>
              </li>
              ${e.purchase_links.map(t=>`
                <li>
                  <p>
                    <strong>${t.platform}:</strong>
                    <a href="${t.url}" target="_blank" rel="nofollow" class="underline">Link</a>
                  </p>
                </li>
              `).join("")}
              <li>
                <p>
                  <strong>Video Review:</strong>
                  <a href="${e.video_review}"
                  target="_blank" rel="nofollow" class="underline">Watch here</a>
                </p>
              </li>
            </ul>
          </blockquote>
          <br>
        `,d.appendChild(o)}),s.non_gaming.hold.forEach(e=>{const o=document.createElement("div");o.innerHTML=`
          <p class="my-3"><strong>${e.name}</strong></p>
          <blockquote>
            <ul class="list-[circle] text-gray-500 border-l border-gray-700 pl-9 tracking-wide space-y-1 ">
              <li>
                <p><strong>Price:</strong> ${e.price}</p>
              </li>
              <li>
                <p><strong>Processor:</strong> ${e.processor}</p>
              </li>
              <li>
                <p><strong>Graphics:</strong> ${e.graphics}</p>
              </li>
              <li>
                <p><strong>Battery Health:</strong> ${e.battery_health}</p>
              </li>
              <li>
                <p><strong>RAM:</strong> ${e.ram}</p>
              </li>
              <li>
                <p><strong>Storage:</strong> ${e.storage}</p>
              </li>
              <li>
                <p><strong>Highlights:</strong> ${e.highlights}</p>
              </li>
              ${e.purchase_links.map(t=>`
                <li>
                  <p>
                    <strong>${t.platform}:</strong>
                    <a href="${t.url}" target="_blank" rel="nofollow" class="underline">Link</a>
                  </p>
                </li>
              `).join("")}
              <li>
                <p>
                  <strong>Video Review:</strong>
                  <a href="${e.video_review}"
                  target="_blank" rel="nofollow" class="underline">Watch here</a>
                </p>
              </li>
            </ul>
          </blockquote>
          <br>
        `,u.appendChild(o)})}catch(i){console.log("Error message: ",i)}}k();
