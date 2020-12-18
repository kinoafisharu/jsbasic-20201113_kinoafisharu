// пример использования метода map
// (преобразование объекта, применив к нему
//   функцию)
// 
// Из массива объектов персон сформирован
// массив имен этих персон

let vasya = { name: 'Вася', age: 25 }
let petya = { name: 'Петя', age: 30 }
let masha = { name: 'Маша', age: 28 }

let users = [ vasya, petya, masha ]

function namify(users) {
  return users.map((user) => user.name)
}

let names = namify(users)

console.log(names)
