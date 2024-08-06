import React from "react";

const Text = () => {
  const onCapture = (page) => {
    htmlToImage.toPng(document.getElementById("page")).then(function (dataUrl) {
      saveAs(dataUrl, "my-node.png");
    });
  };

  return (
    <>
      <div id="page">
        <h1>this is amazing</h1>
        <button onClick={onCapture}>Capture</button>
      </div>
    </>
  );
};

export default Text;
