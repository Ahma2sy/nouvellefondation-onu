// Seul script du site : le bouton « Copier l'adresse ».
document.querySelectorAll("[data-copy]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var status = btn.parentNode.querySelector(".copy-status");
    var text = btn.getAttribute("data-copy");
    var done = function () { if (status) status.textContent = btn.getAttribute("data-done"); };
    var fallback = function () {
      var email = btn.parentNode.querySelector(".email");
      if (!email) return;
      var range = document.createRange();
      range.selectNodeContents(email);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback);
    else fallback();
  });
});

// Menu des langues : se ferme en cliquant ailleurs ou avec Échap.
document.querySelectorAll(".langs-menu").forEach(function (menu) {
  document.addEventListener("click", function (e) { if (!menu.contains(e.target)) menu.open = false; });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.open) { menu.open = false; menu.querySelector("summary").focus(); }
  });
});
