let sellvalue=parseInt(prompt('Nhap vao Doanh thu ban hang (don vi : Trieu)'));

if (sellvalue>50){
    alert('Hoa hong nhan duoc la 2%, bang '+ sellvalue*2/100+'Trieu');
}else if (sellvalue>30){
    alert('Hoa hong nhan duoc la 1%, bang '+ sellvalue*1/100+'Trieu');
}else if (sellvalue>10){
    alert('Hoa hong nhan duoc la 0.5%, bang '+ sellvalue*.5/100+'Trieu');
}else {
    alert('Doanh thu chua dat muc nhan Hoa hong');
}