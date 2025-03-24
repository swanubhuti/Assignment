// Car constructor function
function Car(name, brand, year) {
    this.name = name;
    this.brand = brand;
    this.year = year;
    
    // Method to display car information
    this.displayInfo = function() {
      console.log(`Car Details:
  Name: ${this.name}
  Brand: ${this.brand}
  Year: ${this.year}`);
    };
  }
 
  const myCar = new Car("Model S", "Tesla", 2023);
  myCar.displayInfo();