let weight = [55, 65, 78, 61, 35, 94, 118, 21];

//forEach = ลูปของอาเรย์
let fat = 0;
weight.forEach((weig) => {
    if (weig >= 90){
        fat++;
    }
});

//map = เปลี่ยนค่าในอาเรย์เป็นอีกค่า
let numbWeight = weight.map( (weig) => {
    if (weig >= 90) {
        return 'อ้วน';
    } else if (weig >= 60) {
        return 'ปกติ';
    };
    return 'ผอม';
});

//filter = คัดค่าในอาร์เรย์
let weightPass = weight.filter( (weig) => {
    return weig >= 60
});

//reduce = รวมค่าในอาเรย์
let sumWeight = weight.reduce( (sum, weig) => {
    return sum + weig;
});

//find = หาค่าในอาเรย์
let thinWeight = weight.find((weig) => {
    return weig < 30
});

//findIndex = หาตำแหน่งของค่าที่หาในอาเรย์
let whothinWeight = weight.findIndex((weig) => {
    return weig < 30
});

//every = เช็คค่าในอาเรย์ถ้าตามเงื่อนไขทุกค่าจะแสดงค่า true
let checkWeight = weight.every( (weig) => {
    return weig >= 50;
});

//some = เช็คค่าในอาเรย์ถ้ามีค่าที่ตรงเงื่อไขเพียง 1 ตัว จะแสดงค่า true
let checkWeight2 = weight.some ( (weig) => {
    return weig >= 100;
});

console.log('น้ำหนักคนทั้งหมด '+ weight);
console.log('คนน้ำหนักเกิน '+ fat +' คน');
console.log(numbWeight);
console.log(weightPass);
console.log('น้ำหนักรวมทั้งหมด = '+ sumWeight + ' กก.');
console.log('คนที่ควรปรับพฤติกรรมการกิน คือ ' + thinWeight + ' กก.');
console.log('คนที่ '+ whothinWeight + ' น้ำหนักน้อยเกิน');
console.log('น้ำหนักปกติทุกคนหรือไม่ ' + checkWeight);
console.log('มีคนน้ำหนักเยอะเกินไปหรือไม่ ' + checkWeight2);
