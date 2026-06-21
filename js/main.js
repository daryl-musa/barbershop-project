/* ==========================================================================
   K Steve Barbers — main.js
   Feature 1: Live walk-in queue widget (homepage)
   ========================================================================== */

(function () {
  const callNextBtn = document.getElementById("callNextBtn");
  if (!callNextBtn) return; // only runs on pages that have the widget

  const nowServingEl = document.getElementById("nowServing");
  const nextUpEl = document.getElementById("nextUp");

  const barbers = ["Steve", "Brian", "Felix"];
  const chairs = [1, 2, 3];

  let currentTicket = parseInt(nowServingEl.textContent, 10);

  function randomBarberAndChair() {
    const barber = barbers[Math.floor(Math.random() * barbers.length)];
    const chair = chairs[Math.floor(Math.random() * chairs.length)];
    return { barber, chair };
  }

  function updateNextUp(ticketNumber) {
    const { barber, chair } = randomBarberAndChair();
    nextUpEl.textContent = `Ticket #${ticketNumber} — Chair ${chair} with ${barber}`;
  }

  callNextBtn.addEventListener("click", function () {
    currentTicket += 1;
    nowServingEl.textContent = currentTicket;
    updateNextUp(currentTicket + 1);

    // brief visual pulse so the change is noticeable
    nowServingEl.style.transition = "color 0.15s ease";
    nowServingEl.style.color = "#f5f1ea";
    setTimeout(() => {
      nowServingEl.style.color = "";
    }, 150);
  });
})();
document.querySelectorAll('#navMain .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navMain = document.getElementById('navMain');
    if (navMain.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navMain) || new bootstrap.Collapse(navMain);
      bsCollapse.hide();
    }
  });
});