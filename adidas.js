
document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('changingHeader');
    var texts = ['SIGN UP & GET 15% OFF', 'FREE DELIVERY, RETURN & EXCHANGE', 'EXTRA 5% OFF ON PREPAID ORDERS']; // Add your desired texts here
    var currentTextIndex = 0;
  
    function changeText() {
      header.textContent = texts[currentTextIndex];
      currentTextIndex = (currentTextIndex + 1) % texts.length;
    }
  
    // Change text every 3 seconds (3000 milliseconds)
    setInterval(changeText, 2000);
  });
  
