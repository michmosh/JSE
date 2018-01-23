
class Laptop extends Computer {
    constructor(procesorMemeory, diskMemory, processorModel, price, liability, batteryHours, batteryPrec, touchScreen) {
        super(procesorMemeory, diskMemory, processorModel, price, liability);
        this.batteryHours = batteryHours;
        this.touchScreen = touchScreen;
        this.batteryPrec = batteryPrec;
    }

    set batteryHours(batteryHours) {
        if (batteryHours >= 1 && batteryHours <= 9)
            this._batteryHours = batteryHours;
        else
            console.log(`Mouse must be wireless or not value given : ${batteryHours} `);
    }

    set batteryPrec(batteryPrec) {
        if (batteryPrec >= 0 && batteryPrec <= 100)
            this._batteryPrec = batteryPrec;
        else
            console.log(`Mouse must be wireless or not value given : ${batteryHours} `);
    }

    set touchScreen(touchScreen) {
        if (typeof (touchScreen) == "boolean")
            this._touchScreen = touchScreen;
        else
            console.log(`Touch screen must be true or false, value given : ${touchScreen} `);
    }

    get batteryPrec() {
        if (this._batteryPrec == undefined)
            return `Call store for battery precentage  `;
        else
            return this._batteryPrec;
    }

    get touchScreen() {
        if (this._touchScreen == undefined)
            return `Call store for touch screen  `;
        else
            return this._touchScreen;
    }

    get batteryHours() {
        if (this._batteryHours == undefined)
            return `Call store for battery hours  `;
        else
            return this._batteryHours;
    }

    getExtraGear() {
        console.log(` Would you be interested in a bag for your laptop `);
        super.getExtraGear();
        //    when i tried to do this.__proto__.getExtraGear() i got the same console.log twice it calls both methods why ? 
        // Would you be interested in a bag for your laptop 
        // Would you be interested in a bag for your laptop 
        // do you want to buy headphones  
        // i dont understand why is that 
    }

    print() {
        console.log(`
        Laptop:
            Procesor memeory : ${this.procesorMemeory}, 
            Disk memory : ${this.diskMemory}, 
            Processor model : ${this.processorModel},
            Price : ${this.price},
            Liability : ${this.liability}
            Hours : ${this.batteryHours}, 
            Precentage : ${this.batteryPrec}, 
            Screen : ${this.touchScreen}
        `);

    }
}