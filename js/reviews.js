/* ==========================================================================
   K Steve Barbers — reviews.js
   Feature 4: Calculate average rating from review star data
   ========================================================================== */

(function () {
  const starRows = document.querySelectorAll(".star-row[data-rating]");
  const avgRatingText = document.getElementById("avgRatingText");

  if (starRows.length === 0 || !avgRatingText) return; // only runs on reviews.html

  let total = 0;
  starRows.forEach(function (row) {
    total += parseInt(row.getAttribute("data-rating"), 10);
  });

  const average = (total / starRows.length).toFixed(1);
  avgRatingText.textContent = `${average} out of 5, based on ${starRows.length} customer reviews collected since 2022`;
})();