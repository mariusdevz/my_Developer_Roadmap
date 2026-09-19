const book = {
    Paul: {
        phone: 689090077,
        email: 'paul@outlook.com'
    },
    Sandy: {
        phone: 657858590,
        email: 'sandy@gmail.com'
    },
    Mark: {
        phone: 656773889,
        email: 'mark@gmail.com'
    },
    Zoey: {
        phone: 677410045,
        email: 'zoey@gmail.com'
    }
}


function contactName(name) {
    if (book[name]) {
        return book[name]
    } else {
        return "unknown contact"
    }
}


console.log(contactName('Mrk'));
console.log(contactName('Zoey'));

