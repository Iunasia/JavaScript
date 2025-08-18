const person = {
    name: 'bob',
    address:{
        city: 'Phnom Penh',
        zip: 12345
    }
}
const { address: { city, zip } } = person;
console.log(`city: ${city}`);
console.log(`zip: ${zip}`);