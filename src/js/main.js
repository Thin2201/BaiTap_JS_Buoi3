// input nhập vào 1 số cần kiểm tra
// xử lý dùng vong lập if else kiểm tra xe số nhập vào là số chẵn hay lẻ
// output hiện kết quả là số chẵn hay lẻ

document.querySelector("#kTra").onclick = function () {
  let number = document.querySelector("#number").value * 1;
  let result = document.querySelector("#result");
  if (number % 2 == 0) {
    result.innerHTML = "đây là số chẵn";
  } else {
    result.innerHTML = "Đây là số lẻ";
  }
};

// input nhập vào số đơn hàng và số doanh thu của NV
// xử lý dùng vong lập if else kiểm tra số đơn hàng có > 100 hay không
//  nếu có thì tổng doanh thu sẽ lấy ra 10% để thưởng có NV đó
//  Nếu không thì kh thưởng
// output hiện kết quả là có thưởng hay không và thưởng bảo nhiêu

document.querySelector("#XetThuong").onclick = function () {
  let numberDH = document.querySelector("#numberDH").value * 1;
  let numberDS = document.querySelector("#numberDS").value * 1;
  let resultThuong = document.querySelector("#resultThuong");
  let thuongThem = (numberDS / 100) * 10;

  if (numberDH > 100) {
    resultThuong.innerHTML =
      "chúc mừng bạn được thưởng thêm: " + thuongThem + " VND";
  } else {
    resultThuong.innerHTML = "Rất tiếc bạn kh được thưởng thêm";
  }
};

/*
input    nhập vào số tiền cần thanh toán
sử lý   kiển tra số tiền có lớn hon 500 hay không 
            nếu có thì giảm 20% tổng bill
            nếu không thì kh giảm
output   xuất tôgn tiền cần thanh toán
*/

document.querySelector("#ChietKhau").onclick = function () {
  let number = document.querySelector("#numberGiaTien").value * 1;

  let result = document.querySelector("#resultChietKhau");
  let resultBill = document.querySelector("#resulTongBill");
  let chietKhau = 0;
  let TongBill = number - chietKhau;

  if (number > 500) {
    chietKhau = (number / 100) * 20;
    result.innerHTML = "Bạn được giảm 20% tổng bill là: " + chietKhau;
    resultBill.innerHTML = "Tổng số tiền bạn cần trả là: " + TongBill;
  } else {
    result.innerHTML = "Bạn được giảm 20% tổng bill là: " + chietKhau;
    resultBill.innerHTML = "Tổng số tiền bạn cần trả là: " + TongBill;
  }
};

/*
input    nhập vào mật khẩu muốn đặt
sử lý   kiển tra số ký tự có trong mật khẩu có lớn hơn 8 hay không 
           
output   in ra cho người dùng biết mật khẩu mạnh hay yếu
*/

document.querySelector("#kiemTraPass").onclick = function () {
  let pass = document.querySelector("#pass").value;
  let result = document.querySelector("#resultPass");

  if (pass.length >= 8) {
    result.innerHTML = "Mật khẩu của bạn đã đủ mạnh";
  } else {
    result.innerHTML = "Mật khẩu của bạn chưa đủ mạnh";
  }
};
