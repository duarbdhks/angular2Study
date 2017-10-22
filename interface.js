class Robot {
    constructor() {
        this.speed = 30;
    }
    run() {
        return '로봇이 ' + this.speed + '속도로 뜁니다.';
    }
    setSpeed(speed) {
        this.speed = speed;
    }
}
class Person {
    constructor() {
        this.speed = 30;
    }
    run() {
        return this.speed + '속도로 뜁니다.';
    }
    setSpeed(speed) {
        this.speed = speed;
    }
}
let p = new Person();
p.setSpeed(55);
let str4 = p.run();
console.log(str4);
let r = new Robot();
r.setSpeed(1000);
let strR = r.run();
console.log(strR);
//# sourceMappingURL=interface.js.map