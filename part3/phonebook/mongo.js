const mongoose = require('mongoose')

if (process.argv.length !== 5 && process.argv.length !== 3) {
    console.log('give password for viewing the phonebook. give password, name, number to add new entry. make sure name is enclosed in "" if it contains whitespace')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://ahmedsiam037:${password}@cluster0.gdmrb.mongodb.net/phonebookApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 5) {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4],
    })
    
    person.save().then(result => {
        console.log('person saved')
        mongoose.connection.close()
    })
}
else {
    Person.find({}).then(result => {
        console.log("phonebook:")
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
}


