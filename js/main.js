function calc(){
    let tmp1 = document.getElementById('tmp1').value;
    let c1 = tmp1 * 9/5 + 32;
    let c2 = tmp1 + 273.15;

    document.getElementById('resultado').value = c1
    document.getElementById('resultado').value = c2

    console.log(tmp1);
}