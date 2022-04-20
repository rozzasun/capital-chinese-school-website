document.addEventListener('DOMContentLoaded', () => {
  console.log("yesss")
  const mandarinBtn = document.getElementById('mandarin-btn')
  mandarinBtn.onclick = switchMando;

  const cantoneseBtn = document.getElementById('cantonese-btn')
  cantoneseBtn.onclick = switchCanto;

  if (sessionStorage.getItem('language') == "cantonese") {
    switchCanto();
  } else {
    switchMando();
  }

  function switchMando() {
    document.querySelectorAll('.canto').forEach(function(el) {
      el.style.display = 'none';
    });

    document.querySelectorAll('.mando').forEach(function(el) {
      el.style.display = 'block';
    });

    mandarinBtn.disabled = true;
    cantoneseBtn.disabled = false;
    setLanguageCookie('mandarin');
  }

  function switchCanto() {
    document.querySelectorAll('.mando').forEach(function(el) {
      el.style.display = 'none';
    });

    document.querySelectorAll('.canto').forEach(function(el) {
      el.style.display = 'block';
    });

    setLanguageCookie('cantonese');

    mandarinBtn.disabled = false;
    cantoneseBtn.disabled = true;
  }

  function setLanguageCookie(language) {
    sessionStorage.setItem('language', language);
  }

  // set to visible once javascript runs to avoid flickering
  document.getElementsByTagName("body")[0].style.visibility = "visible";
})