chrome.runtime.onInstalled.addListener(function () {
  //some other code here
  console.log('Hello from the background');
});
chrome.runtime.onMessage.addListener(function () {
  console.log('Hello from the background');

  // browser.tabs.executeScript({
  //   file: 'content-script.js',
  // });
  chrome.tabs.captureVisibleTab(null, {}, function (dataUri) {
    console.log(dataUri);
  });
});
