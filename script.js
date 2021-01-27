var datedata;
var rindex;
var btn;

function formData() {


    var table = document.getElementsByTagName("table")[0];
    var randomId = Math.random();
    randomId = (randomId * 9999999);
    randomId = Math.ceil(randomId);

    var newRow = table.insertRow(table.length);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    var cel5 = newRow.insertCell(4);

    var date = document.getElementById("date").value;
    var title = document.getElementById("title").value;
    var description = document.getElementById("descript").value;


    cel1.innerHTML = randomId;
    cel2.innerHTML = date;
    cel3.innerHTML = title;
    cel4.innerHTML = description;
    cel5.innerHTML = `<button type="button" class="btn btn-primary btn-sm buton" onclick="edit()">Edit</button><button type="button" class="btn btn-danger btn-sm buton" onclick="del()">Delete</button>`;

}
