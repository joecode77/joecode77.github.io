function display() {
  document.getElementById("display").innerHTML = "output";
  var name = document.getElementById("name").value;
  var matric = document.getElementById("matric").value;

  var output =
    "<span>Name:</span>" + name + "<br><span>Matric Number:</span>" + matric;

  document.getElementById("display").innerHTML = output;
}
