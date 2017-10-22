enum Computer{Desktop, Laptop, Netbook}

let cp:Computer = Computer.Laptop;

let cp2:any;
cp2 = "test";
cp2 = 123;
cp2 = true;

function examReturn(a:string):any{
    if(a=='asdf'){
    }else{
        return "examReturn 함수 호출";
    }
}

function examVoid():void{
    
}




class EE{
    name:string ="duarbdhks";
    pc:Computer;
    constructor(pc:Computer){
        this.pc = pc;
    }
    printInfo() : void{
        console.log(this.name+"님이 가지고 계신 pc는 "+this.pc+"입니다.");
    }
}
let ee:EE = new EE(Computer.Laptop);
let str11 : string = "str";
let str22 : string = "str";
let str33 : String = new String("str");
let str44 : String = new String("str");


console.log("str1 == str2 : "+(str11 == str22));
console.log("str1 == str3 : "+(str11 == str33));
console.log("str3 == str3 : "+(str33 == str44));
console.log("str1 === str2 : "+(str11 === str22));
console.log("str1 === str3 : "+(str11 === str33));
console.log("str3 === str4 : "+(str33 === str44));

console.log(str33.toString())
console.log(str33.toString())
