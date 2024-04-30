import moment from 'moment'

function MarriageType() {
  const name = document.querySelector(".name").value
  const dob = moment(document.querySelector(".dob").value).format("DD-MM-YYYY").split('-').join("")

  let sum = 0;
  let sum2 = 0;
  let sum3 = 0;
  let count = 0;

  // Extracting day from the date of birth
  let str = dob.substring(0, 2);
  let mulyank = parseInt(str, 10);

  while (mulyank !== 0) {
    let flag = mulyank % 10;
    sum += flag;
    mulyank = Math.floor(mulyank / 10);
  }

  let bhagyank = parseInt(dob);
  let dob_wrt = bhagyank;
  while (bhagyank !== 0) {
    let flag2 = bhagyank % 10;
    sum2 += flag2;
    bhagyank = Math.floor(bhagyank / 10);
  }
  while (sum2 !== 0) {
    let flag3 = sum2 % 10;
    sum3 += flag3;
    sum2 = Math.floor(sum2 / 10);
  }

  // Checking 2, 4, 6, 1
  let allSumStr = sum + "" + sum3 + "" + dob_wrt;
  let allSumInt = parseInt(allSumStr);
  let numOfDigits = allSumStr.length;
  let digits = new Array(numOfDigits);

  for (let a = 0; a < numOfDigits; a++) {
    digits[a] = allSumInt % 10;
    allSumInt = Math.floor(allSumInt / 10);
  }

  let found = false;
  for (let digit of digits) {
    if (digit === 2 || digit === 4 || digit === 6 || digit === 1) {
      count++;
    }
  }
  if (count >= 3) {
    found = true;
  }

  if (found) {
    return `${name} you are destined to experience a LOVE Marriage in your life's journey`;
  } else {
    return `${name} you are destined to experience an ARRANGED Marriage in your life's journey`;
  }
}

export default MarriageType
