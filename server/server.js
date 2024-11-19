const expenses = require("./public/assets/artihaus_expenses.json");
// const fs = require("fs");
// const moment = require("moment");
// const db = require("./models");
// const year = moment().year();

const data = require('./documents/2022/earning_2022.json')
return data;
// let size = 0
// let insert = false

// data.forEach(obj => {
//     let { amount } = obj
//     let newAmount = parseFloat(amount.replace(/,/g, ""));
//     obj.amount = newAmount
//     size ++
//     if( size === data.length ){ insert = false }
// });

// if ( insert ){
//     // console.log( 'running')
//     // db.Expenses
//     // .insertMany ( data )
//     // .then( res => console.log( 'response', res.length ))
//     // .catch( err => console.log( err ))
// }


// let category_list = [
//   "invest",//0
//   "gas",//1
//   "food",//2
//   "tools & supplies",//3
//   "paulo",//4
//   "miscellaneous",//5
//   "medical",//6
//   "vehicle",//7
//   "cozy homes",//8
//   "owner withdraw",//9
//   "work comp",//10
//   "travel",//11
//   "orlando ferreira",//12
//   "flavia",//13
//   "vehicle & maintenance",//14
//   "schoold", //15
//   "marketing",

// ];
// // let search = "ANGI LEADS";
// let category = category_list[14];
// let runUpdateExpenses = false


// let find = null
// let regex = ''

// if (find) {
//   db.Expenses.find(
//     {
//       description: { "$regex": regex },
//     },
//   )
//     .then((res) => {
//       console.log(res)
//     })
//     .catch((err) => console.log(err));

// }
// else if (!find) {
//   db.Expenses.updateMany(
//     {
//       // date: {
//       //   $gte: `${2021}-01-01`,
//       //   $lt: `${2022}-01-01`,
//       // },
//       // category: "cozy homes",
//       description: { "$regex": regex },
//     },
//     {
//       $set: {
//         category: 'equipment rental',
//       },
//     }
//   )
//     .then((res) => {
//       console.log(res)
//     })
//     .catch((err) => console.log(err));
// }

// db.Expenses.find(
//   {
//     date: {
//       $gte: `${year - 1}-01-01`,
//       $lt: `${year}-01-01`,
//     },
//     amount: 10,
//     // description: { "$regex": search },
//   }
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));



// db.Expenses.deleteMany({
//   date: {
//           $gte: `${year-1}-01-01`,
//           $lt: `${year}-01-01`,
//         },
// })
// .then( res => console.log(res))
// .catch( err => console.log( err ))


// db.Projects
// .updateMany(
//     {$set: {
//         status: 1
//     }
// }
//     )
// .then( res => console.log( res ))
// .catch( err => console.log( err ))

// db.Expenses
//     .updateMany(

// {
//     description: { "$regex": "PHARMACY" }
// },
// {$set: {
//     category: 'medical'
// }}
// {
//     description: { "$regex": "MORGAN CONCRETE" }
// },
// {$set: {
//     category: 'travel'
// }}

// {$set: {
//     category: 'materials & supplies'
// }}

// {$set: {
//     category: 'food'
// }}
// {
//         description: { "$regex": 'VEHICLE LOAN'}
// },
// {$set: {
//     category: 'auto loan'
// }}
// {
//     description: { "$regex": 'TRACKI'}
// },
// {$set: {
//     category: 'gps track'GA STATE ROAD'
// }}

// {
//     description: { "$regex": 'GA STATE ROAD'}
// },
// {$set: {
//     category: 'toll fee'
// }}

// {
//     description: { "$regex": 'APPLE.COM'}
// },
// {$set: {
//     category: 'office supplies'
// }}

// {
//     description: { "$regex": 'EMI SUPPLY INC'}
// },
// {$set: {
//     category: 'plate compactor'
// }}

// {
//     description: { "$regex": 'EQUIPSUPPLY'}
// },
// {$set: {
//     category: 'saw blade'
// }}

// )
// .then(res => console.log(res))
// .catch(err => console.log(err))

//************************* FIND ****************** */
// db.Expenses
// .find(
//     {
//         description: { "$regex": "" }
//     },
// )
// .then(res => console.log(res))
// .catch(err => console.log(err))

