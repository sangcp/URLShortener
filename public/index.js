const APT_SERVER = 'http://localhost:3000';

const $basicUrl = document.querySelector('#basicUrl');
const $submitBasicUrl = document.querySelector('#submitBasicUrl');
$submitBasicUrl.addEventListener('click', async e => {
  e.preventDefault();
  const basicUrl = $basicUrl.value;
  const response = await fetch(`${APT_SERVER}/url`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      basicUrl
    })
  });
  if (response.status === 200) {
    const data = await response.json();
    console.log(data.key);
    const $resultBasicUrl = document.querySelector('#resultBasicUrl');
    $resultBasicUrl.textContent = `${APT_SERVER}/${data.key}`;
  } else {
    console.log(`error: ${response.status}`);
  }
});

const $emojiUrl = document.querySelector('#emojiUrl');
const $submitEmojiUrl = document.querySelector('#submitEmojiUrl');
$submitEmojiUrl.addEventListener('click', async e => {
  e.preventDefault();
  const emojiUrl = $emojiUrl.value;
  const response = await fetch(`${APT_SERVER}/emoji-url`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      emojiUrl
    })
  });
  if (response.status === 200) {
    const data = await response.json();
    console.log(data.key);
    const $resultEmojiUrl = document.querySelector('#resultEmojiUrl');
    $resultEmojiUrl.textContent = `${APT_SERVER}/${data.key}`;
  } else {
    console.log(`error: ${response.status}`);
  }
});

const $customUrl = document.querySelector('#customUrl');
const $customWord = document.querySelector('#customWord');
const $submitCustomUrl = document.querySelector('#submitCustomUrl');
$submitCustomUrl.addEventListener('click', async e => {
  e.preventDefault();
  const customUrl = $customUrl.value;
  // TODO: validate customWord
  const customWord = $customWord.value;
  const response = await fetch(`${APT_SERVER}/custom-url`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      customUrl,
      customWord
    })
  });
  if (response.status === 200) {
    const data = await response.json();
    console.log(data.key);
    const $resultCustomUrl = document.querySelector('#resultCustomUrl');
    $resultCustomUrl.textContent = `${APT_SERVER}/${data.key}`;
  } else {
    console.log(`error: ${response.status}`);
  }
});

const $titleUrl = document.querySelector('#titleUrl');
const $submitTitleUrl = document.querySelector('#submitTitleUrl');
$submitTitleUrl.addEventListener('click', async e => {
  e.preventDefault();
  const titleUrl = $titleUrl.value;
  const response = await fetch(`${APT_SERVER}/title-url`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      titleUrl
    })
  });
  if (response.status === 200) {
    const data = await response.json();
    console.log(data.key);
    const $resultTitleUrl = document.querySelector('#resultTitleUrl');
    $resultTitleUrl.textContent = `${APT_SERVER}/${data.key}`;
  } else {
    console.log(`error: ${response.status}`);
  }
});

const $convertedUrl = document.querySelector('#convertedUrl');
const $submitConvertedUrl = document.querySelector('#submitConvertedUrl');
$submitConvertedUrl.addEventListener('click', async e => {
  e.preventDefault();
  const convertedUrl = encodeURIComponent($convertedUrl.value);
  const response = await fetch(`${APT_SERVER}/original-url/${convertedUrl}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 200) {
    const data = await response.json();
    console.log(data.key);
    const $resultConvertedUrl = document.querySelector('#resultConvertedUrl');
    $resultConvertedUrl.textContent = `${data.key}`;
  } else {
    console.log(`error: ${response.status}`);
  }
});
