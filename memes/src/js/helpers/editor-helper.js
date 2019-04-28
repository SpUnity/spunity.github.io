import html2canvas from 'html2canvas';

class EditorHelper {
  constructor() {}

  async getImage() {
    $('#download_meme').css('visibility', 'hidden');

    const canvas = await html2canvas(document.querySelector('#canvas_image'));
    const canvasImage = canvas.toDataURL('image/jpeg', 1.0);

    $('#download_meme').attr('href', canvasImage);
    $('#download_meme').attr('download', 'Your_meme.jpg');
    $('#download_meme').css('visibility', 'visible');
  }
}


export default EditorHelper;
