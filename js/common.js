function $id(id) {
  return document.getElementById(id);
}

function setActiveNav() {
  const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav]").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === page) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
}

function setYear() {
  const el = $id("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  setYear();
});
