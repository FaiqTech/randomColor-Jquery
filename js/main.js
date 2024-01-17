$(document).ready(function () {
  // Generate random color on button click
  $(".generate-btn").click(function () {
    var randomColor = generateRandomColor();

    // Update UI with the generated color
    updateUI(randomColor);
  });

  // Copy Color code on button click
  $(".copy-btn").click(function () {
    copyToClipboard($("#inputField"));

    // Show copied message
    showCopiedMessage($("#inputField").val());
  });

  function generateRandomColor() {
    var characters = "0123456789abcdef";
    var randomColor = "#";

    for (var i = 0; i < 6; i++) {
      randomColor += characters[Math.floor(Math.random() * 16)];
    }

    return randomColor;
  }

  function updateUI(color) {
    $("#inputField").val(color).css({
      color: color,
      "border-color": color,
    });

    $(".color-preview, .copy-btn").css("background-color", color);
  }

  function copyToClipboard(element) {
    element.select();
    document.execCommand("copy");
  }

  function showCopiedMessage(color) {
    // Show the copied message
    $(".alert-msg")
      .addClass("slide-effect")
      .text("copied " + color + " to clipboard");

    // Remove animation class after 2 seconds
    setTimeout(function () {
      $(".alert-msg").removeClass("slide-effect").text("");
    }, 2000);
  }
});
