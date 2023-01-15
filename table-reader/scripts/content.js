const table = document.querySelector(".ui-datatable-tablewrapper table");

function getRows(table) {
  return [...table.rows].map((row) =>
    [...row.children].map((child) => child.innerText)
  );
}

function createObject(rows) {
  const headers = rows.shift();
  return rows.map((row) => {
    let object = {};
    row.map((value, i) => {
      object[headers[i]] = getBetterValue(headers[i], value);
    });
    return object;
  });
}

function getBetterValue(initialHeader, initialValue) {
  const header = initialHeader.split("");
  const value = initialValue.split("");

  if (header.every((letter) => value.includes(letter))) {
    return initialValue.split("").splice(header.length).join("");
  } else {
    return initialValue;
  }
}

function addToPage(obj) {
  obj.map((elements) => {
    let date = `${elements["Start Date"]} - ${elements["End Date"]}`;
    let name = `${elements["Resource Name"]}`;

    let dateParagraph = document.createElement("p");
    dateParagraph.innerText = date;

    let nameParagraph = document.createElement("p");
    nameParagraph.innerText = name;

    document.body.appendChild(dateParagraph);
    document.body.appendChild(nameParagraph);
  });
}

if (table) {
  const rows = getRows(table);
  const tableAsObject = createObject(rows);
  addToPage(tableAsObject);
}
