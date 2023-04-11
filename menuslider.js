function openmenu() {
  var x = document.getElementById("sidebar");
  var computedStyle = window.getComputedStyle(x);
  if (computedStyle.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
