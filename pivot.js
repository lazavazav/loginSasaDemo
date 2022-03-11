$(function () {
  var renderers = $.extend(
    $.pivotUtilities.renderers,
    $.pivotUtilities.plotly_renderers,
    $.pivotUtilities.d3_renderers,
    $.pivotUtilities.export_renderers
  );
  Papa.parse('testSasa.csv', {
    download: true,
    skipEmptyLines: true,
    complete: function (parsed) {
      $('#output').pivotUI(parsed.data, { renderers: renderers }, true);
    },
  });
});

$('.pvtAttr').draggable();

//function to smooth scroll to top from footer for Safari
function scrollToTop(event) {
  if (supportsSmoothScrolling()) {
    return;
  }
  event.preventDefault();
  const scrollToElem = document.getElementById('top');
  SmoothVerticalScrolling(scrollToElem, 300, 'top');
}

function supportsSmoothScrolling() {
  const body = document.body;
  const scrollSave = body.style.scrollBehavior;
  body.style.scrollBehavior = 'smooth';
  const hasSmooth = getComputedStyle(body).scrollBehavior === 'smooth';
  body.style.scrollBehavior = scrollSave;
  return hasSmooth;
}

function SmoothVerticalScrolling(element, time, position) {
  let eTop = element.getBoundingClientRect().top;
  let eAmt = eTop / 100;
  let curTime = 0;
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt, position);
    curTime += time / 100;
  }
}

function SVS_B(eAmt, position) {
  if (position == 'center' || position == '') window.scrollBy(0, eAmt / 2);
  if (position == 'top') window.scrollBy(0, eAmt);
}
//function for Safari to smooth scroll to about section
function scrollToAbout(event) {
  if (supportsSmoothScrolling()) {
    return;
  }
  event.preventDefault();
  const scrollToElem = document.getElementById('about');
  SmoothVerticalScrolling(scrollToElem, 300, 'top');
}

function supportsSmoothScrolling() {
  const body = document.body;
  const scrollSave = body.style.scrollBehavior;
  body.style.scrollBehavior = 'smooth';
  const hasSmooth = getComputedStyle(body).scrollBehavior === 'smooth';
  body.style.scrollBehavior = scrollSave;
  return hasSmooth;
}

function SmoothVerticalScrolling(element, time, position) {
  let eTop = element.getBoundingClientRect().top;
  let eAmt = eTop / 100;
  let curTime = 0;
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt, position);
    curTime += time / 100;
  }
}

function SVS_B(eAmt, position) {
  if (position == 'center' || position == '') window.scrollBy(0, eAmt / 2);
  if (position == 'top') window.scrollBy(0, eAmt);
}
//function for smooth scrolling to contact section for Safari
function scrollToContact(event) {
  if (supportsSmoothScrolling()) {
    return;
  }
  event.preventDefault();
  const scrollToElem = document.getElementById('contactUs');
  SmoothVerticalScrolling(scrollToElem, 300, 'top');
}

function supportsSmoothScrolling() {
  const body = document.body;
  const scrollSave = body.style.scrollBehavior;
  body.style.scrollBehavior = 'smooth';
  const hasSmooth = getComputedStyle(body).scrollBehavior === 'smooth';
  body.style.scrollBehavior = scrollSave;
  return hasSmooth;
}

function SmoothVerticalScrolling(element, time, position) {
  let eTop = element.getBoundingClientRect().top;
  let eAmt = eTop / 100;
  let curTime = 0;
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt, position);
    curTime += time / 100;
  }
}

function SVS_B(eAmt, position) {
  if (position == 'center' || position == '') window.scrollBy(0, eAmt / 2);
  if (position == 'top') window.scrollBy(0, eAmt);
}

// function downloadCSV(csv, filename) {
//   let csvFile;
//   let downloadLink;

//   csvFile = new Blob([csv], { type: 'text/csv' });

//   downloadLink = document.createElement('a');

//   downloadLink.download = filename;

//   downloadLink.href = URL.createObjectURL(csvFile);

//   downloadLink.style.display = 'none';

//   document.body.appendChild(downloadLink);

//   downloadLink.click();
// }

// function exportTableToCSV(filename, separator) {
//   const csv = [];
//   const rows = document.querySelectorAll('table tr');

//   for (let i = 0; i < rows.length; i++) {
//     let row = [];

//     const cols = rows[i].querySelectorAll('td, th');

//     for (let j = 0; j < cols.length; j++)
//       // Add double quote to make the value stay in the same column if is separated by comma
//       row.push(`"${cols[j].innerText}"`);

//     csv.push(row.join(separator));
//   }

//   downloadCSV(csv.join('\n'), filename);
// }

// exportTableToCSV('filename.csv', ',');

function download_csv(csv, filename) {
  var csvFile;
  var downloadLink;

  // CSV FILE
  csvFile = new Blob([csv], { type: 'text/csv' });

  // Download link
  downloadLink = document.createElement('a');

  // File name
  downloadLink.download = filename;

  // We have to create a link to the file
  downloadLink.href = window.URL.createObjectURL(csvFile);

  // Make sure that the link is not displayed
  downloadLink.style.display = 'none';

  // Add the link to your DOM
  document.body.appendChild(downloadLink);

  // Lanzamos
  downloadLink.click();
}

function export_table_to_csv(html, filename) {
  var csv = [];
  var rows = document.querySelectorAll('.pvtTable tr');

  for (var i = 0; i < rows.length - 1; i++) {
    var row = [],
      cols = rows[i].querySelectorAll('td, th');

    for (var j = 0; j < cols.length - 1; j++) row.push(cols[j].innerText);

    csv.push(row.join(','));
  }

  // Download CSV
  download_csv(csv.join('\n'), filename);
}
var html = document.querySelector('.pvtTable').outerHTML;
