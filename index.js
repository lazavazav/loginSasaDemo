let health = document.getElementById('healthDonut');
Chart.defaults.global.defaultFontSize = 16;
let healthChart = new Chart(health, {
  type: 'doughnut',
  data: {
    labels: [
      'Health Indicators with Parity Achieved',
      ' Health Disparity with Gap to Close',
    ],
    datasets: [
      {
        data: [47, 53],
        datalabels: {
          color: '#ffffff',
          formatter: function (value) {
            return value + '%';
          },
        },
        backgroundColor: ['#375bad', '#b52b42'],
        hoverOffset: 4,
      },
    ],
  },
});

let education = document.getElementById('educationDonut');
Chart.defaults.global.defaultFontSize = 16;
let edChart = new Chart(education, {
  type: 'doughnut',
  data: {
    labels: [
      'Education Indicators with Parity Achieved',
      'Education Disparity with Gap to Close',
    ],
    datasets: [
      {
        data: [75, 25],
        datalabels: {
          color: '#ffffff',
          formatter: function (value) {
            return value + '%';
          },
        },
        backgroundColor: ['#35a6bd', '#f7d745'],
        hoverOffset: 4,
      },
    ],
  },
});

let econ = document.getElementById('economicsDonut');
Chart.defaults.global.defaultFontSize = 16;
let econChart = new Chart(econ, {
  type: 'doughnut',
  data: {
    labels: [
      'Economics Indicators: Parity Achieved',
      'Economics Disparity: Gap to Close',
    ],
    datasets: [
      {
        data: [6, 94],
        datalabels: {
          color: '#ffffff',
          formatter: function (value) {
            return value + '%';
          },
        },
        backgroundColor: ['#7b35bd', '#ed621c'],
        hoverOffset: 4,
      },
    ],
  },
});

let justice = document.getElementById('justiceDonut');
Chart.defaults.global.defaultFontSize = 16;
let justiceChart = new Chart(justice, {
  type: 'doughnut',
  data: {
    labels: [
      'Criminal Justice Indicators: Parity Achieved',
      'Criminal Justice Disparity: Gap to Close',
    ],
    datasets: [
      {
        data: [12, 88],
        datalabels: {
          color: '#ffffff',
          formatter: function (value) {
            return value + '%';
          },
        },
        backgroundColor: ['#0862c2', '#2ea668'],
        hoverOffset: 4,
      },
    ],
  },
});

let mobility = document.getElementById('mobilityDonut');
Chart.defaults.global.defaultFontSize = 16;
let mobilityChart = new Chart(mobility, {
  type: 'doughnut',
  data: {
    labels: [
      'Social Mobility Indicators: Parity Achieved',
      ' Social Mobility Disparity: Gap to Close',
    ],
    datasets: [
      {
        data: [50, 50],
        datalabels: {
          color: '#ffffff',
          formatter: function (value) {
            return 'TBD';
          },
        },
        backgroundColor: ['#ed5311', '#b50205'],
        hoverOffset: 4,
      },
    ],
  },
});

function scrollToSection(event) {
  if (supportsSmoothScrolling()) {
    return;
  }
  event.preventDefault();
  const scrollToElem = document.getElementById('donutSection');
  SmoothVerticalScrolling(scrollToElem, 300, 'top');
}

//function to smooth scroll to donut section for safari
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
