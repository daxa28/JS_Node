// File System
const fs = require('fs')
const path = require('path')

// // создание папки по пути
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err
//     }
//     console.log('папка создана!')
// })
//
// создание пути
const filePath = path.join(__dirname,'test', 'test.txt')

// // создание файла и запись в файл
// fs.writeFile(filePath, 'hello node.js!!!', err => {
//     if (err) {
//         throw err
//     }
//     console.log('файл создан!')
// })
//
// // добавление инфы в файл
// fs.appendFile(filePath, '\nВторая записанная строка', err => {
//     if (err) {
//         throw err
//     }
//     console.log('строка записана!')
// })



//чтение из файла
fs.readFile(filePath, (err, content) => {
    if (err) {
        throw err
    }
    console.log("Content:", content) // выводит буфер

    //способ 1
    const data = Buffer.from(content)
    console.log("Content:", data.toString())
})

//способ 2
// использование параметра  'utf-8'
fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }
    console.log("Content:", content)
})