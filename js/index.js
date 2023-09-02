siteTemplate();
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
const itemsHeading = document.getElementById("items-heading");
const btnContainer = document.getElementById("btn-container");

downloadButton.addEventListener("click", function () {
  html2canvas(capture).then(function (canvas) {
    // Convert the canvas to an image URL
    const imgData = canvas.toDataURL("image/png");

    // Create a temporary link element and download the image
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "screenshot.png";
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
  previewTitle.classList.add("hidden");
  itemsHeadingVisibility();
});

imageCloseBtn.addEventListener("click", function () {
  inputImgContainer.classList.add("hidden");
  imageUploaderBtn.classList.remove("hidden");
  showImgId.classList.add("hidden");
  itemsHeadingVisibility();
});

descriptionCloseBtn.addEventListener("click", function () {
  inputDescriptionContainer.classList.add("hidden");
  descriptionBtn.classList.remove("hidden");
  outputDescription.classList.add("hidden");
  itemsHeadingVisibility();
});

headingBtn.addEventListener("click", function () {
  inputHeadingContainer.classList.remove("hidden");
  this.classList.add("hidden");
  previewTitle.classList.remove("hidden");
  itemsHeadingVisibility();
});

imageUploaderBtn.addEventListener("click", function () {
  inputImgContainer.classList.remove("hidden");
  this.classList.add("hidden");
  showImgId.classList.remove("hidden");
  itemsHeadingVisibility();
});

descriptionBtn.addEventListener("click", function () {
  inputDescriptionContainer.classList.remove("hidden");
  this.classList.add("hidden");
  outputDescription.classList.remove("hidden");
  itemsHeadingVisibility();
});

function siteTemplate() {
  const app = document.getElementById("app");
  const appDiv = document.createElement("div");
  appDiv.classList.add(
    "py-14",
    "mx-5",
    "flex",
    "flex-col",
    "gap-10",
    "lg:flex-row"
  );

  const appDivFirstChild = document.createElement("div");
  appDivFirstChild.classList.add(
    "w-full",
    "px-6",
    "pt-14",
    "border-2",
    "border-slate-400",
    "rounded-lg",
    "relative",
    "min-h-[90vh]"
  );

  const appDivFirstChildSectionOneContent = `
        <div
        class="bg-white flex items-center justify-center h-11 rounded-lg absolute ml-auto mr-auto left-0 right-0 -top-[24px] w-[85%]"
        >
        <div class="flex gap-1">
        <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M11.6465 1.3536L7.8536 5.14649C7.65834 5.34175 7.65834 5.65834 7.8536 5.8536L11.6465 9.64649C11.8418 9.84176 12.1584 9.84175 12.3536 9.64649L16.1465 5.8536C16.3418 5.65834 16.3418 5.34176 16.1465 5.14649L12.3536 1.3536C12.1584 1.15834 11.8418 1.15834 11.6465 1.3536Z"
            fill="#0F0F0F"
            />
            <path
            d="M11.6465 14.3536L7.8536 18.1465C7.65834 18.3418 7.65834 18.6583 7.8536 18.8536L11.6465 22.6465C11.8418 22.8418 12.1584 22.8418 12.3536 22.6465L16.1465 18.8536C16.3418 18.6583 16.3418 18.3418 16.1465 18.1465L12.3536 14.3536C12.1584 14.1583 11.8418 14.1583 11.6465 14.3536Z"
            fill="#0F0F0F"
            />
            <path
            d="M1.3536 11.6465L5.14654 7.8536C5.3418 7.65834 5.65838 7.65834 5.85364 7.8536L9.64649 11.6465C9.84175 11.8418 9.84175 12.1583 9.64649 12.3536L5.85364 16.1465C5.65838 16.3418 5.3418 16.3418 5.14654 16.1465L1.3536 12.3536C1.15834 12.1583 1.15834 11.8418 1.3536 11.6465Z"
            fill="#0F0F0F"
            />
            <path
            d="M18.1465 7.8536L14.3536 11.6465C14.1583 11.8418 14.1583 12.1583 14.3536 12.3536L18.1465 16.1465C18.3418 16.3418 18.6584 16.3418 18.8536 16.1465L22.6465 12.3536C22.8418 12.1583 22.8418 11.8418 22.6465 11.6465L18.8536 7.8536C18.6584 7.65834 18.3418 7.65834 18.1465 7.8536Z"
            fill="#0F0F0F"
            />
        </svg>
        <span class="text-lg font-medium">Components</span>
        </div>
        </div>
    `;

  const appDivFirstChildSectionTwoContent = `
    <div
    id="input-heading-container"
    class="p-5 border border-slate-300 rounded-lg relative hidden"
    >
    <p
      class="inline-block bg-slate-300 px-2 py-1 text-xs font-medium rounded-lg absolute -top-[12px] left-[22px]"
    >
      Heading
    </p>
    <button
      id="heading-close-btn"
      class="absolute -top-[18px] -right-[14px] bg-white text-red-600 font-bold rounded-full p-2"
    >
      &#10060;
    </button>
    <div class="pt-5">
      <input
        type="text"
        placeholder="Write a heading"
        class="w-full h-12 focus:outline-slate-700 py-1 px-3 rounded-lg border-2 border-slate-200"
      />
    </div>
    <div
      class="flex flex-col justify-start xl:flex-row items-start xl:justify-between mt-3"
    >
      <div class="flex justify-center items-center mb-1">
        <button
          id="text-align-left"
          class="bg-white py-1 px-3 font-medium border rounded-l-lg flex items-center justify-center gap-1"
        >
          <svg
            width="17px"
            height="17px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"
              fill="#000000"
            />
          </svg>
          <span>Left</span>
        </button>
        <button
          id="text-align-center"
          class="bg-white py-1 px-3 font-medium border flex items-center justify-center gap-1"
        >
          <svg
            width="17px"
            height="17px"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="invisible_box" data-name="invisible box">
                <rect width="48" height="48" fill="none" />
              </g>
              <g id="Layer_7" data-name="Layer 7">
                <path
                  d="M44,22H42V15a2,2,0,0,0-2-2H28a2,2,0,0,0-2,2v7H22V9a2,2,0,0,0-2-2H8A2,2,0,0,0,6,9V22H4a2,2,0,0,0,0,4H6V39a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V26h4v7a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V26h2a2,2,0,0,0,0-4ZM18,37H10V11h8Zm20-6H30V17h8Z"
                />
              </g>
            </g>
          </svg>
          <span>Center</span>
        </button>
        <button
          id="text-align-right"
          class="bg-white py-1 px-3 font-medium border rounded-r-lg flex items-center justify-center gap-1"
        >
          <span>Right</span>
          <svg
            width="17px"
            height="17px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
              fill="#000000"
            />
          </svg>
        </button>
      </div>
      <div class="flex justify-center items-center mb-1">
        <button
          id="blue-color-btn"
          class="bg-white py-1 px-3 font-medium border rounded-l-lg flex items-center gap-1"
        >
          <div class="w-5 h-5 bg-blue-700 rounded-full"></div>
          <span> Blue </span>
        </button>
        <button
          id="black-color-btn"
          class="bg-white py-1 px-3 font-medium border flex items-center gap-1"
        >
          <div class="w-5 h-5 bg-black rounded-full"></div>
          <span>Black</span>
        </button>
        <button
          id="green-color-btn"
          class="bg-white py-1 px-3 font-medium border rounded-r-lg flex items-center gap-1"
        >
          <div class="w-5 h-5 bg-green-700 rounded-full"></div>
          <span>Green</span>
        </button>
      </div>
    </div>
    </div>
    `;

  const appDivFirstChildSectionThreeContent = `
    <div
    id="input-img-container"
    class="p-5 border border-slate-300 rounded-lg relative mt-10 hidden"
    >
    <p
      class="inline-block bg-slate-300 px-2 py-1 text-xs font-medium rounded-lg absolute -top-[12px] left-[22px]"
    >
      Poster Image
    </p>
    <button
      id="image-close-btn"
      class="absolute -top-[18px] -right-[14px] bg-white text-red-600 font-bold rounded-full p-2"
    >
      &#10060;
    </button>
    <div class="w-full">
      <label
        class="flex justify-center items-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none p-4"
      >
        <span class="flex flex-col items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p class="text-gray-600">
            <span class="font-medium">Click to upload</span> or Drag and
            drop
          </p>
          <p class="text-gray-600 font-medium text-xs">
            SVG JPG PNG or GIF (MAX, 800px X 400px)
          </p>
        </span>
        <input
          type="file"
          name="file_upload"
          id="img-upload"
          class="hidden"
        />
      </label>
    </div>
    </div>
    `;

  const appDivFirstChildSectionFourContent = `
    <div
    id="input-description-container"
    class="p-5 border border-slate-300 rounded-lg relative mt-10 hidden"
    >
    <p
      class="inline-block bg-slate-300 px-2 py-1 text-xs font-medium rounded-lg absolute -top-[12px] left-[22px]"
    >
      Description
    </p>
    <button
      id="description-close-btn"
      class="absolute -top-[18px] -right-[14px] bg-white text-red-600 font-bold rounded-full p-2"
    >
      &#10060;
    </button>
    <textarea
      name=""
      id="input-description"
      placeholder="Write something"
      class="w-full h-[100px] p-4 resize-none rounded-lg border-2 border-slate-200 focus:outline-slate-700"
    ></textarea>
    </div>
    `;

  const appDivFirstChildSectionFiveContent = `
    <div id="btn-container">
    <h3 id="items-heading" class="text-center text-xl font-medium my-5">
      Items
    </h3>
    <div
      id="buttons"
      class="w-full flex flex-col sm:flex-row items-center justify-center gap-2"
    >
      <button
        id="heading-btn"
        class="bg-[#ffee8e] text-[#724c00] py-2 w-full rounded-md"
      >
        Heading
      </button>
      <button
        id="imageUploader-btn"
        class="bg-[#aceccc] text-[#005f3c] py-2 w-full rounded-md"
      >
        Image
      </button>
      <button
        id="description-btn"
        class="bg-[#87bbe9] text-[#00295a] py-2 w-full rounded-md"
      >
        Description
      </button>
    </div>
    </div>
    `;

  const appDivFirstChildSectionSixContent = `
    <div
    id="invisibility-text"
    class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mt-10 hidden"
    role="alert"
    >
    <p class="font-bold">Be Warned</p>
    <p class="text-xl">A user can only use two sections at a time.</p>
    </div>
    `;

  appDivFirstChild.innerHTML = appDivFirstChildSectionOneContent;
  appDivFirstChild.innerHTML += appDivFirstChildSectionTwoContent;
  appDivFirstChild.innerHTML += appDivFirstChildSectionThreeContent;
  appDivFirstChild.innerHTML += appDivFirstChildSectionFourContent;
  appDivFirstChild.innerHTML += appDivFirstChildSectionFiveContent;
  appDivFirstChild.innerHTML += appDivFirstChildSectionSixContent;

  const appDivSecondChild = document.createElement("div");
  appDivSecondChild.classList.add(
    "w-full",
    "p-6",
    "border-2",
    "border-slate-400",
    "rounded-lg",
    "relative",
    "min-h-[90vh]"
  );

  const appDivSecondChildSectionOne = `
    <div
    class="bg-white flex items-center justify-center h-11 rounded-lg absolute ml-auto mr-auto left-0 right-0 -top-[24px] w-[85%]"
    >
    <div class="flex gap-1">
      <svg
        fill="#1C274C"
        height="30px"
        width="30px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 467.4 467.4"
        xml:space="preserve"
      >
        <g>
          <polygon points="236.182,15 236.182,85 306.183,85 	" />
          <path
            d="M197.289,347.5H71.182v-30h120.641c-0.03-1.009-0.07-2.016-0.07-3.033c0-13.036,2.472-25.506,6.968-36.967H71.182v-30
           h145.855c18.622-21.177,45.899-34.566,76.248-34.566c9.671,0,19.03,1.361,27.897,3.898V115h-115V0h-185v415h257.885
           C240.927,409.631,209.537,382.988,197.289,347.5z M71.182,177.5h200v30h-200V177.5z"
          />
          <path
            d="M374.87,374.838c-5.988,8.071-13.142,15.225-21.213,21.213l71.349,71.349l21.213-21.213L374.87,374.838z"
          />
          <path
            d="M293.286,242.934c-39.443,0-71.533,32.089-71.533,71.533S253.843,386,293.286,386s71.533-32.09,71.533-71.533
           S332.729,242.934,293.286,242.934z"
          />
        </g>
      </svg>
      <span class="text-lg font-medium">Preview</span>
    </div>
    </div>
    `;

  const appDivSecondChildOutputSection = `
    <div class="h-full flex flex-col items-start">
        
          <div id="capture" class="pb-5 flex flex-col gap-10 px-5 w-full">
          <h3
              id="preview-title"
              class="font-medium text-4xl mt-10 w-[90%] inline-block break-all"
          ></h3>
      
          <img src="" id="show-img-id" class="w-[70%]" alt="" />
          <p
              id="output-description"
              class="font-medium text-lg w-[90%] break-all"
          ></p>
          </div>
        
        
        <button
        id="downloadButton"
        class="mt-auto bg-white text-xl font-medium py-2 px-3 border rounded-lg"
        >
        Download
        </button>
    </div>
    `;

  appDivSecondChild.innerHTML = appDivSecondChildSectionOne;
  appDivSecondChild.innerHTML += appDivSecondChildOutputSection;

  appDiv.append(appDivFirstChild, appDivSecondChild);
  app.append(appDiv);
}
