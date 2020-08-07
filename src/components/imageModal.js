import React from "react";

function Imagemodal(props) {
  function downloadImage(e, url) {
    e.preventDefault();
    window.open(url);
  }
  return (
    <div class="imagemodal">
      <div>
        <button class="closebtn" onClick={props.handleImageOnclick}>
          X
        </button>
        <div
          class="modal-image"
          style={{ background: `url(${props.imageURL})` }}
        />
      </div>
      <button
        class="downloadbtn"
        onClick={(e) => downloadImage(e, props.imageURL)}
      >
        Download
      </button>
    </div>
  );
}
export default Imagemodal;
