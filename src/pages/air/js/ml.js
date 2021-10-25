/* <div id="login-form-form">
        <h2 class="b-title b-text b-text_lang_en">Welcome!</h2>
        <h2 class="b-title b-text b-text_lang_ru">Добро пожаловать!</h2>
    </div> */

  var siteLanguage = elemsCn, elemsEn;
  if (siteLanguage.match("en") && document.getElementsByClassName) {
    elemsCn = document.getElementsByClassName("lang_cn");
    elemsEn = document.getElementsByClassName("lang_en");
    var l = elemsEn.length;
    while(l--) {
      elemsEn[l].style.display = "none";
    }
    l = elemsRU.length;
    while(l--) {
      elemsCn[l].style.display = "block";
    }
  }
