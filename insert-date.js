// Add a menu with some items, some separators, and a sub-menu.
function onOpen() {
  DocumentApp.getUi()
      .createMenu('Utilities')
      .addItem('Insert Date', 'insertAtCursor')
      .addToUi();
}

// Inserts the date at the current cursor location.
function insertAtCursor() {
  var cursor = DocumentApp.getActiveDocument().getCursor();
  if (cursor) {
    var date = (new Date).toLocaleDateString('default', {
      day : 'numeric',
      month : 'long',
      year : 'numeric'
    }); // use your local (browser) date format with month name
    if (!cursor.insertText(date)) {
      DocumentApp.getUi().alert('Cannot insert text at this cursor location.');
    }
  } else {
    DocumentApp.getUi().alert('Cannot find a cursor in the document.');
  }
}
