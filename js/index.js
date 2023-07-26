const capture = document.getElementById("capture");
const headingBtn = document.getElementById("heading-btn");
const imageUploaderBtn = document.getElementById("imageUploader-btn");
const descriptionBtn = document.getElementById("description-btn");
const downloadButton = document.getElementById("downloadButton");
const previewTitle = document.getElementById("preview-title");
const inputHeadingContainer = document.getElementById(
  "input-heading-container"
);
const textAlignRight = document.getElementById("text-align-right");
const textAlignLeft = document.getElementById("text-align-left");
const textAlignCenter = document.getElementById("text-align-center");
const greenColorBtn = document.getElementById("green-color-btn");
const blueColorBtn = document.getElementById("blue-color-btn");
const blackColorBtn = document.getElementById("black-color-btn");
const showImgId = document.getElementById("show-img-id");
const imgUpload = document.getElementById("img-upload");

// image download script
downloadButton.addEventListener("click", function () {
  html2canvas(capture).then(function (canvas) {
    const imgData = canvas.toDataURL("myImage/png");

    const link = document.createElement("a");
    link.href = imgData;
    link.download = "myImage.png";
    link.click();
  });
});

// headingBtn.addEventListener("click", function () {});

inputHeadingContainer.addEventListener("input", function (e) {
  console.log(e.target.value);
  previewTitle.innerHTML = e.target.value;
});

textAlignRight.addEventListener("click", function () {
  previewTitle.classList.add("text-right");
  previewTitle.classList.remove("text-left");
  previewTitle.classList.remove("text-center");
});

textAlignLeft.addEventListener("click", function () {
  previewTitle.classList.add("text-left");
  previewTitle.classList.remove("text-right");
  previewTitle.classList.remove("text-center");
});

textAlignCenter.addEventListener("click", function () {
  previewTitle.classList.add("text-center");
  previewTitle.classList.remove("text-right");
  previewTitle.classList.remove("text-left");
});

greenColorBtn.addEventListener("click", function () {
  previewTitle.classList.add("text-green-700");
  previewTitle.classList.remove("text-black");
  previewTitle.classList.remove("text-blue-700");
});

blueColorBtn.addEventListener("click", function () {
  previewTitle.classList.add("text-blue-700");
  previewTitle.classList.remove("text-green-700");
  previewTitle.classList.remove("text-black");
});

blackColorBtn.addEventListener("click", function () {
  previewTitle.classList.add("text-black");
  previewTitle.classList.remove("text-blue-700");
  previewTitle.classList.remove("text-green-700");
});

imgUpload.addEventListener("change", function (event) {
  const imgFile = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    showImgId.src = reader.result;
  };

  if (imgFile) {
    reader.readAsDataURL(imgFile);
  }
});
