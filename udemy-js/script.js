/*let ad="Seval";
let soyad="Şentürk";
let yas="38";
let sehir="İstanbul";

mesaj=`Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'da yaşıyorum. Emekliliğe ${65 - yas} yılım kaldı.`;
console.log(mesaj);

let ogrenciler=[
    {"ad":"ahmet","soyad":"bilgi","notlar":[80,50,95]},
    {"ad":"selin","soyad":"öztürk","notlar":[85,80,100]},
    {"ad":"zeynep","soyad":"can","notlar":[30,50,45]},

];

for (let ogrenci of ogrenciler){
    let not_toplam=0;
    let not_adet=0;
    let ortalama=0;
        for(let not of ogrenci.notlar){
        not_toplam +=not;
        not_adet++;
    }
    ortalama=not_toplam/not_adet;

    console.log(`${ogrenci.ad} ${ogrenci.soyad} adlı öğrencinin not ortalaması : ${ortalama}`);

    if(ortalama>=50){
        console.log(`Başarılı`);
    }else{
        console.log("Başarısız");
    }
}

function yashesapla(dogumYili){
    return new Date().getFullYear()-dogumYili;
}
yasbilgisi=yashesapla(1985);

function emekliligeKAcYilKaldi(dogumYili){
    let yas=yashesapla(dogumYili);
    let kalanSene=65-yas;

    if(kalanSene > 0){
        console.log("Emekli olabilirsiniz")
    }else{
        console.log(`Emekliliğinize ${kalanSene} yıl kaldı.`)
    }
}
emekliligeKAcYilKaldi(1980);


function kelimeYaz(kelime,sayi){

    for(let i=0; i<sayi; i++){

        console.log(kelime) ;

    }

}
kelimeYaz("merhaba",5);

function dikdortgen(yukseklik,genislik){
    let cevre=(yukseklik+genislik)*2;
    let alan=(yukseklik*genislik);
    return `alan : ${alan} çevre : ${cevre}`;
}

let sonuc=dikdortgen(5,7);
console.log(sonuc);*/

function  tamBolenler(sayi){
    let sayilar=[];
        for (let i=2;i<sayi; i++){
            if(sayi % i ==0){
                sayilar.push(i);
            }
    }
        return sayilar;
}
console.log((tamBolenler(5646515)));