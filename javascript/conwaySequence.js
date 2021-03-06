let beforeSequence = [];
let afterSequence = [];
let sequenceArray = [];

let counter = 0;
let isChange = false;
let sequenceLength = null;
let currentNum = null;

function conwayGenerator(value, line) {
  value = validateValue(value);
  line = validateLine(line);
  if (!value || !line) return;

  for (let i = 0; i <= 25; i++) {
    if (i === 0) {
      sequenceArray.push([value]);
      beforeSequence = [value];
    } else {
      // console.log(i, beforeSequence);
      let result = sequenceMaker(beforeSequence);
      sequenceArray.push(result);
      beforeSequence = result;
    }
  }
  // console.log("sequenceArray : ", sequenceArray);
  printOutput(line);
}

function sequenceMaker(sequence) {
  counter = 0;
  sequenceLength = sequence.length - 1;
  afterSequence = [];
  currentNum = null;

  sequence.forEach((val, idx) => {
    if (sequenceLength === 0) {
      afterSequence.push(1, val);
      return;
    }

    if (currentNum !== val) {
      isChange = true;
    } else {
      isChange = false;
    }

    if (isChange && idx !== 0) {
      afterSequence.push(counter, currentNum);
      counter = 0;
    }

    currentNum = val;
    counter += 1;

    if (idx === sequenceLength) {
      afterSequence.push(counter, currentNum);
    }
  });

  return afterSequence;
}

function validateValue(value) {
  if (value > 0 && value < 100) {
    return value;
  } else {
    alert("입력하신 숫자값이 유효하지 않습니다.");
    return false;
  }
}

function validateLine(line) {
  if (line > 0 && line <= 25) {
    return line;
  } else {
    alert("입력하신 라인값이 유효하지 않습니다.");
    return false;
  }
}

function printOutput(line) {
  line = line - 1;
  alert(sequenceArray[line]);
}

// input (R,L)
$(function () {
  $("#btn-submit").on("click", () => {
    let number = parseInt($("#number").val());
    let line = parseInt($("#line").val());
    conwayGenerator(number, line);
  });
});




/*
let beforeSequence = [];
let afterSequence = [];
let sequenceArray = [];

let counter = 0;
let isChange = false;
let sequenceLength = null;
let currentNum = null;

function conwayGenerator(value, line) {
  value = validateValue(value);
  line = validateLine(line);
  if (!value || !line) return;

  for (let i = 0; i <= 25; i++) {
    if (i === 0) {
      sequenceArray.push([value])
      beforeSequence = [value];
    } else {
      console.log(i, beforeSequence)
      let result = sequenceMaker(beforeSequence)
      sequenceArray.push(result)
      beforeSequence = result
    }
  }
  console.log('sequenceArray : ', sequenceArray)
  printOutput(line)
}

function sequenceMaker(sequence) {
  counter = 0;
  sequenceLength = sequence.length - 1;
  afterSequence = [];
  currentNum = null;

  sequence.forEach((val, idx) => {
    if (sequenceLength === 0) {
      afterSequence.push(1, val);
      return;
    }

    if (currentNum !== val) {
      isChange = true;
    } else {
      isChange = false;
    }

    if (isChange && idx !== 0) {
      afterSequence.push(counter, currentNum);
      counter = 0;
    }

    currentNum = val;
    counter += 1;

    if (idx === sequenceLength) {
      afterSequence.push(counter, currentNum);
    }
  });

  return afterSequence;
}

function validateValue(value) {
  if (value > 0 && value < 100) {
    return value
  } else {
    alert('유효한 값이 아닙니다.')
    return false;
  }
}

function validateLine(line) {
  if (line > 0 && line < 25) {
    return line
  } else {
    alert('유효한 값이 아닙니다.')
    return false;
  }
}

function printOutput(line) {
  line = line - 1;
  alert(sequenceArray[line])
}





// input(R,L)
conwayGenerator(1, 6)
*/




/*
let beforeSequence = [];
let afterSequence = [];
let sequenceArray = [];

let counter = 0;
let isChange = false;
let sequenceLength = null;
let currentNum = null;

function conwayGenerator(value, line) {
  value = validateValue(value);
  line = validateLine(line);
  if (!value || !line) return;

  for (let i = 0; i <= 25; i++) {
    if (i === 0) {
      sequenceArray.push([value]);
      beforeSequence = [value];
    } else {
      let result = sequenceMaker(beforeSequence);
      sequenceArray.push(result);
      beforeSequence = result;
    }
  }
  printOutput(line);
}

function sequenceMaker(sequence) {
  counter = 0;
  sequenceLength = sequence.length - 1;
  afterSequence = [];
  currentNum = null;

  sequence.forEach((val, idx) => {
    if (sequenceLength === 0) {
      afterSequence.push(1, val);
      return;
    }

    if (currentNum !== val) {
      isChange = true;
    } else {
      isChange = false;
    }

    if (isChange && idx !== 0) {
      afterSequence.push(counter, currentNum);
      counter = 0;
    }

    currentNum = val;
    counter += 1;

    if (idx === sequenceLength) {
      afterSequence.push(counter, currentNum);
    }
  });

  return afterSequence;
}

function validateValue(value) {
  if (value > 0 && value < 100) {
    return value;
  } else {
    alert("유효한 값이 아닙니다.");
    return false;
  }
}

function validateLine(line) {
  if (line > 0 && line < 25) {
    return line;
  } else {
    alert("유효한 값이 아닙니다.");
    return false;
  }
}

function printOutput(line) {
  line = line - 1;
  document.querySelector("#app").innerHTML = sequenceArray[line];
}

// input(R,L)
conwayGenerator(1, 6);


*/