<template>
  <div>
    <p class="text-pink-400">{{ defaultText }}</p>
    <button class="w-10 h-4 bg-blue-300" @click="screenshot">截图</button>
    <div class="container flex flex-row">
      <img
        v-for="(imageUrl, index) in imageUrls"
        :key="index"
        class="w-96 h-96 bg-orange-300"
        :src="imageUrl"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IssueLogger',
  data() {
    return {
      defaultText: '缺陷记录',
      imageUrls: [],
    };
  },
  mounted() {
    this.getMessage();
  },
  methods: {
    screenshot() {
      let _this = this;
      chrome.windows.getCurrent(async function (win) {
        await chrome.tabs
          .captureVisibleTab(win.id, {})
          .then((result) => {
            _this.contactImgUrl(result);
          })
          .catch((err) => {
            console.error(err);
          });
      });
    },
    contactImgUrl(imageBase64) {
      this.imageUrls.push('data:image/png;base64 ' + imageBase64);
    },
    getMessage() {
      chrome.runtime.onMessage.addListener(function (
        request,
        sender,
        sendResponse
      ) {
        console.log(request, 'request');
        console.log(sender, 'sender');
        console.log(sendResponse, 'sendResponse');
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
