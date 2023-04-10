const video = document.querySelector(".video");
const downloadPhoto = document.getElementById("downloadPhoto");
const canvas = document.getElementById("canvas");
const photo = document.getElementById("photo");
const context = canvas.getContext("2d");

const startWebCam = () => {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => (video.srcObject = stream))
          .catch((error) => console.log(error));
    }
    photo.style.display='none'
};

startWebCam();

function takePicture() {
  const height = video.videoHeight;
    const width = video.videoWidth;
    photo.style.display='flex'
    

  if (width && height) {
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);
    var data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
    downloadPhoto.setAttribute("href", data);
  } else {
    return;
  }
}
