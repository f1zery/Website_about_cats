document.addEventListener("DOMContentLoaded", () => {
  const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav]").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === page) {
      a.setAttribute("aria-current", "page");
    } else {
      a.removeAttribute("aria-current");
    }
  });
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
});
