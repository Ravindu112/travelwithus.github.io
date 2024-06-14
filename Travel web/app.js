let next=document.querySelector('.next')
let prev=document.querySelector('.prev')

next.addEventListener('click',function(){
    let items=document.querySelectorAll('.item')
    document.querySelector('.slideDis').appendChild(items[0])
})

prev.addEventListener('click',function(){
    let items=document.querySelectorAll('.item')
    document.querySelector('.slideDis').prepend(items[items.length-1])
})