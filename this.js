'use strict'
const Person = {
    name:"Asim",
    walk:function(){
        console.log(this)
    }
}

Person.walk()

const walking = Person.walk.bind(Person)

walking();