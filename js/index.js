const fh = document.querySelector('.fh')
const fp = document.querySelector('.fp')
const fc = document.querySelector('.fc')
const int = document.querySelector('.in')
const concu = document.querySelector('.conc')

const divfc = document.querySelector('.filosofos_cla')
const divfp = document.querySelector('.filosofos_pre')
const divfh = document.querySelector('.filosofos_hel')
const divconclu = document.querySelector('.conclusion')

fh.addEventListener('click', ()=>{
    
    window.scrollTo({
        top: divfh.offsetTop,
        behavior: 'smooth'
    })
})


int.addEventListener('click', ()=>{
    
    window.scrollTo({
        top: int.offsetTop,
        behavior: 'smooth'
    })
})

fp.addEventListener('click', ()=>{
    
    window.scrollTo({
        top: divfp.offsetTop,
        behavior: 'smooth'
    })
})

fc.addEventListener('click', ()=>{
    
    window.scrollTo({
        top: divfc.offsetTop,
        behavior: 'smooth'
    })
})

concu.addEventListener('click', ()=>{
    
    window.scrollTo({
        top: divconclu.offsetTop,
        behavior: 'smooth'
    })
})