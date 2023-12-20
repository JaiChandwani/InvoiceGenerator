a = new Date()
document.getElementById("date").innerHTML = a.toLocaleString('en-GB', { timeZone: 'UTC' })

var minm = 1000;
var maxm = 9999;
document.getElementById('gfg').innerHTML = "ODR/2021123" + Math.floor(Math
    .random() * (maxm - minm + 1));
document.getElementById('jcN').innerHTML = "JC-" + a.getUTCFullYear() + "-" + Math.floor(Math
    .random() * (maxm - minm + 1));


function goToPrint() {
    document.getElementById('input').style.display = 'none';
    document.getElementById('rstBtn').style.display = 'none';
    document.getElementById('pntBtn').style.display = 'none';
    window.print()

}


function generateInvoice() {
    let pName;
    let Qnt;
    let rate;
    let total;

    pName = document.getElementById("productName").value;
    Qnt = document.getElementById("quantity").value;
    rate = document.getElementById("uPrice").value;
    let table = document.getElementById('goodsTable');
    let row = table.insertRow(1)
    let c1 = row.insertCell(0)
    let c2 = row.insertCell(1)
    let c3 = row.insertCell(2)
    let c4 = row.insertCell(3)
    c1.innerHTML = pName
    c2.innerHTML = Qnt
    c3.innerHTML = rate
    total = Qnt * rate + (((Qnt * rate) * 18) / 100)
    c4.innerHTML = total
    document.getElementById('getTotal').innerHTML= total
}



