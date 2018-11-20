function jsDropDown(imgid,nameid,txtid,newing){
  document.getElementById(imgid).src = "../pictures/" + newing + ".jpg"
  if(newing == "Logo_Red"){
    document.getElementById(txtid).innerHTML = "฿ 999";
    document.getElementById(nameid).innerHTML = "Promotion RedLabel with 9 Mixer";
  } else if(newing == "Logo_Black"){
    document.getElementById(txtid).innerHTML = "฿ 1799";
    document.getElementById(nameid).innerHTML = "Promotion BlackLabel with 9 Mixer";
  }


}
