// Get Dom ID
function dom(id) {
  return document.getElementById(id);
}
// Get number
var number = [];
dom("btn").onclick = function () {
  var num = Number(dom("inputNum").value);
  number.push(num);
  dom("text").innerHTML = "Mảng hiện tại " + number;
  dom("inputNum").value = "";
  dom("inputNum").focus();
};
// Clear
dom("btnClear").onclick = function () {
  number = [];
  dom("text").innerHTML = number;
};
// Exercise 1 : Tổng số dương trong mảng
dom("btn1").onclick = function () {
  var sum = 0;
  for (var i = 0; i < number.length; i++) {
    if (number[i] > 0) {
      sum += number[i];
    }
  }
  dom("text1").innerHTML = "Tổng các số dương trong mảng:  " + sum;
};
// Exercise 2 : Đếm có bao nhiêu số dương trong mảng
dom("btn2").onclick = function () {
  var count = 0;
  for (var i = 0; i < number.length; i++) {
    if (number[i] > 0) {
      count += 1;
    }
  }
  dom("text2").innerHTML = "Số lượng số dương có trong mảng là:  " + count;
};
// Exercise 3: Tìm số nhỏ nhất
dom("btn3").onclick = function () {
  var min = number[0];
  for (var i = 0; i < number.length; i++) {
    if (min > number[i]) {
      min = number[i];
    }
  }
  dom("text3").innerHTML = "Số nhỏ nhất trong mảng là: " + min;
};
// Exercise 4: Tìm số dương nhỏ nhất trong mảng
dom("btn4").onclick = function () {
  debugger;
  var minPlus = 0;
  for (var j = 0; j < number.length; j++) {
    if (number[j] > 0) {
      minPlus = number[j];
      break;
    } else {
      dom("text4").innerHTML = "Không có số dương nhỏ nhất trong mảng";
    }
  }
  for (var i = 0; i < number.length; i++) {
    if (number[i] > 0 && minPlus > number[i]) {
      minPlus = number[i];
    }
  }
  dom("text4").innerHTML = "Số dương nhỏ nhất trong mảng là: " + minPlus;
};
// Exercise 5: Tìm số chẵn cuối cùng trong mảng
dom("btn5").onclick = function () {
  var lastNumber = -1;
  for (var i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      lastNumber = number[i];
    }
  }
  if (lastNumber === -1)
    dom("text5").innerHTML = "Không có số chẵn trong mảng vừa khởi tạo ";
  else
    dom("text5").innerHTML = "Số chẵn cuối cùng trong mảng là: " + lastNumber;
};
// Exercise 6: Hoán đổi vị trí 2 số
dom("btn6").onclick = function () {
  var numberNew = number.filter(() => true);
  var num1 = dom("num1").value * 1;
  var num2 = dom("num2").value * 1;
  var c = numberNew[num1];
  (numberNew[num1] = numberNew[num2]), (numberNew[num2] = c);
  dom("text6").innerHTML =
    "Mảng trước khi được hoán đổi: " +
    number +
    "</br>" +
    "Mảng sau khi được hoán đổi: " +
    numberNew;
};
// Exercise 7: Sắp xếp mảng theo thứ tự tăng dần
dom("btn7").onclick = function () {
  var num3 = [];
  var numnberSort = number.filter(() => true);
  for (var i = 0; i < numnberSort.length; i++) {
    for (var j = 0; j < numnberSort.length - 1; j++) {
      if (numnberSort[i] < numnberSort[j]) {
        num3 = numnberSort[j];
        numnberSort[j] = numnberSort[i];
        numnberSort[i] = num3;
      }
    }
  }
  dom("text7").innerHTML = "Mảng theo thứ tự tăng dần: " + numnberSort;
};
// Exercise 8: Tìm số nguyên tố đầu tiên trong mảng
dom("btn8").onclick = function () {
  for (var i = 0; i < number.length; i++) {
    if (
      number[i] === 2 ||
      number[i] === 3 ||
      number[i] === 5 ||
      number[i] === 7 ||
      number[i] > 1 &&
      number[i] % 2 !== 0 &&
      number[i] % 3 !== 0 &&
      number[i] % 5 !== 0 &&
      number[i] % 7 !== 0) {
      dom("text8").innerHTML = "Số nguyên tố đầu tiền trong mảng: " + number[i];
      break;
    } else {
      dom("text8").innerHTML = "Không có số nguyên tố";
    }
  }
};

// Exercise 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
// Lấy số vào mảng
var numberLesson9 = [];
dom("btnSave9").onclick = function () {
  var num = Number(dom("numLesson9").value);
  numberLesson9.push(num);
  dom("textSave9").innerHTML = numberLesson9;
  dom("numLesson9").value = "";
  dom("numLesson9").focus();
};
dom("btnCount9").onclick = function () {
  var sum = 0;
  for (var i = 0; i < numberLesson9.length; i++) {
    if (Number.isInteger(numberLesson9[i]) === true) {
      sum++;
    }
  }
  dom("text9").innerHTML ="Số lượng số nguyên có trong mảng là: " + sum;
};
// Exercise 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.

dom("btn10").onclick = function () {
  var soDuong = 0;
  var soAm = 0;
  for (var i = 0; i < number.length; i++) {
    if (number[i] > 0) {
      soDuong++;
    } else if (number[i] < 0) {
      soAm++;
    }
  }
  if (soDuong === soAm) {
    dom("text10").innerHTML = "Số lượng âm dương cân bằng";
  } else if (soDuong > soAm) {
    dom("text10").innerHTML =
      "Số lượng số dương" +
      " (" +
      soDuong +
      ") " +
      "nhiều hơn số âm" +
      " (" +
      soAm +
      ")";
  } else {
    dom("text10").innerHTML =
      "Số lượng số âm" +
      " (" +
      soAm +
      ") " +
      "nhiều hơn số dương" +
      " (" +
      soDuong +
      ")";
  }
};
