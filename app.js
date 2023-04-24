    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuChoices = document.getElementById('mobile-menu-choices');
    const ckziu = document.getElementById('ckziu');
    var countDownDate = new Date("May 28, 2022 20:15:00").getTime();

    setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      document.getElementById("licznik").innerHTML = days + "D " + hours + "H "
      + minutes + "M " + seconds + "S ";

      if (now > countDownDate) {
        document.getElementById("licznik").innerHTML = "WRÓCILIŚMY!";
      }
    }, 1000);


    function mobileMenuBehavior(){
      mobileMenu.classList.toggle('active');
      console.log('clicked');
      mobileMenuChoices.classList.toggle('active');
      ckziu.classList.toggle('active');
    }
    mobileMenu.addEventListener("click", mobileMenuBehavior);