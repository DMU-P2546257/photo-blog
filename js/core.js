var myIndex = 0; // This is telling the slideshow to start at number zero.

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");// Hides all slideshow images
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++; // Get next image
  if (myIndex > x.length) {myIndex = 1} // Go back to first slideshow image
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
