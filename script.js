function WorkInProgressPopup() {
  if (window.jQuery) {
    $ = window.jQuery;
    $("html")
      .attr("data-wf-page", "5d0752128518927d140033ab")
      .attr("data-wf-site", "5b27ad71f471c80738d206f5");
    if (
      $("link").filter(
        "[href='https://public.twik.io/css/popup-bundle.min.css']"
      ).length == 0
    ) {
      $(
        '<link href="https://public.twik.io/css/popup-bundle.min.css" rel="stylesheet" type="text/css">'
      ).appendTo("head");
    }
    if ($("div.regularsection").length == 0) {
      $('<div class="regularsection _100vh">').appendTo("body");
    }
    $(
      '<div class="relativepopup "><div id="popup-container" class="popup-container image-right" data-sm-init="true" data-state="success"><div class="popup-half-column"><div class="popup-image-full"><img alt="" class="popup-image subtitle-image" src="https://cdn.discordapp.com/attachments/839189307637497890/1101246121159962644/4784707.png"></div><div class="popup-subtitle" style="color: #"></div><div class="popup-title" style="color: #000000">Lavori in corso</div><p class="popup-description" style="color: #686868">Questa funzione non è stata ancora implementata in <b>TSAZ</b>, se hai bisogno di aiuto recarsi nella sezione <b>Supporto</b></p><div id="temp-countdown" class="placeholder-section"></div><div class="popup-form-block need-fetch w-form"><div id="temp-form" class="placeholder-section"></div><div class="w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="w-form-fail"><div>Oops! Something went wrong while submitting the form.</div></div></div><p style="font-size: 14px; color: #868686; margin-bottom: 24px; margin-top: -12px;">© Free <a href="https://www.twik.io/resources/popup-generator/" target="_blank" style="text-decoration: none; font-size: 14px; color: #868686;">popup generator</a> by Twik</p></div></div></div>'
    ).appendTo("div.regularsection");
    if (
      $("script").filter(
        "[src='https://public.twik.io/js/popup-bundle.min.js']"
      ).length == 0
    ) {
      $.getScript("https://public.twik.io/js/popup-bundle.min.js", function () {
        var params = {
          popup_type: "instant",
          popup_position: "center",
          popup_animation: "slideBottom",
          popup_closeButtonPlace: "inside",
          popup_css: {
            "text-align": "center",
            margin: "0px",
            padding: "0",
            background: "transparent",
          },
        };
        $(".popup-container").SlickModals(params);
      });
    } else {
      var params = {
        popup_type: "instant",
        popup_position: "center",
        popup_animation: "slideBottom",
        popup_closeButtonPlace: "inside",
        popup_css: {
          "text-align": "center",
          margin: "0px",
          padding: "0",
          background: "transparent",
        },
      };
      $(".popup-container").SlickModals(params);
    }
  } else {
    var script = document.createElement("SCRIPT");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js";
    script.type = "text/javascript";
    script.onload = function () {
      var $ = window.jQuery;
      $("html")
        .attr("data-wf-page", "5d0752128518927d140033ab")
        .attr("data-wf-site", "5b27ad71f471c80738d206f5");
      if (
        $("link").filter(
          "[href='https://public.twik.io/css/popup-bundle.min.css']"
        ).length == 0
      ) {
        $(
          '<link href="https://public.twik.io/css/popup-bundle.min.css" rel="stylesheet" type="text/css">'
        ).appendTo("head");
      }
      if ($("div.regularsection").length == 0) {
        $('<div class="regularsection _100vh">').appendTo("body");
      }
      $(
        '<div class="relativepopup "><div id="popup-container" class="popup-container image-right" data-sm-init="true" data-state="success"><div class="popup-half-column"><div class="popup-image-full"><img alt="" class="popup-image subtitle-image" src="https://cdn.discordapp.com/attachments/839189307637497890/1101246121159962644/4784707.png"></div><div class="popup-subtitle" style="color: #"></div><div class="popup-title" style="color: #000000">Lavori in corso</div><p class="popup-description" style="color: #686868">Questa funzione non è stata ancora implementata in <b>TSAZ</b>, se hai bisogno di aiuto recarsi nella sezione <b>Supporto</b></p><div id="temp-countdown" class="placeholder-section"></div><div class="popup-form-block need-fetch w-form"><div id="temp-form" class="placeholder-section"></div><div class="w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="w-form-fail"><div>Oops! Something went wrong while submitting the form.</div></div></div><p style="font-size: 14px; color: #868686; margin-bottom: 24px; margin-top: -12px;">© Free <a href="https://www.twik.io/resources/popup-generator/" target="_blank" style="text-decoration: none; font-size: 14px; color: #868686;">popup generator</a> by Twik</p></div></div></div>'
      ).appendTo("div.regularsection");
      if (
        $("script").filter(
          "[src='https://public.twik.io/js/popup-bundle.min.js']"
        ).length == 0
      ) {
        $.getScript(
          "https://public.twik.io/js/popup-bundle.min.js",
          function () {
            var params = {
              popup_type: "instant",
              popup_position: "center",
              popup_animation: "slideBottom",
              popup_closeButtonPlace: "inside",
              popup_css: {
                "text-align": "center",
                margin: "0px",
                padding: "0",
                background: "transparent",
              },
            };
            $(".popup-container").SlickModals(params);
          }
        );
      } else {
        var params = {
          popup_type: "instant",
          popup_position: "center",
          popup_animation: "slideBottom",
          popup_closeButtonPlace: "inside",
          popup_css: {
            "text-align": "center",
            margin: "0px",
            padding: "0",
            background: "transparent",
          },
        };
        $(".popup-container").SlickModals(params);
      }
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  }
}
