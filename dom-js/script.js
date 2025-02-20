 document.body.style.background = 'white'
let h1 = document.getElementById('heading')
 h1.setAttribute('class', 'bg-info text-white')

 let h2 = document.createElement('h2')
 document.body.appendChild(h2)
 h2.innerText = 'ini h2'
 h2.setAttribute('class', 'bg-danger text-white text-center')

 let h3 = document.createElement('h3')
 h3.append('ini h3')
 h2.insertAdjacentElement('afterend', h3)


let a =  document.getElementById('1')
a.remove()

let p = document.getElementById('counter')
let counter = 0
p.innerText = counter

function increment(){
  counter += 1
  p.innerText = counter
}
function decrement(){
  if (counter > 0){
  counter -= 1
  p.innerText = counter
  }else{
    alert('counter sudah 0')
  }
}
function mouseOver(){
  document.body.style.background = 'blue'
}
function mouseOut(){
  document.body.style.background = 'red'

}
 //color ke white lagi
 document.body.style.background = 'white'

 btnAddvent = document.getElementById('btnAdvent')
 btnAddvent.addEventListener('click', function(){
     document.body.style.background = 'green'
 })

 //realtime search
 let inputRealtime = document.getElementById('inputRealtime')
 let realtime = document.getElementById('realtime')
 let btnSearch = document.getElementById('btnSearch')
 inputRealtime.addEventListener('keyup', function(){
     realtime.innerText = inputRealtime.value
 })
 btnSearch.addEventListener('click', function(){
  console.log(inputRealtime.value)
 })
 
 





