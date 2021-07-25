function tinhtoan(pheptinh) {
    console.log (pheptinh)
    let a = document.getElementById('sothunhat').value
    let b = document.getElementById('sothuhai').value
    let KQ = ``
    if(pheptinh=='+') {KQ=+a + +b} 
    if(pheptinh=='-') {KQ=+a - +b}
    if(pheptinh=='*') {KQ=a*b}
    if(pheptinh=='/') {KQ=+a / +b}
    // else{KQ= +a / +b}
    document.getElementById('KQ').innerText = KQ.toFixed(2)
    console.log(nhan)
}
// function cong() {
//     let a = document.getElementById('sothunhat').value
//     let b = document.getElementById('sothuhai').value
//     let cong = Number(a) + Number(b)
//     document.getElementById('KQ').innerText = cong
// }
// function tru() {
//     let a = document.getElementById('sothunhat').value
//     let b = document.getElementById('sothuhai').value
//     let tru = a-b
//     document.getElementById('KQ').innerText = tru
// }
// function chia() {
//     let a = document.getElementById('sothunhat').value
//     let b = document.getElementById('sothuhai').value
//     let chia = +a / +b
//     document.getElementById('KQ').innerText = chia.toFixed(2)
// }