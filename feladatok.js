'use strict'
const Validator= {
    patterns: {
        Visa: /^(\d{4} ){3}\d{4}$/,
        
        ip: /^(\d{1,3}['.']{1}){3}\d{1,3}$/,
        
        MAC: /^([a-fA-F0-9]{2}[:-]{1}){5}[a-fA-F0-9]{2}$/
    },
    validate(text, type){
        return text.match(this.patterns[type]) ? true : false;
    }
};

console.log(Validator.validate('1230 4560 7890 1234', 'Visa'));
console.log(Validator.validate('192.134.212.234', 'ip'));
console.log(Validator.validate('ac-EF-00-10-2e-34' , 'MAC'));


function visa(){
    const pattern=Validator.patterns.Visa;
    let szoveg=document.querySelector('.ellenorzoInput').value; 
    if(pattern.test(szoveg)){
        document.querySelector('.eredmeny').textContent='Ez egy Visa kártya';
    }else{
      document.querySelector('.eredmeny').textContent='Ez nem egy Visa kártya';
    };
}; 

function ip(){
    const pattern=Validator.patterns.ip;
    let szoveg=document.querySelector('.ellenorzoInput').value; 
    if(pattern.test(szoveg)){
        document.querySelector('.eredmeny').textContent='Ez egy IP cím';
    }else{
        document.querySelector('.eredmeny').textContent='Ez nem egy IP cím';
    };
}; 
function mac(){
    const pattern=Validator.patterns.MAC;
    let szoveg=document.querySelector('.ellenorzoInput').value; 
    if(pattern.test(szoveg)){
        document.querySelector('.eredmeny').textContent='Ez egy MAC cím';
    }else{
        document.querySelector('.eredmeny').textContent='Ez nem egy MAC cím';
    };
}; 

