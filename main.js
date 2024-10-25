//var và let ,hoisting trong js
console.log("Giá trị của biến c: " + c);
//Khởi tạo c
var c = 9;

//có nghĩa JS trong Trường họp trên nó hiểu là:
var c;
console.log("Giá trị của biến c: " + c);
c = 9;
//tức biến var nó đẩy khai báo lên đầu, mà chỉ khai báo chưa gán nên là in ra undefined

//hàm Fibonanci
function fibonancci(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonancci(n - 1) + fibonancci(n - 2);
  }
}

console.log(fibonancci(5));
console.log(fibonancci(3));
console.log(fibonancci(18));
console.log(fibonancci(9));
