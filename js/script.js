let mainEl = document.querySelector("main");
// let mainElColor = mainEl.style.getPropertyValue("--main-bg");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "SEI Rocks!!";
mainEl.classList.add("flex-ctr");

let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
// let menuHeight = topMenuEl.style.getPropertyValue("--top-menu-bg");
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.style.height = "100%";
topMenuEl.classList.add("flex-around");

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

for (let i = 0; i < menuLinks.length; i++) {
  const aElement = document.createElement("a");
  aElement.href = menuLinks[i].href;
  aElement.textContent = menuLinks[i].text;
  topMenuEl.appendChild(aElement);
}
