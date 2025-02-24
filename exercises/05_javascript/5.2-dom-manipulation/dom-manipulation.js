/**
 * Sort table rows alphabetically based on the values in a column
 *
 * @param {Number} col column index (zero based)
 * @param {HTMLTableElement} table the table to be sorted
 */
function sortTableByColumn(col, table) {
  // TODO: Implement this function as instructed
  var switching = true;
  var rows, i, x, y, shouldSwitch;

  while ( switching ){

    switching = false;
    rows = table.rows;

    for ( i = 1; i < rows.length -1; i++  ){

      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[col];
      y = rows[i+1].getElementsByTagName("TD")[col];

      if ( x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() ){
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch){
      rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
      switching = true;
    }

  }
}

/**
 * DO NOT EDIT THE CODE BELOW!
 *
 * The code below is there just to make it easier to test the code.
 *
 * If your function works correctly you should be able to sort the table
 * simply by clicking any column heading and the table should be immediately
 * sorted by values in that column.
 */

// find the table element
const table = document.getElementById('sortable');

// attach an event listener to each th element's click event
table.querySelectorAll('thead th').forEach((th, i) =>
  th.addEventListener('click', () => {
    sortTableByColumn(i, table);
  })
);