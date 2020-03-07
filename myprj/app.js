let dataJs = lpu;
console.log('dataJs :', dataJs);
let tbody = document.querySelector('.tbody');
function show() {
    for (let i = 0; i < dataJs.length; i++) {
        let j = i + 1;
        let str = '<tr><th scope="row">'+j+'</th><td class="fullName">'+dataJs[i].full_name+'</td><td class="address">'+dataJs[i].address+'</td><td class="phone">'+dataJs[i].phone+'</td></tr>';
        tbody.insertAdjacentHTML('beforeend',str);
        document.querySelector('.delBtn').insertAdjacentHTML('beforeend','<option>'+j+'</option>');
        document.querySelector('.edtBtn').insertAdjacentHTML('beforeend','<option>'+j+'</option>');
    }
}

if (dataJs != null && dataJs.length != 0){
    document.getElementById('fullNameEdit').value = dataJs[0].full_name;
    document.getElementById('addressEdit').value = dataJs[0].address;
    document.getElementById('phoneEdit').value = dataJs[0].phone;
    show();
}

document.querySelector('.add').addEventListener('click', () => {
    let fullName = document.querySelector('#fullName').value;
    let address = document.querySelector('#address').value;
    let phone = document.querySelector('#phone').value;
    let obj = {
        "full_name": fullName,
        "address": address,
        "phone": phone
    };
    if (dataJs != null && dataJs.length != 0){
        dataJs.push(obj);
    }else{
        dataJs = [{ "full_name": fullName, "address": address, "phone": phone }];
    }
    document.querySelector('.delBtn').innerHTML = '';
    document.querySelector('.edtBtn').innerHTML = '';
    tbody.innerHTML = '';
    show();
    let stringData = JSON.stringify(dataJs);
    localStorage.setItem('JSON', stringData);
});


document.querySelector('.delete').addEventListener('click', () => {
    let j = document.querySelector('.delBtn').value;
    dataJs.splice(j-1, 1);
    console.log('dataJs :', dataJs);
    document.querySelector('.delBtn').innerHTML = '';
    document.querySelector('.edtBtn').innerHTML = '';
    tbody.innerHTML = '';
    show();
    let stringData = JSON.stringify(dataJs);
    localStorage.setItem('JSON', stringData);
});

document.querySelector('.edtBtn').addEventListener('change', () => {
    let j = document.querySelector('.edtBtn').value
    document.getElementById('fullNameEdit').value = dataJs[j-1].full_name;
    document.getElementById('addressEdit').value = dataJs[j-1].address;
    document.getElementById('phoneEdit').value = dataJs[j-1].phone;
})

document.querySelector('.edit').addEventListener('click', () => {
    let j = dataJs[document.querySelector('.edtBtn').value - 1];
    j.full_name = document.getElementById('fullNameEdit').value;
    j.address = document.getElementById('addressEdit').value;
    j.phone = document.getElementById('phoneEdit').value;
    document.querySelector('.delBtn').innerHTML = '';
    document.querySelector('.edtBtn').innerHTML = '';
    tbody.innerHTML = '';
    show();
    let stringData = JSON.stringify(dataJs);
    localStorage.setItem('JSON', stringData);
})


