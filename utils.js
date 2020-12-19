function deleteRowContaining() {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("myTabSheet");
  var data = ss.getDataRange().getValues();
  nextLine: for (var i = data.length - 1; i >= 2; i--) {
    if (data[i][1] !== "toto")
      continue nextLine;
    ss.deleteRow(i + 1);
  }
};

function addLineBetween() {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("myTabSheet");
  var data = ss.getDataRange().getValues();
  nextLine: for (var i = data.length - 2; i >= 1; i--) {
    if (data[i][1] == "previousPattern" && data[i + 1][1] != "nextPattern" &&
        data[i + 1][1] != "") {
      var insertLigne = i + 2
      ss.insertRows(insertLigne)
      ss.getRange(insertLigne, 2).setValue('newPattern');
    } else
      continue nextLine;
  }
};

function removeLineWithEmptyRow() {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("myTabSheet");
  var data = ss.getDataRange().getValues();
  nextLine: for (var i = data.length - 1; i >= 2; i--) {
    if (data[i][1] !== "")
      continue nextLine;
    ss.deleteRow(i + 1);
  }
}
