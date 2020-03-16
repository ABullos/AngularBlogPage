class Vehicle {
    color: string;
    plateNo: any;
    type: string;

    constructor(color:string, plateNo:any, type:string){
        this.color = color;
        this.plateNo = plateNo;
        this.type = type;
    }

    showVehicleData() {
        console.log (`Color: ${this.color}Plate No: ${this.plateNo} Type:${this.type}`)
    }
}
class Car extends Vehicle {
    gasType: string;
    constructor (gasType : string, color:string, plateNo:any, type:string) {
        super(color, plateNo, type);
        this.gasType = gasType;
    }
}
let taxi = new Car("Gasoline", "White", "SUV", "Diesel");
console.log(taxi.showVehicleData())