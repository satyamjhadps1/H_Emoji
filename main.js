function load(){
    Webcam.set({
        width : 350,
        height : 350,
        image_format : 'png',
    });
    Webcam.attach(document.getElementById("camera"));
}