function calc(){
    let tmp1 = document.getElementById('tmp1').value;
    let convert = tmp1 * 9/5 + 32;

    document.getElementById('resultado').value = convert

    console.log(tmp1);
}