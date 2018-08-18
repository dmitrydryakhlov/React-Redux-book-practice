let presentation = (firstName, lastName) => {
    console.log(`I'm ${firstName} ${lastName}`)
}

presentation('Dmitry', 'Dryakhlov')


let tahoe = {
    resorts: ['Kirkwood', 'Apline'],
    
    print: function (delay = 1000) {
        setTimeout(() => {
            console.log(this.resorts.join(', '))
            console.log(this)
        }, delay)
    },

    print1: function (delay = 1000) {
        setTimeout(function () {
            //console.log(this.resorts.join(', '))
            console.log(this)
        }, delay)
    },

    print2: (delay = 1000) => {
        setTimeout(function () {
            //console.log(this.resorts.join(', '))
            console.log(this)
        }, delay)
    }
}

tahoe.print();
tahoe.print1();
tahoe.print2();