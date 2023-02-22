const links = document.querySelectorAll("nav a");

function verificaHref(item) {
  const href = item.href;
  const url = document.location.href;
  if (href === url) {
    item.style.backgroundColor = "black";
    item.style.color = "white";
  }
}

links.forEach(verificaHref);
