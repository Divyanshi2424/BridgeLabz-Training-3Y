
// Parent Class

class MovieTicket {

    constructor(movieName, seatNo, price) {

        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

// Adding Method to MovieTicket Prototype

MovieTicket.prototype.printTicket = function() {

    console.log("Movie Name:", this.movieName);
    console.log("Seat Number:", this.seatNo);
    console.log("Ticket Price: Rs.", this.price);

};

// Child Class

class OnlineTicket extends MovieTicket {

    constructor(movieName, seatNo, price, convenienceFee) {

        super(movieName, seatNo, price);

        this.convenienceFee = convenienceFee;
    }

    // Calculate Total Amount

    getTotalAmount() {

        return this.price + this.convenienceFee;
    }
}

// Creating Online Ticket Objects

let ticket1 = new OnlineTicket("Avengers", "A1", 250, 30);

let ticket2 = new OnlineTicket("Inception", "B2", 200, 20);

// Printing First Ticket

console.log("----- Movie Ticket 1 -----");

ticket1.printTicket();

console.log("Convenience Fee: Rs.", ticket1.convenienceFee);

console.log("Total Amount: Rs.", ticket1.getTotalAmount());

console.log("-------------------------");

// Printing Second Ticket

console.log("----- Movie Ticket 2 -----");

ticket2.printTicket();

console.log("Convenience Fee: Rs.", ticket2.convenienceFee);

console.log("Total Amount: Rs.", ticket2.getTotalAmount());

console.log("-------------------------");

// Demonstrating Prototype Chain

console.log(
    "Prototype Chain:",
    MovieTicket.prototype.isPrototypeOf(OnlineTicket.prototype)
);

console.log(
    "Ticket inherits MovieTicket:",
    MovieTicket.prototype.isPrototypeOf(ticket1)
);
