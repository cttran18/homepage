document.querySelector('#item-input').addEventListener('input', (event) => {
    document.querySelector('#result_text').textContent = event.currentTarget.value
  });

$(".form-input").submit(function(e) {
    e.preventDefault();
  
    var value = $(".div-input").val();
  
    $("<div class='outputs'>" + value + "</div>").appendTo($(".output"));
});