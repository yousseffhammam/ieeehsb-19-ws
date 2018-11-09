function map() {
    let mapProp = {
        center: new window.google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
    };
    let map = new window.google.maps.Map(document.getElementById("googleMap"), mapProp);
}