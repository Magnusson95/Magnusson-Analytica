$(document).ready(function () {
  var viz, workbook, activeSheet;
  var placeholderDiv = document.getElementById("tableauViz");

  var url =
    "https://public.tableau.com/views/GlobalInnovationIndex2019/Dashboard1";
  var options = {
    width: "100%",
    height: "1200px",
    hideToolbar: true,
    onFirstInteractive: function () {
      workbook = viz.getWorkbook();
      activeSheet = workbook.getActiveSheet();
    },
  };
  viz = new tableau.Viz(placeholderDiv, url, options);
});
s;
