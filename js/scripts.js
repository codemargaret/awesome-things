$(document).ready(function(){
  $("#awesome").submit(function(event){
    event.preventDefault();
    var foodInput = $("input#food").val();
    var animalInput = $("input#animal").val();
    var colorInput = $("input#color").val();
    var bookInput = $("input#book").val();

    var arrayOne = [foodInput, animalInput, colorInput, bookInput];
    var arrayTwo = [];
    arrayTwo.push(arrayOne[1],arrayOne[0],arrayOne[2],arrayOne[3]);
    $("#things").show();
    $("#item1").text(arrayTwo[0]);
    $("#item2").text(arrayTwo[1]);
    $("#item3").text(arrayTwo[2]);
    $("#item4").text(arrayTwo[3]);
  });
});
