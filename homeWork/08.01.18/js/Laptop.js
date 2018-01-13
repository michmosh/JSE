
class Laptop extends Computer{
    constructor(procesorMemeory, diskMemory , processorModel , price, liability, wirless, screenSize){
        super(procesorMemeory, diskMemory , processorModel , price, liability);
        this.wirless = wirless;
        this.screenSize = screenSize;
    }

    set wirless(wirless){
        if(typeof(wirless) == Boolean)
            this._wirless = wirless;
        else
            console.log(`Mouse must be wireless or not value given : ${wirless} `);
    }

    set screenSize(screenSize){
        if(screenSize >= 11 && screenSize <= 18)
            this._screenSize = screenSize;
        else 
            console.log(`Screen size must be between 11-18 value given : ${screenSize} `);
    }

    get screenSize(){
         if(this._screenSize == undefined)
            return `Call store for screen  `;
        else
            return this._screenSize;
    }

    get wirless(){
        if(this._wirless == undefined)
            return `Call store for mouse  `;
        else
            return this._wirless;
    }

    getExtraGear(){
       console.log(` Would you be interested in a table for your new computer `);
    }

    print(){
        console.log(  `
            Procesor memeory : ${this.procesorMemeory}, 
            Disk memory : ${this.diskMemory}, 
            Processor model : ${this.processorModel},
            Price : ${this.price},
            Liability : ${this.liability}
            Mouse : ${this.wirless}, 
            Screen : ${this.screenSize}
        `);
       
    }
}