// const arr=null;
// console.log(arr);

// Method arrays push
// const arr1 = []
// arr1.push(10,12,13,14)
// console.log(arr1)

// Method Arrays length
// const arr2 = []
// arr2[arr2.length] = 10
// arr2[arr2.length] = 15
// console.log(arr2)

// const arr2 = [1,2,3,4,10,20]
// console.log(arr2.pop()) //mengambil dan mengeluarkan nya dari array
// console.log(arr2)

// const arr2 = [1,2,3,4]
// console.log(arr2.slice(2)) // seperti mengcopy potongan array yang ada, array aslinya tidak terpotong
// console.log(arr2)

// const arr2=[1,2,3,4]
// console.log(arr2.splice(2)) // mengambil dan menghapus nilai dari index awal sampe seterusnya
// console.log(arr2.splice(-1,1)) // -1 index paling kanan
// console.log(arr2)

// const arr2=[1,2,3,4]
// console.log(arr2.splice(1,1,10,12,12)) // parameter ke-1 itu ambil dari awal kemudian hapus, parameter ke-2 mau brp banya mau di ilangin, 3 dan seterusnya ada element baru yang mau dimasukin ga
// console.log(arr2)

// Looping tanpa arrays
// const arr2=[1,2,3,4]
// arr2.forEach((element,index) => {
//     arr2[index] = element **3
// })
// console.log(arr2)

// // // Map
// const newArr2 = arr2.map((element)=>{
//     return element **2
// })

// console.log(newArr2)

//penyederhanaan
/* const newArr2 = arr2.map((element)=> element **5) // Penyederhaan array map
 console.log(newArr2)

 const newArr2 = arr2.map((element)=>{
     element +=10
     element -=2
     return element
})
 console.log(newArr2)
*/

// console.log(arr2.find((element)=> element %3 ==0)) //find ambil satu element
// console.log(arr2.filter((element)=> element %4 ==0))// filter berapa pun nilai yang bernilai sama

// Null fales
// let a

// console.log(a ?? 'eweuhan' ) // jika di a tidak adaan entah null maka keluarkan value yang dikanan
// console.log(a && 'eweuh bro') // kalo dikiri ada make keluarkan kanan, "kebalikannya ??""
// console.log(a || 'X') // kebalikannya si and &&, kalo tidak ada nilai dikiri keluarkan dikanan, mirip seperti tanda "??"

// deklarasi 
// function fetchData(){
//     return 'hello'
// }
// const getDta = () =>{
//     return 'ya hallo'
// }

// console.log(fetchData())
// console.log(getDta())

// Konsep OOP Javascript
// const human = {
//     nama: 'Asep',
//     umur: 21,
//     alamat: 'jalan kenangan',
//     anak:[
//         {
//             nama: 'udin',
//             umur: 5
//         },
//         {
//             nama: 'alam',
//             umur: 3
//         },
//     ]
// }

// console.log(human.nama)
// console.log(human.anak[0].nama)

// OOP Versi JavaScript
class Human {
    constructor(nama,umur){
        this._nama=nama //_ untuk private
        this._umur=umur
    }
    sayHi() {
        console.log('Hallo halo')
    }
}

class Child extends Human{
    study(){
        console.log('i will study')
    }
}

const human1 = new Human('Budi',40)
console.log(human1._nama)
human1.sayHi()

const child1 = new Child('udin',5)
child1.sayHi()
child1.study()
