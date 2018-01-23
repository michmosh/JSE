$(document).foundation()
var EX1 = (function() {
    var input_array= ['name' , 'age' , 'birthday', 'color' ];
    var formData = {};
    
    var addUser = function(){
        formData = getFormData();
        storeInStorage(formData);
        generateTab(formData);
    }
    var getFormData =  function(){
        var formElement = document.querySelector("form");
        var formData = new FormData(formElement);
        input_array.forEach(function cb(el){
            formData[el] = formData.get(el);
        })  
        return formData;
    }
    var storeInStorage =  function(formData){
        var users = JSON.parse(localStorage.getItem('users')); 
        users.push(formData);
        localStorage.setItem('users',JSON.stringify(users));
    }
    var setStorage = function(){
        if(localStorage.getItem('users') == null ){
            localStorage.setItem('users' , JSON.stringify([]));
        }  
    }
    var generateUsersTabs = function(array){
        array.forEach(function cb(el){
            generateTab(el);
        })
    }
    var generateTab = function(el){
        var html = `<div class="small-3">
                        <div class="card"  style="color:${el.color}">
                            <div class="card-divider">
                                ${el.name}
                            </div>
                            <div class="card-section">
                                <div>
                                    <p>${el.age}</p>
                                    <p>${el.birthday}</p>
                                </div>
                            </div>
                        </div>
                    <div>`;
        var users_div = document.getElementById('users');
        users_div.insertAdjacentHTML('beforeend',html);
    }
    setStorage();
    generateUsersTabs(JSON.parse(localStorage.getItem('users')));
    return{
        'addUser' : addUser
    } 
}());

