const legend = {
  0 : '#64B5F6',
  1 : '#FFB74D',
  2 : '#81C784',
  3 : '#E57373',
  4 : '#BA68C8',
  5 : '#90A4AE',
  6 : '#FFF176',
  7 : '#F06292',
};
// https://materialui.co/colors [300]s

const endDates = [
  new Date('1998-02-01'), // start
  new Date('2002-09-01'), // early years
  new Date('2009-09-01'), // primary school
  new Date('2014-09-01'), // secondary school
  new Date('2016-09-01'), // sixth form
  new Date('2017-09-01'), // gap year
  new Date('2021-09-01'), // university
  new Date(),             // first job
];

export function getWeeks(totalYears=80) {
  let output = [];
  for (let i=0; i<endDates.length - 1 ; ++i) {
    let ws = getWeeksDiff(endDates[i], endDates[i+1]) - 1;
    let arr = new Array(ws); for (let j=0; j<ws; ++j) arr[j] = legend[i];
    output = output.concat(arr);
  }
  // ensure the array is at least totalYears long
  while (output.length < totalYears * 52) {
    output.push('');
  }
  output = adjustForLabels(output);
  return output;
}

function getWeeksDiff(startDate, endDate) {
  const msInWeek = 1000 * 60 * 60 * 24 * 7;
  return Math.round(Math.abs(endDate - startDate) / msInWeek);
}

// Shift arrays to account for y-axis labels
function adjustForLabels(arr, pos=0, interval=53) {
  while (pos < arr.length) {
    arr.splice(pos, 0, '');
    pos += interval;
  }
  return arr;
}