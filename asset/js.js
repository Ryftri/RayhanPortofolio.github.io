$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 550);
  $("a.tulisan-ubah").toggleClass("scroll", $(this).scrollTop() > 550);
  $("a.ubah-warna").toggleClass("scrollbawah", $(this).scrollTop() > 550);
});

// window.addEventListener("scroll", animkeluar);

// function animkeluar() {
//   let animmulai = document.querySelectorAll(".play");

//   for (let i = 0; i < animmulai.length; i++) {
//     let tinggilayar = window.innerHeight;
//     let bagAtas = animmulai[i].getBoundingClientRect().top;
//     let poin = 150;

//     if (bagAtas < tinggilayar - poin) {
//       animmulai[i].classList.add("aktif");
//     }
//   }
// }

function tekanUntukScroll() {
  const halaman2 = document.querySelector(".tentangsaya");
  const halaman3 = document.querySelector(".sertifsaya");
  const halaman4 = document.querySelector(".contact");
  const halaman5 = document.querySelector(".projeksaya");
  const tombol = document.querySelectorAll(".tombol");

  for (let alltombol of tombol) {
    alltombol.addEventListener("click", function (event) {
      const target = event.target;

      if (target.classList.contains("halrum")) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      if (target.classList.contains("halsaya")) {
        halaman2.scrollIntoView(false);
        return;
      }

      if (target.classList.contains("halsertif")) {
        halaman3.scrollIntoView();
        return;
      }

      if (target.classList.contains("halcontact")) {
        halaman4.scrollIntoView();
        return;
      }

      if (target.classList.contains("halproject")) {
        halaman5.scrollIntoView();
        return;
      }
    });
  }
}

tekanUntukScroll();
