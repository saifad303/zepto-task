const capture = document.getElementById("capture");
const headingBtn = document.getElementById("heading-btn");
const imageUploaderBtn = document.getElementById("imageUploader-btn");
const descriptionBtn = document.getElementById("description-btn");
const downloadButton = document.getElementById("downloadButton");
const previewTitle = document.getElementById("preview-title");
const inputHeadingContainer = document.getElementById(
  "input-heading-container"
);

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
