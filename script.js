var hue = $("[name=hue]")[0].val;
var luminosity = $("[name=luminosity]")[0].val;

// slider functionality and value notification

var slider = $("#count")[0];
var output = $("#value")[0];
$(output).html(slider.value);

slider.oninput = function() {
  $(output).html(this.value);
};

// color generation function
var colorBox = $("#colorBox");

$("#submit").on("click", function(event) {
  event.preventDefault();
  console.log(hue);
  console.log(luminosity);
  $(colorBox).css({
    backgroundColor: randomColor({ hue, luminosity })
  });
});
