// //BIT-WISE OPERATOR
// //BINARY AND (both same then rerurn true)
// console.log(5 & 6);
// //BINARY OR
// console.log(5 | 6);
// //BINARY XOR(both diffrent then return true)
// console.log(5 ^ 6);
// //BINARY ONE's COMPLEMENT(not operator)
// console.log(~5);
// //BINARY LEFT SHIFT(FORMULA (a<<b = a * 2 power b))
// console.log(5 << 2);
// //BINARY RIGHT SHIFT(FORMULA (a>>b = a / 2 power b))
// console.log(6 >> 1);


//// 1TH: FIND EVEN OR ODD
// let evenOdd = (n) => {
//     let bitMask = 1;
//     if ((n & bitMask) == 0) {
//         console.log("even number");
//     }
//     else {
//         console.log("odd number");
//     }
// }
// evenOdd(13)





//// 2TH GET Ith BIT
// function get_ith_bit(n, i) {
//     let bitMask = 1 << i;
//     if ((n & bitMask) == 0) {
//         return 0;
//     }
//     else {
//         return 1;
//     }
// }
// console.log(get_ith_bit(10, 2));



// 3TH SET Ith BIT
function set_ith_bit(n, i) {

    let bitMask = 1 << i;
    let result = n | bitMask
    return result;

}
console.log(set_ith_bit(10, 4 ));
