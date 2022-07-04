//1. Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần.
/**
 * INPUT: Khai bao va gan gia tri a, b, c
 *
 * Process:
 *++ Neu a < b ta co b dung truoc a
 *  Ma b < c = > a < b < c
 * Nguoc lai cua TH tren a < c => a < c < b
 * Con lai : c a b
 *
 * ++ Neu a > b ta co a dung truoc b
 * Ma c > a => b a c
 * Nguoc lai cua TH tren c > b => b c a
 * Con lai : c b a
 *
 * OUTPUT: In ra ket qua b c a
 */
//Cach 1:
var a = 3;
var b = 1;
var c = 2;

if (a < b) {
  if (b < c) {
    console.log(a, b, c);
  } else {
    if (c < a) {
      console.log(c, a, b);
    } else {
      console.log(a, c, b);
    }
  }
} else {
  if (a < c) {
    console.log(b, a, c);
  } else {
    if (c > b) {
      console.log(b, c, a);
    } else {
      console.log(c, b, a);
    }
  }
}

// 3 so nguyen giam dan

// var a = 1;
// var b = 2;
// var c = 3;

// if(a > b){
//     if(c > a){
//         console.log(c, a, b);
//     }else{
//         if(c > b){
//             console.log(a, c, b);
//         }else{
//             console.log(a, b, c);
//         }
//     }
// }
// else{
//     if(c > b){
//         console.log(c, b, a);
//     }else{
//         if(c > a){
//             console.log(b, c, a);
//         }
//         else{
//             console.log(b, a, c);
//         }
//     }
// }

// var a = 20,
//   b = 1,
//   c = 5,
//   temp;

// if (a > b) {
//   temp = a;
//   a = b;
//   b = temp;
// }
// if (a > c) {
//   temp = a;
//   a = c;
//   c = temp;
// }
// if (b > c) {
//   temp = b;
//   b = c;
//   c = temp;
// }
// console.log(a, b, c);

/*Cau 2:Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ
hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia
đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E) */
/**
 * INPUT: Khai bao bien va gan gia tri Family, result = ""
 *
 * Process: Neu Family === B => ket qua tra ve = Bo(B)
 * Neu Family === M => ket qua tra ve = Me(M)
 * Neu Family === A => ket qua tra ve = Anh trai(A)
 * Neu Family === E => ket qua tra ve = Em gai(E)
 * Nguoc lai khong co gia tri thoa man. Nhap dung yeu cau.
 *
 * OUTPUT: In ket qua = Hello Boy
 */

var Family = "A";
var result = "";

if (Family === "B") {
  result = "Hello Dad";
} else if (Family === "M") {
  result = "Hello Mom";
} else if (Family === "A") {
  result = "Hello Boy";
} else if (Family === "E") {
  result = "Hello Girl";
} else {
  result = "Oh No! (B) (M) (A) (E) ";
}
console.log("Who is using the computer ?", result);

// switch(Family){
//     case "B": {
//         result = "Hello Dad";
//     };
//     break;
//     case "M": {
//         result = "Hello MOm";
//     };
//     break;
//     case "A": {
//         result = "Hello Boy";
//     };
//     break;
//     case "E": {
//         result = "Hello Girl";
//     };
//     break;
//     default : {
//         result = "Oh No! (B) (M) (A) (E) "
//     }
// }
// console.log(result);

/**
 * Cau 3: Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn
 */

/**
 * INPUT: Khai bao bien va gan gia tri a, b, c, even = 0, odd = 0.
 *
 * Process: De la so chan thuc phep hien phep chia lay phan du bang 0 la so chan. b % 2 == 0 => la so chan.
 * Nguoc lai chia lay du khac 0 thi la so le. a % 2 != 0 && c % 2 != 0.
 *
 * OUTPUT: In ket qua. 1 Le 2 chan
 */
var a = 1,
  b = 2,
  c = 3;

var even = 0;
var odd = 0;

// if (a % 2 == 0) {
//   even++;
// } else {
//   odd++;
// }
// if (b % 2 == 0) {
//   even++;
// } else {
//   odd++;
// }
// if (c % 2 == 0) {
//   even++;
// } else {
//   odd++;
// }

a % 2 === 0 ? even++ : odd++;
b % 2 === 0 ? even++ : odd++;
c % 2 === 0 ? even++ : odd++;

console.log("Even count = ", even, ", Odd count = ", odd);

/**
 * Cau 4: Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì?
• Ví dụ: a=2, b=2, c=1 => Tam giác cân
• a = 3, b=3 c=3 => Tam giác đều
• a = 3, b = 4, c=5 => Tam giác vuông (đinh lý Pytago)
 */

/**
 * INPUT: Khai bao bien va gan gia tri A B C.
 *
 * Process:
 *
 * Neu a == b && b == c => tam giac deu
 *
 * Neu a == b || a == c || b == c => tam giac can
 * 
 * Neu a*a + b*b = c*c || a*a + c*c = b*b  && b*b + c*c = a*a => tam giac vuong
 *
 * 
 *
 * OUTPUT: IN ket qua la Tam giac can
 * */
var a = 4,
  b = 4,
  c = 8;

if(a == b && b == c){
  console.log("Tam giac deu");
}
else if(a == b || b == c || a == c){
  console.log("Tam giac can");
}
else if(a * a + b * b == c * c ||a * a + c * c == b * b || b * b + c * c == a * a){
console.log("Tam giac vuong");
}
else{
  console.log("Tam giac thuong");
}

// if (a + b < c && a + c < b && b + c < a && a < 0 && b < 0 && c < 0) {
//   console.log("Khong phai la tam giac");
 
// } else {
//   if (a == b && b == c) {
//     console.log("Tam giac deu");
//   } else {
//     if (
//       a * a + b * b == c * c ||
//       a * a + c * c == b * b ||
//       b * b + c * c == a * a
//     ) {
//       console.log("Tam giac vuong");
//     }else if (a == b || a == c || b == c) {
//         console.log("Tam giac can");
//       }
//       else{
//         console.log("Tam giac thuong");
//       } 
    
//   }
// }
