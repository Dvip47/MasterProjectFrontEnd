//  Preloader
jQuery(window).on("load", function () {
  $("#preloader").fadeOut(500);
  $("#main-wrapper").addClass("show");
});

(function ($) {
  //  Header fixed
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".header").addClass("animated slideInDown fixed"), 3000;
    } else {
      $(".header").removeClass("animated slideInDown fixed"), 3000;
    }
  });

  $("select").niceSelect();

  $(function () {
    for (
      var nk = window.location,
        o = $(".menu a, .sub-menu a")
          .filter(function () {
            return this.href == nk;
          })
          .addClass("active")
          .parent()
          .addClass("active");
      ;

    ) {
      // console.log(o)
      if (!o.is("li")) break;
      o = o.parent().addClass("show").parent().addClass("active");
    }
  });

  // $(function () {
  //     // var win_w = window.outerWidth;
  //     var win_h = window.outerHeight;
  //     var win_h = window.outerHeight;
  //     if (win_h > 0 ? win_h : screen.height) {
  //         $(".content-body").css("min-height", (win_h + 60) + "px");
  //     };
  // });

  $(".sidebar-right-trigger").on("click", function () {
    $(".sidebar-right").toggleClass("show");
  });

  $('[data-toggle="tooltip"]').tooltip();

  $(".data-close").on("click", function () {
    e.preventDefault();
    $(this).parent().parent().remove();
  });

  $("#tbUser").on("click", ".btnDelete", function () {
    $(this).closest("tr").remove();
  });

  $(function () {
    var slider = document.getElementById("slider");
    slider.oninput = function () {
      $(".count")
        .text(this.value)
        .css({
          left: this.value + "%",
          transform: "translateX(-" + this.value + "%)",
        });
      $(".fill").css("width", this.value + "%");
    };
  });

  /**************Theme****************/
  window.addEventListener("load", () => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }
    const themeSelector = document.querySelector("#themeSelector");
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
      themeSelector.textContent = "☀️";
    } else {
      themeSelector.textContent = "🌙️";
    }

    themeSelector.addEventListener("click", () => {
      if (localStorage.getItem("theme") === "light") {
        localStorage.setItem("theme", "dark");
        themeSelector.textContent = "☀️";
      } else {
        localStorage.setItem("theme", "light");
        themeSelector.textContent = "🌙️";
      }

      document.body.classList.toggle("dark");
    });
  });
  window.addEventListener("mousemove", () => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }
    const themeSelectorr = document.querySelector("#themeSelector");
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
      themeSelectorr.textContent = "☀️";
    } else {
      themeSelectorr.textContent = "🌙️";
    }

    themeSelectorr.addEventListener("click", () => {
      if (localStorage.getItem("theme") === "light") {
        localStorage.setItem("theme", "dark");
        themeSelectorr.textContent = "☀️";
      } else {
        localStorage.setItem("theme", "light");
        themeSelectorr.textContent = "🌙️";
      }

      document.body.classList.toggle("dark");
    });
  });
})(jQuery);

// const ml = new PerfectScrollbar(".market-limit");
// const mn = new PerfectScrollbar(".market-nested");
// const ln = new PerfectScrollbar(".limit-nested");
// const sln = new PerfectScrollbar(".stop-limit-nested");
// const pp = new PerfectScrollbar(".price-pair");
// const ts = new PerfectScrollbar(".trade-history");
// const ob = new PerfectScrollbar(".order-book");
// const yp = new PerfectScrollbar(".your-position");
// const bw = new PerfectScrollbar(".balance-widget");
// const mkn = new PerfectScrollbar(".market-news");
// const opt = new PerfectScrollbar(".open-position-table");

// //ripple effect on button
// Waves.init();
// Waves.attach(".wave-effect");
// Waves.attach(".btn");
// Waves.attach("button");
