$(document).ready(function(){
  
  $("#word").keyup(function() {
    if($("#word").val().length < 2) {
      $("#words").html("inca nu am cuvinte ...")
      return
    }
    let words = gWordList.filter(function(word){
      return word.startsWith($("#word").val())
    })
    words.forEach(function(word, index){
      this[index] = word + "<br>"
    }, words)
    $("#words").html(words)
  });

})