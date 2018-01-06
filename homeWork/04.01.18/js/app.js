let colorPick = (()=>{
    let times = 0;
    let current_color = "none"; 
    let last_color;
    let click_index = 0;
    let setEventListener = function(){
        let input = document.querySelector('input[name=color]');
        input.addEventListener('change',function(event){
        setAndDisplayData(event);
        })
    }();

    let setAndDisplayData = function(event){
        setData(event);
        displayData(click_index);
    }

    let setData = function(event){
        click_index++
        times++;
        last_color = current_color;
        current_color = event.target.value;
    }

    let displayData = function(click_index){ // pass it as parameter to keep click index current value 
                                            // basicaly its the same as creating a local variable : let click_index  = times;
        let return_obj = {
            times:times,
            click_index:click_index, 
            current_color:current_color,
            last_color:last_color
        }
        return_obj.toString = function(){
            return `
                    times : ${times}
                    index: ${click_index}
                    color : ${current_color} . 
                    last color : ${last_color}.
            `;
        }
        setTimeout(function(){
            alert(return_obj);
        },5000)   
    }

   return setAndDisplayData;

})();

function Shape(posX , posY , color){
    this.x = posX; 
    this.y = posY;
    this.color = color;
    this.distance = function(){
        return `
            DISTANCE : ${Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2))}
        `;
    }
    this.toString = function(){
        return `
            X = ${this.x * this.x} 
            Y = ${this.y * this.y}
            COLOR = ${this.color}
            ${this.distance()}
        `;
    }
}

let one = new Shape(23,15,'red');
let two = new Shape(13,25,'green');

console.log(one.toString()) ;
console.log(two.toString());