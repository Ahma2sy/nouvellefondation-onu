// Seul script du site : le bouton « Copier l'adresse ».
document.querySelectorAll("[data-copy]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var status = btn.parentNode.querySelector(".copy-status");
    var text = btn.getAttribute("data-copy");
    var done = function () { if (status) status.textContent = btn.getAttribute("data-done"); };
    var fallback = function () {
      var email = document.getElementById("email");
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
