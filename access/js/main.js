//Lập công thức NumberFormat để số tiền hiển thị đẹp hơn

const NumberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
})
        /** BÀI 1 - TÍNH TIỀN LƯƠNG NHÂN VIÊN
 * > Khối 1: Người dùng nhập vào
 * salary: lương 1 ngày
 * workday: ngày công
 * > Khối 2: 
 * B1: lấy giá trị nhập vào
 * B2: tính lương total = salary * workday
 * B3: xuất ra màn hình
 * > Khối 3:
 * Tính tổng lương
 */
function DoPayroll() {
    var workday = document.getElementById("workDay").value; //lấy giá trị ngày 
    var salary = document.getElementById("salary").value; //lấy giá trị lương 
    var total = workday * salary; //tính lương gán vào total
    document.getElementById("result1").style.display = "block"; //hiện kết quả
    document.getElementById("result1").innerHTML = "Tổng lương nhận được là: "+NumberFormat.format(total) 
    
}
document.getElementById("btnCalc1").onclick = DoPayroll; // gán lệnh DoPayroll vào nút

        /** BÀI 2 - TÍNH TRUNG BÌNH CỘNG 5 SỐ 
 * > Khối 1: 
 * Người dùng nhập vào 5 số 
 * num1, num2, num3, num4, num5
 * > Khối 2: 
 * B1: lấy giá trị nhập vào
 * B2: chuyển sang kiểu số
 * B3: tính tb cộng: (num1+num2+num3+num4+num5) / 5
 * B4: xuất ra màn hình
 * > Khối 3:
 * Tính trung bình cộng average
 */
function DoAverage() {
    var num1 = document.getElementById("num1").value; 
    var num2 = document.getElementById("num2").value; 
    var num3 = document.getElementById("num3").value; 
    var num4 = document.getElementById("num4").value; 
    var num5 = document.getElementById("num5").value; 
    var average = (Number(num1)+Number(num2)+Number(num3)+Number(num4)+Number(num5)) / 5
    document.getElementById("result2").style.display = "block"; //hiện kết quả
    document.getElementById("result2").innerHTML = "Trung bình cộng 5 số là: "+average //xuất ra màn hình
}
document.getElementById("btnCalc2").onclick = DoAverage; // gán lệnh DoAverage vào nút

        /** BÀI 3 - QUY ĐỔI TIỀN
 * > Khối 1: 
 * Người dùng nhập vào 
 * usd
 * > Khối 2: 
 * B1: lấy giá trị nhập vào
 * B2: tính tiền việt: usd*exchangeRate
 * B3: xuất ra màn hình
 * > Khối 3:
 * Quy đổi ra tiền việt: vnd
 */
function DoExchange() {
    var usd = document.getElementById("usd").value; //lấy giá trị usd
    var exchangeRate = document.getElementById("exchangeRate").value; //lấy tỉ giá
    var vnd = exchangeRate * usd; //quy ra VNĐ
    document.getElementById("result3").style.display = "block"; //hiện kết quả
    document.getElementById("result3").innerHTML = "Số tiền tương ứng là: "+NumberFormat.format(vnd) 
}
document.getElementById("btnCalc3").onclick = DoExchange; // gán lệnh DoExchange vào nút

        /** BÀI 4 - TÍNH CHU VI, DIỆN TÍCH <br>HÌNH CHỮ NHẬT
 * > Khối 1: Người dùng nhập vào 
 * lenght - chiều dài
 * width - chiều rộng
 * unit - đơn vị đo
 * > Khối 2: 
 * B1: tạo biến lấy giá trị nhập vào
 * B2: tính chu vi: perimeter = (Number(lenght)+Number(width))*2
 * B3: tính diện tích: area = lenght*width
 * B4: xuất ra màn hình
 * > Khối 3:
 * chu vi: perimeter
 * diện tích: area
 */
function CalcArea() {
    var lenght = document.getElementById("lenght").value; //lấy chiều dài
    var width = document.getElementById("width").value; //lấy chiều rộng
    var unit = document.getElementById("unit").value; //lấy đơn vị đo
    var perimeter = (Number(lenght)+Number(width))*2; //ép kiểu số + tính chu vi
    var area = lenght*width;
    document.getElementById("perimeter").style.display = "block"; //hiện kết quả
    document.getElementById("area").style.display = "block"; //hiện kết quả
    document.getElementById("perimeter").innerHTML = "Chu vi là: "+perimeter+unit;
    document.getElementById("area").innerHTML = "Diện tich là: "+area+unit+('<span style="vertical-align: super; font-size: xx-small;">2</span>');
}
document.getElementById("btnCalc4").onclick = CalcArea; // gán lệnh CalcArea vào nút

        /**BÀI 5 - TÍNH TỔNG 2 KÝ SỐ
 * > Khối 1: Người dùng nhập vào 
 * Num: số 
 * > Khối 2: 
 * B1: tạo biến lấy giá trị số nhập vào
 * B2: kiểm tra điều kiện đúng 2 chữ số không: lenght(number) = 2, đúng thực hiện bước B3, B4, sai thực hiện B5
 * B3: tạo biến gán công thức tính 2 ký số:
 *      tensDigit = Num / 10
 *      unitDigit = Num % 10
 * B4: Tính tổng: sum2digit = tensDigit + unitDigit => xuất ra màn hình
 * B5: nếu sai xuất cảnh báo: alert("Vui lòng nhập số có 2 chữ số")
 * > Khối 3:
 * Tổng 2 ký số
 */
function DoSum2Digit() {
    var Num = document.getElementById("number").value; //lấy số
    if (Num.length==2){ //kiểm tra điều kiện số nhập vào
        var tensDigit = Math.floor(Num/10); //chia 10 lấy hàng chục
        var unitDigit = Num % 10; //chia 10 dư lấy hàng đơn vị
        var sum2digit = tensDigit + unitDigit;
        document.getElementById("result5").style.display = "block"; //hiện kết quả
        document.getElementById("result5").innerHTML = "Tổng 2 ký số của số trên là: "+tensDigit+" + "+unitDigit+" = "+sum2digit;
    }
    else{
        alert("Vui lòng nhập số có 2 chữ số")
    }
}
document.getElementById("btnCalc5").onclick = DoSum2Digit; // gán lệnh CalcArea vào nút

