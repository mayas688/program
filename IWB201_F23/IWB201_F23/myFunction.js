let disc = []; // إنشاء مصفوفة لتخزين العناصر
for (let i = 1; i <= 10; i++) {
  disc[i] = document.querySelector(".disc" + i);
}
let check = []; // إنشاء مصفوفة لتخزين العناصر
for (let i = 1; i <= 10; i++) {
  check[i] = document.querySelector(".check" + i);
}

//اظهار و اخفاء التفاصيل
for (let i = 1; i <= 10; i++) {
  check[i].addEventListener("change", function () {
    if (check[i].checked) {
      disc[i].classList.remove("disc" + i);
    } else {
      disc[i].classList.add("disc" + i);
    }
  });
}
let btn = document.querySelector(".button");
let divForm = document.querySelector(".none-form");
let msg = document.querySelector(".misgge");
let missgge = document.querySelector(".missgge-none");
let radios = document.querySelectorAll('input[type="radio"]');
let txt = document.querySelectorAll('input[type="text"]');
btn.addEventListener("click", function () {
  if (checkRadio()) {
    divForm.classList.remove("none-form");
  } else {
    alert("الرجاء اختيار عقار");
    divForm.classList.add("none-form");
  }
});
function checkRadio() {
  let isRadioSelected = false;

  radios.forEach(function (radio) {
    if (radio.checked) {
      isRadioSelected = true;
    }
  });

  return isRadioSelected;
}

document.getElementById("carForm").addEventListener("submit", function (e) {
  e.preventDefault();
  radios.forEach(function (radio) {
    if (radio.checked) {
      let row = radio.closest("tr");
      let price = row.children[2].textContent;
      let description = row.children[3].textContent;
      let location = row.children[4].textContent;
      msg = `السعر ${price}<br>
      وصف: ${description}<br>
      الموقع: ${location}<br>`;

      for (let i = 0; i < txt.length; i++) {
        txt[i].value = "";
      }
      alert("تمت الاضافة للسلة");
      let properties = JSON.parse(localStorage.getItem("properties")) || [];
      properties.push({ price, description, location });
      localStorage.setItem("properties", JSON.stringify(properties));
      divForm.classList.add("none-form");
    }
  });
});
