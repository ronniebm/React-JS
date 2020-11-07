// creating a person object with attributes.
const person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 56565,
        lat: 14.2352,
        long: 34.9854,
    }
};

// making a new copy of 'person' object with 'three dots' syntax.
const person2 = { ...person };

// changing attribute 'firstName' for 'person2' object.
person2.firstName = 'Peter'

// printing both objects.
console.log( person2 );
console.log( person );

// printing an object with a table visual format.
console.table( person );
console.table( person2 );
