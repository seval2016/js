
const gelir = document.querySelector("#gelir");
const krediNotu = document.querySelector("#krediNotu");

const hesapla = document.querySelector("#hesapla");
const sonuc = document.querySelector("#sonuc");

const krediSinir = 1000;
const oranSinir = 20;

hesapla.addEventListener("click", () => {
  let kNotu = parseFloat(krediNotu.value);
  let kullaniciGelir = parseFloat(gelir.value);

  if (isNaN(kNotu) || isNaN(kullaniciGelir)){
    sonuc.innerHTML = '<div class="alert alert-danger fs-6">Lütfen geçerli değer giriniz.</div>';
    return;
  }

if( kullaniciGelir >= krediSinir && kNotu >= oranSinir ){
    sonuc.innerHTML = `<h4 class="alert alert-info mt-3 fs-6" id="sonuc">Kullanıcı Kredi başvurusu için uygundur</h4>`;
}else{
    sonuc.innerHTML = `<h4 class="alert alert-danger mt-3 fs-6" id="sonuc">Kullanıcı Kredi başvurusu için uygun değildir</h4>`;
}

});
