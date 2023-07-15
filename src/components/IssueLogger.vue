<template>
  <div>
    <p class="text-pink-400">{{ defaultText }}</p>
    <button @click="screenshot">截图</button>
  </div>
</template>

<script>
export default {
  name: 'IssueLogger',
  data() {
    return {
      defaultText: '第一个插件',
    };
  },
  mounted() {
    this.getMessage();
  },
  methods: {
    screenshot() {
      chrome.runtime.sendMessage({ action: 'CAPTURE_SCREEN' }, (response) => {
        console.log(response);
      });
      chrome.windows.getCurrent(function (win) {
        // 抓取当前tab的内容
        chrome.tabs.captureVisibleTab(win.id, {}, function (dataUrl) {
          const info = {
            action: 'CAPTURE_SCREEN',
            payload: dataUrl,
          };
          this.sendMessage(info);
        });
      });
    },
    sendMessage(msg, callback) {
      chrome.runtime.sendMessage(JSON.stringify(msg), function (response) {
        if (callback) callback(response);
      });
    },
    getMessage() {
      chrome.runtime.onMessage.addListener(function (
        request,
        sender,
        sendResponse
      ) {
        console.log(request);
        console.log(sender);
        console.log(sendResponse);
      });
    },
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
