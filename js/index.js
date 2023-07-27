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
const inputDescription = document.getElementById("input-description");
const outputDescription = document.getElementById("output-description");
const descriptionCloseBtn = document.getElementById("description-close-btn");
const imageCloseBtn = document.getElementById("image-close-btn");
const headingCloseBtn = document.getElementById("heading-close-btn");
const inputDescriptionContainer = document.getElementById(
  "input-description-container"
);
const inputImgContainer = document.getElementById("input-img-container");
const dropZone = document.getElementById("dropZone");
const canvas = document.getElementById("canvas");
const itemsHeading = document.getElementById("items-heading");

downloadButton.addEventListener("click", function () {
  html2canvas(capture).then(function (canvas) {
    const imgData = canvas.toDataURL("myImage/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "myImage.png";
    link.click();
  });
});

function itemsHeadingVisibility() {
  const headingBtnClasses = [...headingBtn.classList];
  const imageUploaderBtnClasses = [...imageUploaderBtn.classList];
  const descriptionBtnClasses = [...descriptionBtn.classList];

  if (
    headingBtnClasses.includes("hidden") &&
    imageUploaderBtnClasses.includes("hidden") &&
    descriptionBtnClasses.includes("hidden")
  ) {
    itemsHeading.classList.add("hidden");
    return;
  }

  itemsHeading.classList.remove("hidden");
  return;
}

inputHeadingContainer.addEventListener("input", function (e) {
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
  showImage(imgFile);
});

inputImgContainer.addEventListener("dragover", (e) => {
  e.preventDefault();
  inputImgContainer.classList.add(
    "border-2",
    "border-blue-500",
    "drop-shadow-2xl"
  );
  inputImgContainer.classList.remove("border", "border-slate-300");
});

inputImgContainer.addEventListener("dragleave", (e) => {
  e.preventDefault();
  inputImgContainer.classList.add("border", "border-slate-300");
  inputImgContainer.classList.remove(
    "border-2",
    "border-blue-500",
    "drop-shadow-2xl"
  );
});

inputImgContainer.addEventListener("drop", function (e) {
  e.preventDefault();
  inputImgContainer.classList.add("border", "border-slate-300");
  inputImgContainer.classList.remove(
    "border-2",
    "border-blue-500",
    "drop-shadow-2xl"
  );
  const file = e.dataTransfer.files[0];
  showImage(file);
});

function showImage(imgFile) {
  const reader = new FileReader();

  reader.onload = function () {
    showImgId.src = reader.result;
  };

  if (imgFile) {
    reader.readAsDataURL(imgFile);
  }
}

inputDescription.addEventListener("input", function (e) {
  outputDescription.innerText = e.target.value;
});

headingCloseBtn.addEventListener("click", function () {
  inputHeadingContainer.classList.add("hidden");
  headingBtn.classList.remove("hidden");
  itemsHeadingVisibility();
});

imageCloseBtn.addEventListener("click", function () {
  inputImgContainer.classList.add("hidden");
  imageUploaderBtn.classList.remove("hidden");
  itemsHeadingVisibility();
});

descriptionCloseBtn.addEventListener("click", function () {
  inputDescriptionContainer.classList.add("hidden");
  descriptionBtn.classList.remove("hidden");
  itemsHeadingVisibility();
});

headingBtn.addEventListener("click", function () {
  inputHeadingContainer.classList.remove("hidden");
  this.classList.add("hidden");
  itemsHeadingVisibility();
});

imageUploaderBtn.addEventListener("click", function () {
  inputImgContainer.classList.remove("hidden");
  this.classList.add("hidden");
  itemsHeadingVisibility();
});

descriptionBtn.addEventListener("click", function () {
  inputDescriptionContainer.classList.remove("hidden");
  this.classList.add("hidden");
  itemsHeadingVisibility();
});
