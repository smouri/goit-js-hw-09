const o=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let t=null;changeBodyColor=o=>{o.currentTarget.disabled=!0,t=setInterval((()=>{const o=getRandomHexColor();document.body.style.backgroundColor=o}),1e3)},o.addEventListener("click",changeBodyColor),stopChangeBodyColor=()=>{clearInterval(t),o.disabled=!1},e.addEventListener("click",stopChangeBodyColor),getRandomHexColor=()=>`#${Math.floor(16777215*Math.random()).toString(16)}`;
//# sourceMappingURL=01-color-switcher.3e5f0f96.js.map