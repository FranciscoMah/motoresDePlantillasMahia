const express = require('express')
const handlebars = require('express-handlebars')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine('handlebars', handlebars.engine())

app.set('views', './views')
app.set('view engine', 'handlebars')

class Contenedor{
    constructor(){
        this.db = []
    }

    getAll(){
        return [...this.db]
    }

    addProducto(producto){
        this.db.push(producto)
    }
}

const contenedor = new Contenedor()

app.post('/', (req, res)=>{
    const {newProducto} = req.body

    const result = contenedor.addProducto(newProducto)

    res.send(result)
})

app.get('/', (req, res)=>{
    const data = {
        nombre: 'Steve',
        precio: 'Rogers',
        edad: '109',
        email: 'r@gmail.com',
        telefono: '222222222'
    }

    res.render('datos', data)
})

app.listen(8080)
