
document.addEventListener("DOMContentLoaded", function(){

    var d = new Date();
    document.getElementById("date").innerHTML = d;

console.log(date_field, "date help")

});  // native browser event and callback

function testJS() {
    var b = document.getElementById('fname').value,
        href = 'buyer_solidity_form.html' + encodeURIComponent(b);

    document.location.href = href;
}

function onLoad () {
    var href = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    document.getElementById('fname').innerHTML = data.name;
    onload="onLoad";
}

// document.addEventListener("DOMContentLoaded", function(){
//     let date_field = document.getElementById("date");
//     date_field.value = new Date();

//     // let now = document.getElementById("date"); 
//     // now.dateFormat("longTime");
    
//     // var d = new Date();
//     // document.getElementById("datePicker").innerHTML = d.toDateString();
   
// console.log(date_field, "date help")


// });  // native browser event and callback

function initiateTransfer {
    
}


