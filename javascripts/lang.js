

$(function() {

  var t = {
    "Home": {
      arabic: "منمنزل",
      chinesesimplified: "家",
      chinesetradtional: "家",
      french: "maison",
      german: "Zuhause",
      japanese: "自宅",
      korean: "홈",
      portuguese: "casa",
      spanish: "casa"
    },
    "About SelectUSA": {
      arabic: "حول SelectUSA",
      chinesesimplified: "关于选择美国",
      chinesetradtional: "關於選擇美國",
      french: "À propos SelectUSA",
      german: "Über SelectUSA",
      japanese: "SelectUSAについて",
      korean: "SelectUSA 소개",
      portuguese: "Sobre SelectUSA",
      spanish: "Acerca SelectUSA"
    }
    
  };
  var _t = $('body').translate({lang: "en", t: t});
  var str = _t.g("translate");
  console.log(str);


  $(".lang_selector").click(function(ev) {
    var lang = $(this).attr("data-value");
    _t.lang(lang);

    console.log(lang);
    ev.preventDefault();
  });



});



    
    
