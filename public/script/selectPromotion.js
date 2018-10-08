// function getSelectValue(imgid,newing){
//   console.log("js is running");
//   var myimage =   document.getElementById('imgid');
//   myimage.src ="https://cdn.pixabay.com/photo/2017/04/26/18/36/cartoon-art-2263376_960_720.png";
// }

function jsDropDown(imgid,nameid,txtid,newing){
  document.getElementById(imgid).src = "../pictures/" + newing + ".jpg"
  if(newing == "Logo_Red"){
    document.getElementById(txtid).innerHTML = "฿ 999";
    document.getElementById(nameid).innerHTML = "Promotion RedLabel with 9 Mixer";
  } else if(newing == "Logo_Black"){
    document.getElementById(txtid).innerHTML = "฿ 1399";
    document.getElementById(nameid).innerHTML = "Promotion BlackLabel with 9 Mixer";
  }
  // console.log("newing = "+newing);
  // console.log("txt = "+txtPromotion);
  // document.getElementById(txtPromotion).innerHTML = "Promotion RedLabel with 9 Mixer";

}
