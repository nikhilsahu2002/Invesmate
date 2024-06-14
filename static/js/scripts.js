$(document).ready(function () {
  var modal = $("#chartModal");
  var btn = $("#openModal");
  var span = $(".close");

  btn.on("click", function () {
    modal.show();
  });

  span.on("click", function () {
    modal.hide();
  });

  $(window).on("click", function (event) {
    if (event.target.id === "chartModal") {
      modal.hide();
    }
  });
});

$("#chartForm").on("submit", function (event) {
  if (!$("#chart_type").val()) {
    alert("Please select a chart type.");
    event.preventDefault();
  }
});
