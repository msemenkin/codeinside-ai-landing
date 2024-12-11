(() => {
  ("use strict");
  document.addEventListener("DOMContentLoaded", function (e) {
    var body = document.querySelector("body");
    // first form
    const form = document.forms["home"];
    const formDemo = document.forms["demo"];
    const formTest = document.forms["test"];
    const formTex = document.forms["form1"];
    //
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        formSubmit(form);
      });
    }
    if (formDemo) {
      formDemo.addEventListener("submit", (e) => {
        e.preventDefault();
        formSubmit(formDemo);
      });
    }
    if (formTest) {
      formTest.addEventListener("submit", (e) => {
        e.preventDefault();
        formSubmit(formTest);
      });
    }
    if (formTex) {
      formTex.addEventListener("submit", (e) => {
        e.preventDefault();

        let yr = document.querySelector("#file1");
        if (yr.value != "") {
          console.log("net");
          formSubmit2(formTex);
        } else {
          console.log("da");
          formSubmit2(formTex);
        }
      });
    }

    async function formSubmit2(cel) {
      body.classList.add("sending");
      let data = serializeForm(cel);
      let response = await sendData2(data);
      if (response.ok) {
        let result = await response.json();
        body.classList.remove("sending");
        cel.reset();
        alert("Данные успешно отправлены");
        localStorage.clear();
        document.querySelector(".modal1").classList.remove("active");
        document.querySelector(".popup__body").classList.remove("active");
        document.querySelector(".qq").classList.add("active");
        document.querySelector(".qq__body").classList.add("active");
      } else {
        cel.reset();
        alert("Хьюстон, у нас проблемы: Код ошибки: " + response.status);
      }
    }
    async function formSubmit(cel) {
      body.classList.add("sending");
      let data = serializeForm(cel);
      let response = await sendData(data);
      if (response.ok) {
        let result = await response.json();
        body.classList.remove("sending");
        cel.reset();
        alert("Данные успешно отправлены");
        localStorage.clear();
        document.querySelector("#demoModal").style = "";
        document.querySelector("#testModal").style = "";

        // window.location = "/";
        // window.location = "./spasibo";
        // window.location = "/spasibo.html";
        document.querySelector(".modal-open").classList.remove("modal-open");
        document.querySelector(".modal-backdrop").remove();
      } else {
        cel.reset();
        alert("Хьюстон, у нас проблемы: Код ошибки: " + response.status);
      }
    }

    function serializeForm(formNode) {
      return new FormData(formNode);
    }

    async function sendData(data) {
      return await fetch(fr + "/send_mail.php", {
        method: "POST",
        body: data,
      });
    }

    async function sendData2(data) {
      return await fetch(fr + "/send_mail2.php", {
        method: "POST",
        body: data,
      });
    }
  });
  window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll(".tel"), function (e) {
      var t;
      function n(e) {
        e.keyCode && (t = e.keyCode), this.selectionStart < 3 && e.preventDefault();
        var n = "+7 (___) ___ ____",
          i = 0,
          r = n.replace(/\D/g, ""),
          s = this.value.replace(/\D/g, ""),
          a = n.replace(/[_\d]/g, function (e) {
            return i < s.length ? s.charAt(i++) || r.charAt(i) : e;
          });
        -1 != (i = a.indexOf("_")) && (i < 5 && (i = 3), (a = a.slice(0, i)));
        var o = n
          .substr(0, this.value.length)
          .replace(/_+/g, function (e) {
            return "\\d{1," + e.length + "}";
          })
          .replace(/[+()]/g, "\\$&");
        (!(o = new RegExp("^" + o + "$")).test(this.value) || this.value.length < 5 || (t > 47 && t < 58)) && (this.value = a),
          "blur" == e.type && this.value.length < 5 && (this.value = "");
      }
      e.addEventListener("input", n, !1),
        e.addEventListener("focus", n, !1),
        e.addEventListener("blur", n, !1),
        e.addEventListener("keydown", n, !1);
    });
  });
})();
