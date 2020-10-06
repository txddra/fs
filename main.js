// Create directory called fs-try

// - Using fs module:
// - create a directory called content using fs method and it should log 'content folder created'
// - create a file using fs method called randomText.txt that lives outside the content directory
// - randomText.txt should be created using fs method and given just a short string of any data you want to put in it, using fs method
// - when you create the randomText.txt file you should also log 'randomtext.txt created' in the terminal.
// - write the randomText.txt data to a new file called verbage.txt inside the content folder and log 'verbage.txt created'
// - Now create a separate setTimeout function that after 7 seconds deletes the content directory

const fs = require('fs');


/*creates directory*/

// fs.mkdir('direct', (err)=>{
//     if(err) throw err;
//     console.log('content folder created')
// })

/*created text file*/
// fs.writeFile('randomText.txt', 'utf8', (err)=>{
//     if(err) throw err;
//     console.log('randomText.txt created')

// })

/*copies the data and places it in a new text file */
fs.readFile('randomText.txt', 'utf8', (err, info)=>{
    if(err) throw err;

 })
// fs.writeFile('./direct/verbage.txt','utf8', (err)=>{
//     if(err) return console.log(err);
//     console.log('verbage.txt created')

// })

/*set timeout */

// setTimeout(() => {
//     fs.rmdir('./direct', (err)=>{
//         if(err) throw err
//     })

//     },7000)