function hien() {
    document.getElementById('noidung').style.display = 'inline'
}
function an() {
    document.getElementById('noidung').style.display = 'none'
}
function khoidong() {
    document.getElementById('tieude').style.color = 'red'
    document.getElementById('noidung').style.display = 'inline'
    let bang2 = document.getElementById('bang2');
    let noidungbang = ``;
    for (let i = 1; i < 10; i = i + 1) {
        let noidungdong = '';
        for (let j = 1; j < 10; j = j + 1) {
            noidungdong = noidungdong + `<td>${j}x${i}=${j*i}</td>`
        }
        noidungbang = noidungbang + `<tr>${noidungdong}</tr>`
    bang2.innerHTML = noidungbang
 }
}
function doimau() {
    let title = document.getElementById('tieude')
    if (title.style.color == 'red') {
        title.style.color = 'blue'
    }
    else {
        title.style.color = 'red'
    }
}