let animals= new Set();
animals.add("Hổ")
animals.add("Cáo")
animals.add("Tê Giác")
animals.add("Vượn")
console.log( animals)

add=()=>{
    let ip=prompt("nhập tên cần thêm")
    animals.add(ip)
}
check=()=>{
    let ip=prompt("nhập tên cần kiểm tra")
    if(animals.has(ip)){
        alert(ip +" có trong danh sách ")
    }
    else {
        alert(ip +" không có trong danh sách ")

    }
}
del=()=>{
    let ip=prompt("nhập tên cần xóa")
    if(!animals.has(ip)){
        alert(ip +" không có trong danh sách ");
    }
    else{
        animals.delete(ip);
    }
}

ex=()=>{
    let liststr=""
    for (const i of animals) {
        liststr+=`${i}, `;
    }
    alert(liststr)
}