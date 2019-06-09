var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 22.307159, lng: 73.181221},
    zoom: 8
  });
}
window.addEventListener('scroll',function(){
    if(this.window.scrollY > 150){
        document.querySelector("#navbar").style.opacity=0.9;
    }else{
        document.querySelector("#navbar").style.opacity=1;
    }
});
$("#navbar a,.btn").on("click",function(event){
  event.preventDefault();
  if(this.hash != ''){
    const hash = this.hash;
    //alert(hash);
    $('html,body').animate({
        scrollTop:$(hash).offset().top - 100
    }, 800);
    return false;
  }
   
});