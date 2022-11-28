function filterBooksPromise(colorful, amountOfPage){
    return new Promise(function(resolve, reject){
      var books=[
          {name: "shinchan", totalPage: 50, isColorful: true},
          {name: "Kalkulus", totalPage: 250, isColorful: false},
          {name: "doraemon", totalPage: 40, isColorful: true},
          {name: "algoritma", totalPage: 250, isColorful: false},
      ]
      if (amountOfPage >= 40) {
          resolve(books.filter(x=> x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else {
          var reason= "Maaf buku di bawah 40 halaman tidak tersedia"         
          reject(reason);
        }
    });
}

// // Cara 1
// const execute1 = async () => {
//     try {
//         let result = await filterBooksPromise(true, 40)
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// const execute2 = async () => {
//     try {
//         let result = await filterBooksPromise(false, 250)
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// const execute3 = async () => {
//     try {
//         let result = await filterBooksPromise(true, 30)
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// execute1()
// execute2()
// execute3()

// // Cara 2
// const execute = async () => {
//     try {
//         let result1 = await filterBooksPromise(true, 40)
//         console.log(result1)
//     } catch (error) {
//         console.log(error)
//     }
//     try {
//         let result2 = await filterBooksPromise(false, 250)
//         console.log(result2)
//     } catch (error) {
//         console.log(error)
//     }
//     try {
//         let result3 = await filterBooksPromise(true, 30)
//         console.log(result3)
//     } catch (error) {
//         console.log(error)
//     }
// }

// execute()

// Cara 3
const execute = async (colorful, amountOfPage) => {
    try {
        let res = await filterBooksPromise(colorful, amountOfPage)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}    

execute(true, 40)
execute(false, 250)
execute(true, 30)