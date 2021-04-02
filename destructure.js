const address = {
    street: '',
    city: '',
    country:''
}

const street = address.street;
const city = address.city;
const country = address.country

// Above declarations are same as

const { street, city, country } = address;

//what if I want to use an alias 

const { street: st, city: ct } = address;

