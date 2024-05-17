document.addEventListener("DOMContentLoaded", function() {
    // Sayfa yüklendiğinde localStorage'dan counter değerlerini al ve ekrana yaz
    document.querySelectorAll(".counter").forEach(function(counterElement, index) {
        var key = "counter_" + index;
        var count = localStorage.getItem(key);
        if (count !== null) {
            counterElement.textContent = count;
        }
    });

    // Message, like ve follow butonlarına tıklama olaylarını dinle
    document.getElementById("messageButton").addEventListener("click", function() {
        updateCounter(0);
    });

    document.getElementById("likeButton").addEventListener("click", function() {
        updateCounter(1);
    });

    document.getElementById("followButton").addEventListener("click", function() {
        updateCounter(2);
    });

    // Counter değerini artırma ve localStorage'a kaydetme fonksiyonu
    function updateCounter(index) {
        var counterElement = document.querySelectorAll(".right-box")[index].querySelector(".counter");
        var currentCount = parseInt(counterElement.textContent);
        currentCount++;
        counterElement.textContent = currentCount;
        var key = "counter_" + index;
        localStorage.setItem(key, currentCount);
    }

    document.getElementById("reset").addEventListener("click", function() {
        // Tüm counter değerlerini sıfırla
        document.querySelectorAll(".counter").forEach(function(counterElement, index) {
            counterElement.textContent = 0;
            var key = "counter_" + index;
            localStorage.setItem(key, 0);
        });
    });
});