'use strict'

const persons = [
    {
        firstName : 'Dmytro',
        lastName : 'Vazertsev',
        email : 'kaba4eken@gmail.com',
        password : '12345',
        gender : 'Men',
    },
    {
        firstName : 'Alexandra',
        lastName : 'Anfilova',
        email : 'alexandra_anf@gmail.com',
        password : '12345',
        gender : 'Women',
    },
    {
        firstName : 'Nastya',
        lastName : 'Orlova',
        email : 'orlova_vaz@gmail.com',
        password : '12345',
        gender : 'Women',
    }
]


if(!localStorage.getItem('allPersons')){
    localStorage.setItem('allPersons',JSON.stringify(persons));
}

if(!localStorage.getItem('currentUserPosition')){
    localStorage.setItem('currentUserPosition',-1);
}