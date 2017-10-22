interface Action{
    run() : string;
    setSpeed(speed:number) : void;
}


class Robot implements Action{
    speed: number = 30;
    run(){
        return '로봇이 '+this.speed + '속도로 뜁니다.'
    }
    setSpeed(speed:number) : void{
        this.speed = speed;
    }
}

class Person implements Action{
    speed: number = 30;
    run(){
        return this.speed + '속도로 뜁니다.'
    }
    setSpeed(speed:number) : void{
        this.speed = speed;
    }
}

let p:Action = new Person();
p.setSpeed(55)
let str4 :string = p.run();
console.log(str4)

let r:Action = new Robot();
r.setSpeed(1000);
let strR : string = r.run();
console.log(strR)
