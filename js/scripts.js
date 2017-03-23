var triangleCheck = function(sideOne, sideTwo, sideThree) {
  debugger;
  if ((sideOne === sideTwo) && (sideOne === sideThree)) {
    alert("Equilateral: All sides are equal.")
  }
  else if ((sideOne + sideTwo <= sideThree) || (sideOne + sideThree <= sideTwo) || (sideTwo + sideThree <= sideOne)) {
    alert("NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.")
  }
  else if (((sideOne === sideTwo) && (sideOne !== sideThree)) || ((sideOne === sideThree) && (sideOne !== sideTwo)) || ((sideTwo === sideThree) && (sideOne !== sideTwo))) {
    alert("Isosceles: Exactly 2 sides are equal.")
  }
  else if ((sideOne !== sideTwo) && (sideOne !== sideThree) && (sideTwo !== sideThree)) {
    alert("Scalene: No sides are equal.")
  }
};

$(document).ready(function() {
  $("#some-form").submit(function(event) {
    event.preventDefault();
    var inputOne = parseInt($("input#side-one").val());
    var inputTwo = parseInt($("input#side-two").val());
    var inputThree = parseInt($("input#side-three").val());
    triangleCheck(inputOne, inputTwo, inputThree);
  });
});
