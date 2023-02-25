function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0 ){
        alert('Por Favor! Digite um Número!')
    } else {
        let n= Number(num.value)
        let c= 1
        tab.innerHTML=''
        while (c <=10 ) {
            let i= document.createElement('option')
            i.text = `${n} x ${c} = ${n*c}`
            i.value = `tab${c}`
            tab.appendChild(i)
            c++

        }
    }
}