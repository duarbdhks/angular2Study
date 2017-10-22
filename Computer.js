var Computer;
(function (Computer) {
    Computer[Computer["Desktop"] = 0] = "Desktop";
    Computer[Computer["Laptop"] = 1] = "Laptop";
    Computer[Computer["Netbook"] = 2] = "Netbook";
})(Computer || (Computer = {}));
let cp = Computer.Laptop;
let cp2;
cp2 = "test";
cp2 = 123;
cp2 = true;
function examReturn(a) {

    
    if (a == 'asdf') {
    }
    else {
        return "examReturn 함수 호출";
    }
}
function examVoid() {
}
class EE {
    constructor(pc) {
        this.name = "duarbdhks";
        this.pc = pc;
    }
    printInfo() {
        console.log(this.name + "님이 가지고 계신 pc는 " + this.pc + "입니다.");
    }
}
let ee = new EE(Computer.Laptop);
let str11 = "str";
let str22 = "str";
let str33 = new String("str");
let str44 = new String("str");
console.log("str1 == str2 : " + (str11 == str22));
console.log("str1 == str3 : " + (str11 == str33));
console.log("str3 == str3 : " + (str33 == str44));
console.log("str1 === str2 : " + (str11 === str22));
console.log("str1 === str3 : " + (str11 === str33));
console.log("str3 === str4 : " + (str33 === str44));
console.log(str33.toString());
console.log(str33.toString());
//# sourceMappingURL=Computer.js.map