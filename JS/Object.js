//Object = คล้ายกับอาเรย์แต่เป็นชุดข้อมูล ที่สามารถแบ่งประเภทของข้อมูลได้
let Ant1 = {
    name : 'a' ,
    breed : 'Bullet ant' ,
    age : '6 months' ,
    color : 'red' ,
    talk(){
        console.log(this.name + ' : ' + ' จิ๊ดจิ๊ด');
    } ,
    rude(){
        console.log(this.name + ' : ' + ' เย็ดแม่');
    }
};

//Constructor function = การสร้างออปเจคแบบประหนัดพื้นที่
function Ant( name , breed , age , color , talk , rude ) {
    this.name = name ;
    this.breed = breed ;
    this.age = age ;
    this.color = color;
    this.talk = function() {
        console.log(this.name + ' : ' + talk);
    }
    this.rude = function() {
        console.log(this.name + ' : ' + rude);
    }
}

//New = การเรียกใช้ Constructor function มาใช้สร้างออปเจค
let Ant2 = new Ant( 'b' , 'Red Ant' , '2 months' , 'Black' , 'จุ๊จุ๊' , 'ควย ส้นตีน' )


console.log(Ant1);
console.log(Ant1.talk() + Ant1.rude());

console.log(Ant2);
console.log(Ant2.talk() + Ant2.rude());