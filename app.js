const button = document.querySelector('.progress-btn');
let downloading;

button.addEventListener('click', function () {
  const progressBar = document.querySelector('.progress-bar');
  let value = 0;
  clearInterval(downloading);
  downloading = setInterval(() => {
    const progressPercent = document.querySelector('.progress-percent');
    progressBar.value = value;
    progressPercent.textContent = `${value}%`;
    value++;
    if (value > 100) {
      const message = document.querySelector('.message');
      const progressText = document.querySelector('.progress-text');
      message.textContent = '🎉 Congrats! Your file is downloaded.';
      progressText.textContent = 'Finished.'
      clearInterval(downloading);
    }
  }, 100);
});
