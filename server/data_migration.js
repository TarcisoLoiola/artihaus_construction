const db = require('./models')
const moment = require('moment')
const MongoClient = require('mongodb').MongoClient
const { response } = require('express')

// db.Artihaus_Projects
//     .find({}).sort({ started: -1 })
//     .then(projects => {
//         let delay = 2000
//         let index = 0
//     console.log(`********************${index}********************`)
//     console.log(projects[index])
//     console.log(`****************************************`)
//     index++
//     call_back = setTimeout(request, delay)

MongoClient.connect('mongodb://localhost/Artipro', function (err, dbb) {
    if (err) throw err
    const dbo = dbb.db('Artipro')
    dbo.collection('artipro_clients').find({}).toArray(function (err, res) {
        if (err) {
            console.log('ERROR 500!')
            dbb.close()
            throw err
        }

        res.map( client => {
            const { name, email, contact } = client
            
            if( contact.length > 0 ){
                contact.map( cont => {
                    cont.phone = cont.number
                    if( email ){
                        cont.email = email
                    }
                })
            }
            db.Clients.create( client )
            .then( response => console.log( response ))
            .catch( err => console.log( err ))
        })


        // const { _id, name, user_id: created_by, address, address2, city, city_code, client_id: client, status, started, finished } = projects[index]
        // db.Artipro_Projects
        // .create({
        //     _id, name, created_by, address, address2, city, zip_code: city_code, client, status, started, finished
        // })
        // .find({})
        // .remove({ name: 'lawton' })
        // .then( new_project => {
        //     console.log( new_project )
        // })
        // .catch( e => console.log( e ))
        // let call_back = setTimeout(request = () => {
        //     let { name } = projects[index]
        //     let found = false

        //     console.log(`********************${index}********************`)
        //     res.forEach(p => {
        //         if (p.name === name) {
        //             found = true
        //         }
        //     })
        //     if (found) {
        //         console.log(`Project ${name} Found!`)
        //         index++
        //         call_back = setTimeout(request, delay)
        //     }
        //     else {
        //         console.log(`Project ${name} Not Found!`)
        //         index++
        //         call_back = setTimeout(request, delay)
        //     }
        // }, delay)
    })

})
    // })
// db.Artihaus_Projects
// .find({ name: 'oglethorp' })
// .then( projects => {
//     console.log( projects )
//     const { _id: project_id } =  projects[0]

//     db.Artihaus_Expenses
//     .find({ project_id })
//     .then( expenses => {
//         console.log( expenses )
//     })
// })

// db.Artihaus_Projects
// .create({
//     name: 'oglethorpe lot 16',
//     user_id: '5e21fa1183e005ceafe11c16',
//     address: 'whitaker st',
//     city_code: 30092,
//     client_id: '5e46e7ab3ad0d31b8c57a22b',
//     status: true,
//     started: '2020-04-14T08:00:00.000Z',
//     finished: '2020-04-17T17:00:00.000Z',
// })
// .then( res => {
//     console.log( res )
// })

// let delay = 433276000

// let DataTransfer = setTimeout(request = () => {
//     console.log(moment().format('LTS'))

//     DataTransfer = setTimeout(request, delay)
// }, delay)

// MongoClient.connect('mongodb://localhost/Artipro', function (err, dbb) {
//     if (err) throw err
//     const dbo = dbb.db('Artipro')
//     dbo.collection('artipro_earnings').find({}).toArray(function (err, res_artipro_earnings) {
//         if (err) {
//             console.log('ERROR 500!')
//             dbb.close()
//             throw err
//         }

//         let index = 0
//         let delay = 2000

//         db.Artihaus_Earnings
//         .create(res_artipro_earnings)
//         .then( res => console.log( 'RES', res.length ))
//         .catch( err => console.log( err ))
        // let DataTransfer = setTimeout(request = () => {

        //     DataTransfer = setTimeout(request, delay)
        //     index++
        // }, delay)
//     })
// })

// MongoClient.connect('mongodb://localhost/Artipro', function (err, dbb) {
//     if (err) throw err
//     let start = '2018-12-31'
//     let end = '2019-07-15'
//     const dbo = dbb.db('Artipro')
//     dbo.collection('artipro_expenses').find({
//         createdAt: { "$gte": new Date('2018-12-31'), "$lt": new Date('2019-07-15') }
//     }).toArray(function (err, res_artipro_expenses) {
//         if (err) {
//             console.log('ERROR 500!')
//             dbb.close()
//             throw err
//         }
//         console.log(res_artipro_expenses.length)

//         let index = 0
//         let delay = 2000

//         db.Artihaus_Expenses
//         .create(res_artipro_expenses)
//         .then( res => console.log( 'RES', res.length ))
//         .catch( err => console.log( err ))
//         let DataTransfer = setTimeout(request = () => {

//             DataTransfer = setTimeout(request, delay)
//             index++
//         }, delay)
//     })
// })


/*

db.Artihaus_Jobs
    .find({})
    .then(artihaus_jobs => {

        db.Artihaus_Clients
            .find({})
            .then( artihaus_clients => {

                db.Artihaus_Projects
                .find({})
                .then( artihaus_projects => {

                    let index = 0
                    let delay = 1500;

                    let DataMigrate = setTimeout(function request() {
                        let artihaus_client_id
                        const { name:  artihaus_project_name, client_id  } = artihaus_projects[index]
                        console.log( artihaus_project_name , client_id)
                        artihaus_jobs.map(artihaus_job => {
                            let { name: artihaus_job_name, client: artihaus_job_client_name  } = artihaus_job
                            if( artihaus_job_name === artihaus_project_name ) {
                                console.log( artihaus_job_name, artihaus_job_client_name )
                                artihaus_clients.map( client => {
                                    let { name: artihaus_client_name, _id} = client
                                    if(artihaus_job_client_name === artihaus_client_name ){
                                        db.Artihaus_Projects
                                        .findOneAndUpdate(
                                            { name: artihaus_job_name },
                                            { $set: {
                                                client_id: _id
                                            }}
                                        )
                                        .then( res => {
                                            console.log( res )
                                            index++
                                            DataMigrate = setTimeout( request, delay)
                                        })
                                    }
                                })
                            }
                        })

                    }, delay)
                })
            })
    })

    */