


function time() {
    let hour;
    let minutes;
    let seconds;

    d = new Date();

    hour = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
    return hour + ':' + minutes + ':' + seconds
}
function final() {
 
    document.getElementById('xyz').innerHTML = time();
}

window.setInterval('final()', 1000);