class Computer {
    constructor(procesorMemeory, diskMemory , processorModel , price, liability){
        this.procesorMemeory = procesorMemeory ;
        this.diskMemory = diskMemory; 
        this.processorModel = processorModel; 
        this.price = price ; 
        this.liability = liability;
    }

    set price(price){
        if(price >= 800 && price <= 20000)
            this._price = price; 
        else
            console.log("price should be between 800-20,000, price given: ", price);
    }

    set liability(liability){
        if(liability >= 0 && liability < 6)
            this._liability = liability;
        else
             console.log("liability should be between 0-5 years, liability given: ", liability);
    }

    get price(){
        if(this._price == undefined)
            return `call store for price`;
        else
            return `${this._price}`;
    }

    get liability(){
        if(this._liability == undefined)
            return `call store for liability`;
        else
            return `${this._liability}`;
    }

    getExtraGear(){
        console.log(`Do you want to buy headphones ? `);
    }

    print(){
        let ret =  `
            Procesor memeory : ${this.procesorMemeory}, 
            Disk memory : ${this.diskMemory}, 
            Processor model : ${this.processorModel},
            Price : ${this.price},
            Liability : ${this.liability}
        `;
        console.log(ret);
    }

    
}

