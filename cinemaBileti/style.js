const container = document.querySelector('.container'); //Container elemanını seç
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');

getFromLocalStorage();
calculateTotal();

container.addEventListener('click', function (e) {//e parametresi hangi elemana tıklandıysa o bilgiyi verir
    if (e.target.classList.contains('seat')) { //Eğer tıklanan seat clasına sahip koşulu sağlar
        e.target.classList.toggle('selected'); //Class eklenir. toggle methodu varsa siler yoksa ekler.
        calculateTotal();
    }
    ;
});

select.addEventListener('change', function (e) { //selected değiştiğinde fiyatların güncel olması için
    calculateTotal();
});

function calculateTotal() {
    const selectedSeats = container.querySelectorAll('.seat.selected');// seat ve selected classına sahip koltukları belirleme


    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function (seat) { //seçili elemanlar içerisinde tek tek dolaşıp dizi içerisine atma
        selectedSeatsArr.push(seat);

    });

    seats.forEach(function (seat) { // tüm elemanlar içerisinde tek tek dolaşıp dizi içerisine atama
        seatsArr.push(seat);
    });

//LS içerisinde saklayacağımız elemanı oluşturma

    let selectedSeatIndexs = selectedSeatsArr.map(function (seat) { //map metodu ile teker teker dolaşır
        return seatsArr.indexOf(seat); //  seçili elemanın indexini alır
    })
    console.log(selectedSeatIndexs);

    let selectedSeatCount = selectedSeats.length; // seat ve selected classına sahip koltukların sayısını değişkene atama
    count.innerText = selectedSeatCount; //count'un textine toplam seçilen koltuk sayısı eklenir.
    amount.innerText = select.value * selectedSeatCount; //toplam ücreti yazdırmak için hesaplanır ve değişkene atama yapılır
    saveToLocalStorage(selectedSeatIndexs);
}

function getFromLocalStorage() { //localstorage kaydedilen bilgileri alma ve uygulama üzerinde kullanma
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats != null && selectedSeats.length > 0) {
        seats.forEach(function (seat, index) {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex != null) {
        select.selectedIndex = selectedMovieIndex;
    }
}

function saveToLocalStorage(indexs) {
    localStorage.setItem('selectedSeats', JSON.stringify(indexs)); //JSON stringify methodu aracılığı ile localstorage'e kaydedyoruz.
    localStorage.setItem('selectedMovieIndex', select.selectedIndex );

}