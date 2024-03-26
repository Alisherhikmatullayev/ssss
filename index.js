
const obj =cartObj()
console.log(obj)
let totalPrice =0
let aa =''
for (const key in obj) {
  totalPrice +=obj[key].price
  aa +=` ${key}:  ${obj[key].info},`
  }
  let bb = 9000 
  let ss = totalPrice+bb
  console.log(`Mahsulot nomi ${aa} jami so'mma  ${ss} yetkazib berish xizmati ${bb}`);


  let son = +prompt('Foydalanuvchilar soni')
  const user = { }
  for (let i = 0; i <son; i++){
    let name =prompt(`Foydalanuvchi ismingizni kiriting:`)
    let age =+prompt(`Foydalanuvchi yoshingizni kiriting:`)
    console.log(`${i+1} foydalanuchi ismi ${name} foydalanuvchi yoshingizni ${age} `);
    }


