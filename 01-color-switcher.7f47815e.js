const e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");let t=null;changeBodyColor=e=>{e.currentTarget.disabled=!0,t=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=e}),1e3)},e.addEventListener("click",changeBodyColor),stopChangeBodyColor=()=>{clearInterval(t),e.disabled=!1},o.addEventListener("click",stopChangeBodyColor);
//# sourceMappingURL=01-color-switcher.7f47815e.js.map