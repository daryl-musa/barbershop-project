/* ==========================================================================
   K Steve Barbers — gallery.js
   Feature 2: Filterable gallery by category
   ========================================================================== */

(function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item-wrap");

  if (filterButtons.length === 0) return; // only runs on gallery.html

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const filter = btn.getAttribute("data-filter");

      // toggle active state on buttons
      filterButtons.forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");

      // show/hide gallery items based on category
      galleryItems.forEach(function (item) {
        const category = item.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          item.classList.remove("hidden-item");
        } else {
          item.classList.add("hidden-item");
        }
      });
    });
  });
})();
