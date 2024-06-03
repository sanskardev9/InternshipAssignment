  document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("openModalBtn");
    var span = document.getElementsByClassName("close")[0];
    
    

    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
    $(document).ready(function() {
      var owl = $('.owl-carousel');
      owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      });

    

      $('.custom-dots .dot').click(function() {
        var slideIndex = $(this).data('slide');
        var owlItems = owl.find('.owl-item').not('.cloned').length;

        owl.trigger('to.owl.carousel', [(slideIndex - 1) * itemsPerGroup, 300]);
  
        $('.custom-dots .dot').removeClass('active');
        $(this).addClass('active');
      });
  
      $('.custom-dots .dot').first().addClass('active');

      owl.on('changed.owl.carousel', function(event) {
        var owlItems = owl.find('.owl-item').not('.cloned').length;
        var itemsPerGroup = Math.ceil(owlItems / 3); 
        var index = Math.floor((event.item.index % owlItems) / itemsPerGroup) + 1;
  
        $('.custom-dots .dot').removeClass('active');
        $('.custom-dots .dot[data-slide="' + index + '"]').addClass('active');
      });
    });
  });

  document.querySelector(".firDiv").addEventListener("click",function(){
    document.querySelector('.img1 img').src = "../images/4.jpg"
  })

  document.querySelector(".secDiv").addEventListener("click",function(){
    document.querySelector('.img1 img').src = "../images/image@2x.png"

    
  })

  document.querySelector(".thirDiv").addEventListener("click",function(){
    document.querySelector('.img1 img').src = "../images/2.png"
    
  })