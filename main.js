class Formula {
   #surname;
   #x;

    constructor(){
        this.#surname = "Žerebkovs"
        this.#x=0;
        
    }

  

    setAlert(message){
        alert(message)
    }

    setX(value){
        if(typeof value  ==='number'){
           
            this.#x = value
        }else {
            this.setAlert("X has to be a Number")
            throw new Error("X has to be a Number")
        }
        
    }
    
    f1 () {
        try {
            return (Math.sqrt(3*this.#x))/(2*this.#x-1); 
        } catch (err) {
            this.setAlert(err)
            throw new Error (err)
        }
        
    }
    f2(){
        try {
            return (Math.sin(this.#x)+1.5)/(Math.cos(this.#x));
        } catch (err) {
            this.setAlert(err)
            throw new Error (err)
        }
        
    }
    
}


const input = document.getElementById("input")
const calculate = document.getElementById("calculate")
const btn_1 = document.getElementById('formula_1');
const btn_2 = document.getElementById("formula_2");
const output = document.getElementById('output')
const span_1 = document.querySelector('.formula_1');
const span_2 = document.querySelector('.formula_2');
const refresh = document.getElementById("refresh");


const state = {
    formula:1
}


function calculateFunc (e) {
    e.preventDefault()
   let result;
    const formula = new Formula()
    if(input.value === ""){
        alert("Please Enter a Number")
    }else {

   formula.setX(parseInt(input.value,10))

   switch(state.formula){
       case 1:
          result= formula.f1()
            break
        case 2:
        result= formula.f2()
        break
   }

   span_1.style.display = 'none'
   span_2.style.display ='none'
   refresh.style.display='block'
   calculate.style.display='none';
   input.style.display='none'
   output.innerHTML = "Result =" + " " +result
  
}
}
function toggle (e){
    e.preventDefault()
    

    if(e.target.id === 'formula_1'){
        span_1.style.display = 'block'
        span_2.style.display ='none'
        state.formula =1;
    }else{
        span_2.style.display ='block'
        span_1.style.display ='none'
        state.formula = 2;
    }

    

}




calculate.addEventListener("click",calculateFunc)
btn_1.addEventListener("click",toggle)
btn_2.addEventListener('click',toggle)
