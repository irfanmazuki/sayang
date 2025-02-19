$(".polaroids li a").on("mouseenter", function () {
    var isRunning = $(this).data("isRunning");
    if (!isRunning) {
      $(this).data("isRunning", true);
      var $this = $(this).addClass("shake");
      setTimeout(function () {
        $this.removeClass("shake");
        $this.data("isRunning", false);
      }, 4500);
    }
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.getElementById('hearts-container');
  
    // Function to create falling hearts
    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      if(Math.random() < 0.5){
        heart.classList.add("blue-heart");      
      }
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDuration = `${2 + Math.random() * 3}s`; // Random fall duration
      heartsContainer.appendChild(heart);
  
      // Remove heart after animation
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }

    // Start falling hearts
    setInterval(createHeart, 200);

  });