/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4ad52b81a9fdfb05a7be4d1efe1991a6"
  },
  {
    "url": "about/index.html",
    "revision": "305308edd5c03af4cdabb6cf721929ec"
  },
  {
    "url": "about/team.html",
    "revision": "68f529acb0c48677e994deb1a2381f59"
  },
  {
    "url": "api/index.html",
    "revision": "65135e0f0278c566e2112fc808cda295"
  },
  {
    "url": "api/phaser/audio.html",
    "revision": "341a58bb92d42d7b7e8b15abdecd55b0"
  },
  {
    "url": "api/phaser/basic.html",
    "revision": "470b4bae20d372ae57a69dcbb51b54f8"
  },
  {
    "url": "api/phaser/draw.html",
    "revision": "77c28a4507ea1daf72033637addc25b1"
  },
  {
    "url": "api/phaser/easing.html",
    "revision": "72fd2007c3e48cc52badf6e30a16058c"
  },
  {
    "url": "api/phaser/getstart.html",
    "revision": "9e0bfd09ee98537617d81e7a5f2a4e62"
  },
  {
    "url": "api/phaser/image.html",
    "revision": "ebd5b91db6665cd97c4f43334ccccee6"
  },
  {
    "url": "api/phaser/text.html",
    "revision": "8ab33cb24d58955bf34c9b8df064d4a7"
  },
  {
    "url": "api/phaser/video.html",
    "revision": "0e7aaa67de9726d9a381d7a1c3c89773"
  },
  {
    "url": "api/project/createMask.html",
    "revision": "93d3781043c2748e5496afc83723b0fb"
  },
  {
    "url": "api/project/createSingleScenes.html",
    "revision": "d64a8b2c6b1ec2d193633f702daabc1f"
  },
  {
    "url": "api/project/createTimer.html",
    "revision": "4aad112349c33098babcc826c2f2ac9f"
  },
  {
    "url": "api/project/createTitle.html",
    "revision": "fb75d8d9f37595a6ded8cd35cf31c229"
  },
  {
    "url": "api/project/cutStr.html",
    "revision": "6a88bc5c6763f5b61d6c06a67127c987"
  },
  {
    "url": "api/project/getStart.html",
    "revision": "9970f08489fb805d704311eef21af97d"
  },
  {
    "url": "api/project/getStuPortrait.html",
    "revision": "d15c1cd2320aebb5e7a0e31b5b3a90c3"
  },
  {
    "url": "api/project/hideAndDestroyDragonBone.html",
    "revision": "ca0f3bceb1f40cd84577301a7e42b9ad"
  },
  {
    "url": "api/project/hideAndDestroyElement.html",
    "revision": "7dcd4d628bfc99ae8b23c6f37509d2a4"
  },
  {
    "url": "api/project/portraitVoiceTextNameFlyToTop.html",
    "revision": "12e6cf3240e257030d37e0274d788340"
  },
  {
    "url": "api/project/stopScreen.html",
    "revision": "d44acce7f72e7662fa33b81dd2c8d659"
  },
  {
    "url": "api/project/worldWarp.html",
    "revision": "8fbc4a860191442c136e42b4c0e2fd4a"
  },
  {
    "url": "assets/css/0.styles.4f55bea4.css",
    "revision": "9948636072d41f1363d4b52bb325346b"
  },
  {
    "url": "assets/img/defaultPortrait.e75dad81.png",
    "revision": "e75dad81c9accfe70e23485b729cb34f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.ea9a4cdb.js",
    "revision": "65bf0539c5328b86f3bf7f07ad94ba6c"
  },
  {
    "url": "assets/js/10.fb441fed.js",
    "revision": "cf08934a2412a43f484c0d1f33815a6e"
  },
  {
    "url": "assets/js/11.1a0c8fa0.js",
    "revision": "5d479f0c2b0f7953025932bef50ed256"
  },
  {
    "url": "assets/js/12.16f12848.js",
    "revision": "7925473ff694b5e0e2b72d5342982c8c"
  },
  {
    "url": "assets/js/13.94323e10.js",
    "revision": "af037c7cbcfe692720e76f7313f4e014"
  },
  {
    "url": "assets/js/14.a753bff6.js",
    "revision": "437e1df720688ae63711341cb9f36c63"
  },
  {
    "url": "assets/js/15.8778c41e.js",
    "revision": "fa68c61a900aff8b9e2ada341bd7df7b"
  },
  {
    "url": "assets/js/16.4d9917cc.js",
    "revision": "576bbb11f74200cbd61cbb574e02cb16"
  },
  {
    "url": "assets/js/17.29d836a4.js",
    "revision": "849516716c57516a1d6cc74981bc7047"
  },
  {
    "url": "assets/js/18.e3a54626.js",
    "revision": "91bef885cc16d0b586a4622d04305b0f"
  },
  {
    "url": "assets/js/19.d4d43730.js",
    "revision": "246edb8d5d70bc876b7de6c44286587a"
  },
  {
    "url": "assets/js/20.76b17369.js",
    "revision": "88a36326ddb33dd4553df0851fbc8454"
  },
  {
    "url": "assets/js/21.2859fe9b.js",
    "revision": "7caaaa6010444840ef51280a0a47ecc0"
  },
  {
    "url": "assets/js/22.fd49b4f4.js",
    "revision": "a2335b4dbb00cd10f685e440241f5031"
  },
  {
    "url": "assets/js/23.e58ba42b.js",
    "revision": "181c773676ec06dc9e7367a70df31104"
  },
  {
    "url": "assets/js/24.3e9783c3.js",
    "revision": "fdb631b61798a3a03d96811786f94d24"
  },
  {
    "url": "assets/js/25.f90a7ae7.js",
    "revision": "63e4cdb629c2be0794763f9ecfbd6efa"
  },
  {
    "url": "assets/js/26.52c0841b.js",
    "revision": "42a733029e83738ab35c5f0fb0ae301c"
  },
  {
    "url": "assets/js/27.719c8448.js",
    "revision": "7f67aeb686b7c4d1b509ab04af76c1b2"
  },
  {
    "url": "assets/js/28.c7459678.js",
    "revision": "69f0eefa1920e23fd1d39c51d6fa7450"
  },
  {
    "url": "assets/js/29.5c2e9263.js",
    "revision": "11104af12280e26215aadd8a6f09ab3d"
  },
  {
    "url": "assets/js/30.a6230cf8.js",
    "revision": "76c632f29cef006596d628d3b5ccc842"
  },
  {
    "url": "assets/js/31.fac0fd33.js",
    "revision": "d16b7fcf528ab3c0381f7ca3a1199135"
  },
  {
    "url": "assets/js/32.fc825a45.js",
    "revision": "7c58d5eb122538a084f4a4cacca9e196"
  },
  {
    "url": "assets/js/33.30c5df10.js",
    "revision": "327e34cf7e091d66824b2a14d6892715"
  },
  {
    "url": "assets/js/34.5c4106f8.js",
    "revision": "597d9f10cac16f0060527a24e65c9ff5"
  },
  {
    "url": "assets/js/35.41555e67.js",
    "revision": "2ae7ea7a8223f1906a7e547416f425da"
  },
  {
    "url": "assets/js/36.5eb918b4.js",
    "revision": "a244d16c093eb9ee14c10ddee8ad4d65"
  },
  {
    "url": "assets/js/37.c171fb6f.js",
    "revision": "99c2eab19da6757daab94555f31d1a5d"
  },
  {
    "url": "assets/js/38.07ebcc43.js",
    "revision": "1549ead944095a0f0c58a11b120bcc1a"
  },
  {
    "url": "assets/js/39.9e79a206.js",
    "revision": "ec7816353b06ab96614893bd7f711c3c"
  },
  {
    "url": "assets/js/4.c5850918.js",
    "revision": "b44e26585ab0618e311c1a03927cbaee"
  },
  {
    "url": "assets/js/40.65c6a3d6.js",
    "revision": "c669a3b8a0f17b51bd846f8e4b1f4fe6"
  },
  {
    "url": "assets/js/41.05b54b9b.js",
    "revision": "987a4e23b22aeb5d6c82762d01c4e5ae"
  },
  {
    "url": "assets/js/42.8a99f785.js",
    "revision": "33233b244e602fbb2230e49200a95aa2"
  },
  {
    "url": "assets/js/43.cbf17128.js",
    "revision": "5453e719a0b67c6c0a534d9c7642e3ed"
  },
  {
    "url": "assets/js/44.bf362b3b.js",
    "revision": "5677160167f5a1ab889b01eeb7b59d24"
  },
  {
    "url": "assets/js/45.6c332ecd.js",
    "revision": "82ade21f854e90e9e59ac6390c90c092"
  },
  {
    "url": "assets/js/46.13549941.js",
    "revision": "d48e1389413451cdd53b9556b9caf871"
  },
  {
    "url": "assets/js/47.be8ce827.js",
    "revision": "95e00aac790f8048267b460110fa1f5d"
  },
  {
    "url": "assets/js/48.72287f5e.js",
    "revision": "bda9610b82949b1c03941df4d25b33d6"
  },
  {
    "url": "assets/js/49.a79138e1.js",
    "revision": "3f0730833c84acbf28a727201cd75260"
  },
  {
    "url": "assets/js/5.b3612c8d.js",
    "revision": "a663676744d83563df3ef19f280d45f1"
  },
  {
    "url": "assets/js/50.8f70afa8.js",
    "revision": "a9a58ef0ac4b51f2110f6c58f5c1641d"
  },
  {
    "url": "assets/js/51.0eee8a6c.js",
    "revision": "a199712311b85ade736f3bb91bc8a954"
  },
  {
    "url": "assets/js/52.60b4b745.js",
    "revision": "9248a4ef58426b87b1c261fbd7091e94"
  },
  {
    "url": "assets/js/53.9f394b45.js",
    "revision": "50ca6e15a7c87bc6590f58a557a59ed1"
  },
  {
    "url": "assets/js/54.5971c823.js",
    "revision": "ede786a26d68e7b3f3b16f621e57a5b5"
  },
  {
    "url": "assets/js/55.b5811804.js",
    "revision": "18725b23757f9a2426e1eb02ffba4e4c"
  },
  {
    "url": "assets/js/56.5c4f2db8.js",
    "revision": "a2a2d5834fa79052f0b8e5012f61d612"
  },
  {
    "url": "assets/js/57.21664d36.js",
    "revision": "227202566ad9d01a08801e45904bcb91"
  },
  {
    "url": "assets/js/58.f0c0c022.js",
    "revision": "df3a0d79755e9b69653752595ab840e3"
  },
  {
    "url": "assets/js/59.9e946264.js",
    "revision": "a067a3be4f0776269efa4aedce4d81fd"
  },
  {
    "url": "assets/js/6.4fc3b298.js",
    "revision": "17e093f5fad77fdcbe0e521deb8b8c86"
  },
  {
    "url": "assets/js/60.a71fa522.js",
    "revision": "e27f0ad2f12de220c2f29635b28016e9"
  },
  {
    "url": "assets/js/61.8645506e.js",
    "revision": "748d0668a13e766ccc3333853f8000d0"
  },
  {
    "url": "assets/js/62.a96e727a.js",
    "revision": "690ce4e6e28c196791a0007539c67406"
  },
  {
    "url": "assets/js/63.85a395fd.js",
    "revision": "7857bc21dc04eccfafc6ecf9ba61048c"
  },
  {
    "url": "assets/js/64.1f13ffc7.js",
    "revision": "1b3b4e8ce478bdc5eca8d84b7b8d731b"
  },
  {
    "url": "assets/js/65.53ab83bc.js",
    "revision": "39891a7bdfe6e5063065f81976955e31"
  },
  {
    "url": "assets/js/66.0a38abc0.js",
    "revision": "578ac502252e1dd001636224943ac3f8"
  },
  {
    "url": "assets/js/67.48074c14.js",
    "revision": "6ffcd85d2f912aaf1c9e8e4c32215a2c"
  },
  {
    "url": "assets/js/68.edd63907.js",
    "revision": "548214dbb04a87dc265e1ffa34e06bc8"
  },
  {
    "url": "assets/js/69.3fc1a222.js",
    "revision": "8c122ffb516791ca49955adfd268ba78"
  },
  {
    "url": "assets/js/7.5303ba3a.js",
    "revision": "285df6350a5e3a75452564e2bd1c7c13"
  },
  {
    "url": "assets/js/70.2658472b.js",
    "revision": "d1b550d6afdab9057846c89711e45862"
  },
  {
    "url": "assets/js/71.48a7aa56.js",
    "revision": "8a854dcd8873776f6e46b0dec5d21b5b"
  },
  {
    "url": "assets/js/72.e4a7bb58.js",
    "revision": "41345debd3f7b7e285a63ec9cffca23f"
  },
  {
    "url": "assets/js/73.752b0076.js",
    "revision": "e88aadcdcfba4f09f49146964c7246a6"
  },
  {
    "url": "assets/js/74.45019738.js",
    "revision": "75958310f96b332e10c57a713eae4aa8"
  },
  {
    "url": "assets/js/75.279cef07.js",
    "revision": "8a4f7c5c3a6db3245737750e34d32cad"
  },
  {
    "url": "assets/js/76.1a7902a5.js",
    "revision": "dc15529b7f278b7cd5b7ff65230ee927"
  },
  {
    "url": "assets/js/77.e6f8c6e1.js",
    "revision": "ed6898fdd48771e1c637e8e55d75f3f4"
  },
  {
    "url": "assets/js/8.69e7df76.js",
    "revision": "c05b2e167ff4ecc9421f6a5d6a805c1f"
  },
  {
    "url": "assets/js/9.2ab748ce.js",
    "revision": "4e871a801fd4a4f49c5b5cb1c63e35b5"
  },
  {
    "url": "assets/js/app.d924f1c0.js",
    "revision": "e6b00c5f2ffde5863fdaf19007450a4c"
  },
  {
    "url": "assets/js/vendors~docsearch.e23f444f.js",
    "revision": "601c16a9d415f527b642ca449ba94b68"
  },
  {
    "url": "demo.html",
    "revision": "9276de19b18c0f966ba51e7086bb56af"
  },
  {
    "url": "events/answertools/index.html",
    "revision": "4e61f63830c61cff1a185f10f9207f48"
  },
  {
    "url": "events/index.html",
    "revision": "5fc3999e499ca7d294209f7c87804059"
  },
  {
    "url": "events/main/on.html",
    "revision": "2aa80aed8f5d4ab3012aff8509c9306a"
  },
  {
    "url": "events/main/sendToRender.html",
    "revision": "b0393e51dc655e53130aba31d43dc8fc"
  },
  {
    "url": "events/main/sendToWorker.html",
    "revision": "98e76c4d79d4594219ba395c804b9dd6"
  },
  {
    "url": "events/main/sendToWs.html",
    "revision": "a1e98f67b015a5a86cc41dd5b91df761"
  },
  {
    "url": "events/player/index.html",
    "revision": "3284b908903b9700fb392926678789eb"
  },
  {
    "url": "events/render/bind.html",
    "revision": "686da2113edbc229c6219da4944d4e09"
  },
  {
    "url": "events/render/index.html",
    "revision": "b7c55edcf88dfb4212c9dff7f7081760"
  },
  {
    "url": "events/render/sendToMain.html",
    "revision": "626c3ab1488766f8aaafa87e5c15e927"
  },
  {
    "url": "events/render/sendToWorker.html",
    "revision": "971d42411fb452db3d6b58270a099067"
  },
  {
    "url": "events/render/sendToWs.html",
    "revision": "d0daa7c265145440440cc7e658866d96"
  },
  {
    "url": "events/render/setDotLogToALY.html",
    "revision": "39a012c7da95934ef516cf9907f4b917"
  },
  {
    "url": "events/render/signal-manager.html",
    "revision": "a8dcbc538be70e5ca5ea9d3d04ae9131"
  },
  {
    "url": "events/render/unbind.html",
    "revision": "0574d14404da395e2e6be5059fafa20e"
  },
  {
    "url": "events/websocket/getCurrentState.html",
    "revision": "2210dbec56ef6c9a6f4a66664aa07a32"
  },
  {
    "url": "events/websocket/getStudentList.html",
    "revision": "8a144e35d25665dfb6307f065d26e82c"
  },
  {
    "url": "events/websocket/index.html",
    "revision": "d03c61fd5af748941b903f0ea7b4ae5a"
  },
  {
    "url": "events/websocket/open.html",
    "revision": "e3f2a58059a319585a88e106186190f0"
  },
  {
    "url": "events/websocket/send.html",
    "revision": "05d04b93f9758842c4d0cf591fa14928"
  },
  {
    "url": "events/websocket/sendAnswer.html",
    "revision": "62bef990455c27f13a5cbd482e348bc4"
  },
  {
    "url": "events/websocket/studentBind.html",
    "revision": "15376655269d8780b12b2510a1641e48"
  },
  {
    "url": "events/websocket/studentUnbind.html",
    "revision": "c1cbb2d4c4cf090459041c817b524ef6"
  },
  {
    "url": "events/worker/index.html",
    "revision": "06a47cb1bc3263ffbb08f3da7797c64d"
  },
  {
    "url": "events/worker/on.html",
    "revision": "5b00b71263289db183ef13d972cc534e"
  },
  {
    "url": "events/worker/sendToMain.html",
    "revision": "d25aa8f9aeaf4df1bfbe92477a45e924"
  },
  {
    "url": "events/worker/sendToRender.html",
    "revision": "361db23ebc026b612227a983a061b873"
  },
  {
    "url": "index.html",
    "revision": "63efb29c0613be71df65e2c6831fa1bb"
  },
  {
    "url": "logo.png",
    "revision": "791eea856e28e19c0ab5baeb84ce2989"
  },
  {
    "url": "test.html",
    "revision": "c473eeef9d4701306a94891929ec20cc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
