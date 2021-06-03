//Business Logic
function add1(number1, number2) {
  return number1 + number2;
}
function add2(number1, number3) {
  return number1 + number3;
}
function add3(number2, number3) {
  return number2 + number3;
}


//User Interface Logic
$(document).ready(function() {
  $("form#triangles").submit(function(event) {
    event.preventDefault();

    const number1 = parseInt($('input#number1').val());
    const number2 = parseInt($('input#number2').val());
    const number3 = parseInt($('input#number3').val());
    const sum1 = add1(number1, number2);
    const sum2 = add2(number1, number3);
    const sum3 = add3(number2, number3);

    let triangleType = "";

    if (number1 === 0 || number2 === 0 || number3 === 0) {
      triangleType = ('not a triangle');
    } else if (number1 === number2 && number1 === number3) {
      triangleType = (" Equilateral"); 
    } else if (number1 === number2 && sum1 >= number3 || number1 === number3 && sum2 >= number2 || number2 === number3 && sum3 >= number1) {
      triangleType = (' Isosceles'); 
    } else if (sum1 <= number3 || sum2 <= number2 || sum3 <= number3) {
      triangleType = ('not a triangle');
    } else  {
      triangleType = (' Scalene');
    }
  
    $('#triangleType').text(triangleType);
    $('#result').show();
  });  
});