/*********************************************** */

// db.Expenses
//     .create( dec )
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// let index =0
// dec.map( expense => {
//     let { date, category, description, amount } = expense
//     amount = parseFloat( amount )
//     console.log( date, category, description, amount )

// db.Expenses
// .create({
//     date, description, amount
// })
// .then( res => {
//     index++
// })
// .catch( err => {
//     console.log( '**************************', index)
//     console.log( err )
// })
// })
// db.Expenses
// .create({data})
// .then( res => console.log( res ))
// .catch( err => console.log( err ))

// db.Expenses
//     .find({
//         date: {
//             $gte: `${year-1}-12-01`,
//             $lt: `${year }-01-01`
//         }
//     })
//     .then(res => {
//         res.map( expense => {
//             const { description } = expense
//             let found = false
//             dec.map( decExp => {
//                 const { description: des } = decExp
//                 if( des === description ){ found = true }
//             })
//             if( !found ){ console.log( expense )}
//         })
//     })
//     .catch(err => console.log(err))
//         let index = 0
//         console.log( resFind.length+data.length)
//         const run = (index) => {
//             let size = []
//             while (index < array.length) {
//                 const month = require(`./documents/${array[index]}`)
//                 month.forEach(element => {
//                     let found = false
//                     const { date, description: monthDescription, amount } = element
//                     resFind.map(rf => {
//                         const { description: dataDescription } = rf
//                         if (monthDescription === dataDescription) {
//                             found = true
//                         }
//                     })
//                     if (found === false) {
//                         size.push({ date, monthDescription, amount })
//                     }
//                 })
//                 index += 1
//             }
//             if (index === array.length) {
//                 // let data = JSON.stringify(size);
//                 // fs.writeFileSync('data.json', data);
//             }
//         }
//         run(index)
// })
// .catch(err => console.log(err))

// db.Associates
//     .updateMany(
//         {$unset: {
//             user_id: ''
//         }}
//     )
//     .then(associates => {
//     })
// .catch( err => console.log(err))
// db.Projects
// .find()
// .then( res => {
//             console.log( res )

// data.forEach( d => {
//     const { _id, address } = d

//     db.Projects
//     .findOneAndUpdate({_id: _id}, {$set:{ street: address[0].street, city: address[0].city, code: address[0].code }})
//     .then( res=>{
//     })
//     .catch( error=> console.log( error ))
// })

// })
// .catch( err => console.log( err ))

// const user ={
//     name: 'Alessandro Leao',
//     email: 'alessandroleao@gmail.com',
//     phone: 6785413584,
//     address: {
//         street: '225 nancy ln',
//         city: 'cumming',
//         code: 30040
//     }
// }
// db.Users
// .create(user)
// .then( res => console.log(res))
// .catch( err => console.log(err))

// const associate = {
//     user_id: '618d6488437f6c4cda178dbd',
//     title: 'associate',
//     salary: {
//             type: 'daily',
//             paid_by_type: 160,
//     }
// }
// db.Associate
// .create(associate)
// .then( data => console.log(data))
// .catch( err => console.log(err))

// db.Expenses
// .find({
//     description: { "$regex": "AN TOYOTA SCIO 09/12" },
// })
// db.Expenses
// .updateMany({
//     category: 'advertise'
// },
// {
//     $set: {
//         category: 'business',
//         paidTo: 'advertise'
//     }
// }

// )
//     date: '2020-04-13',
//   description: 'Online Banking Transfer Conf# 5bd3bcd69; Tarciso Sousa',
//   category: "owner's draw",
//   amount: -2000,
//   paidTo: 'tarciso loiola'
// })
// db.Expenses
// .updateMany({
//     description: { "$regex": "APPLE.COM/BILL 866-712-7753 CA RECURRING" },
// },
// {
//     $set: {
//         paidTo: 'supplies'
//     }
// })
// {
//     $set:{
//         category: 'tools & supplies',
//         paidTo: 'cutter purchase',
//     }
// }
// )
// .then( response => console.log( response ))
// .catch( err => console.log('ERR', err) )
