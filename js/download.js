document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    const capture = document.getElementById("capture");

    html2canvas(capture).then(function (canvas) {
      // Convert the canvas to an image URL
      const imgData = canvas.toDataURL("myImage/png");

      // Create a temporary link element and download the image
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "myImage.png";
      link.click();
    });
  });
