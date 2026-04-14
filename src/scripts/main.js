'use strict';

const table = document.querySelector('.field');
const tBody = table.tBodies[0];

const addColumnBtn = document.querySelector('.append-column');
const addRowBtn = document.querySelector('.append-row');
const removeColumnBtn = document.querySelector('.remove-column');
const removeRowBtn = document.querySelector('.remove-row');

addColumnBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length < 10) {
    const trows = table.rows;

    for (let i = 0; i < trows.length; i++) {
      trows[i].insertCell(-1);
    }
  }

  if (table.rows[0].cells.length === 10) {
    addColumnBtn.disabled = true;
  }

  if (table.rows[0].cells.length > 2) {
    removeColumnBtn.disabled = false;
  }
});

addRowBtn.addEventListener('click', () => {
  if (table.rows.length < 10) {
    const newRow = tBody.insertRow(-1);

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      newRow.insertCell(i);
    }
  }

  if (table.rows.length === 10) {
    addRowBtn.disabled = true;
  }

  if (table.rows.length > 2) {
    removeRowBtn.disabled = false;
  }
});

removeColumnBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length > 2) {
    const trows = table.rows;

    for (let i = 0; i < trows.length; i++) {
      trows[i].deleteCell(trows[i].cells.length - 1);
    }
  }

  if (table.rows[0].cells.length === 2) {
    removeColumnBtn.disabled = true;
  }

  if (table.rows[0].cells.length < 10) {
    addColumnBtn.disabled = false;
  }
});

removeRowBtn.addEventListener('click', () => {
  if (table.rows.length > 2) {
    tBody.deleteRow(tBody.rows.length - 1);
  }

  if (table.rows.length === 2) {
    removeRowBtn.disabled = true;
  }

  if (table.rows.length < 10) {
    addRowBtn.disabled = false;
  }
});
