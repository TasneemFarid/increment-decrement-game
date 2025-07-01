let counter = document.getElementById('counter')
let count = 0

function increment(){
    count++
    counter.innerHTML = count
}

function decrement(){
    if(count > 0){
        count--
        counter.innerHTML = count
    }else{
        counter.innerHTML = 0
    }

}
