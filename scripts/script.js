document.getElementById('btnProduct').onclick = function() {
    calcCost();
};

function calcCost() {
    var sP = document.getElementById('selectProduct').value;
    var qP = document.getElementById('quantityProduct').value;
    var total = sP * qP;
    document.getElementById('priceProduct').innerHTML = total;
    document.getElementById('infoProduct').style.display = 'block';

    if (sP == 0 || qP == 0) {
        document.getElementById('infoProduct').style.display = 'none';
        alert('Укажите значения');
        return;
    }
}