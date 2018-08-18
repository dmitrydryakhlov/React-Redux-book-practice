//////////////////////////////////////////////////////////

function vacation(dest, length) {
    this.dest = dest
    this.length = length
}

vacation.prototype.print = function () {
    console.log(this.dest + '|' + this.length + 'days')
}

let maui = new vacation('Maui', 7)
maui.print()

///////////////////////////////////////////////////////////

class Vacation {
    constructor(dest, length) {
        this.dest = dest
        this.length = length
    }

    print() {
        console.log(`${this.dest} will make ${this.length} days`)
    }
}

const trip = new Vacation('Santiago', 7)
trip.print()

///////////////////////////////////////////////////////////

class Expedition extends Vacation {
    constructor(destination, length, gear) {
        super(destination, length)
        this.gear = gear
    }
    print(){
        console.log(`Bring your ${this.gear.join(' and your ')}`)
    }
}

const _trip = new Expedition('Mt. Whitney', 3, ['sunglasses', 'prayer flags', 'camera'])

_trip.print();

///////////////////////////////////////////////////////////