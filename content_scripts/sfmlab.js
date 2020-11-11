const element = document.querySelector('.side-upload .panel .panel__footer dl');
const id = document.querySelector('#comment-container').getAttribute('data-project-id');

const url = `meshhouse://install/sfmlab/${id}`;
const downloadButton = document.createElement('a');
downloadButton.setAttribute('href', url);
downloadButton.setAttribute('style', 'width: 100%;')
downloadButton.classList.add('download-meshhouse-button');
downloadButton.innerText = browser.i18n.getMessage('buttonTitle');
element.before(downloadButton);
