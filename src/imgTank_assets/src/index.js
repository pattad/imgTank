import { imgTank } from "../../declarations/imgTank";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  button.setAttribute("disabled", true);

  var img = document.getElementById("img1");
  var c = document.createElement("canvas");
  var ctx = c.getContext("2d");

  c.width = img.naturalWidth;     // update canvas size to match image
  c.height = img.naturalHeight;
  ctx.drawImage(img, 0, 0);       // draw in image
  c.toBlob(function(blob) {        // get content as JPEG blob
    // here the image is a blob

    blob.arrayBuffer().then(arrayBuffer => {
      // Interact with actor, calling the image upload method
      console.info('uploading...')
      console.info([...new Uint8Array(arrayBuffer)])
      imgTank.uploadImg('img001', [...new Uint8Array(arrayBuffer)])
    })

  }, "image/jpeg", 1.0);

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerHTML = "download pic local deployment <a href=http://127.0.0.1:8000/?canisterId=" + process.env.IMGTANK_CANISTER_ID + "&imgid=img001>here</a> <br/> or remote deyployment <a href=https://" + process.env.IMGTANK_CANISTER_ID + "/?imgid=img001>here</a>";

  return false;
});
