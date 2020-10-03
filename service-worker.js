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
    "revision": "75dd24d6a72d640b7ac4c41b20c2b1d4"
  },
  {
    "url": "assets/css/0.styles.3f25eecc.css",
    "revision": "f31c92ac9dfcb158da3cbfdcdba98793"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/build-command-deploy.471d6c91.png",
    "revision": "471d6c91d69c4493a8f3ce3f5f486759"
  },
  {
    "url": "assets/img/build-command-stage.f485f325.png",
    "revision": "f485f325da7062907eb463d79d042cd5"
  },
  {
    "url": "assets/img/build-completed.37b53845.png",
    "revision": "37b53845b9c5fd25b98730d78c591554"
  },
  {
    "url": "assets/img/build-info-index.caf8f56a.png",
    "revision": "caf8f56a3af4973a35b79570f3206296"
  },
  {
    "url": "assets/img/build-info-router.ce219a5d.png",
    "revision": "ce219a5db8a65082e226427292088e66"
  },
  {
    "url": "assets/img/build-legacy.c5bc3be2.png",
    "revision": "c5bc3be2b0f1214a9904da4430fae476"
  },
  {
    "url": "assets/img/build-preprocess.209402b8.png",
    "revision": "209402b8636647346f6b86da360d1bdf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5e8c0265.js",
    "revision": "5112c14277e7d130dc72541f3adf297b"
  },
  {
    "url": "assets/js/11.b6872ef1.js",
    "revision": "075abe8393f726df0016e2d43b7bc64d"
  },
  {
    "url": "assets/js/12.6499d39a.js",
    "revision": "41e825c0eab52a48ad5a70b67f2f059f"
  },
  {
    "url": "assets/js/13.8beb6b76.js",
    "revision": "f1a4941fe125688d55c0be56ec6cc43d"
  },
  {
    "url": "assets/js/14.6f312275.js",
    "revision": "768d4da0bfc52edfa9059eba2e73a87c"
  },
  {
    "url": "assets/js/15.7f7a4725.js",
    "revision": "4bde726d4ae4466c1f0d5cbd35c7316c"
  },
  {
    "url": "assets/js/16.fbadca78.js",
    "revision": "472eba11b2cae104b56203893480b4c4"
  },
  {
    "url": "assets/js/17.e4752a57.js",
    "revision": "9bac4da304b3806f5fe136663ca1fbe9"
  },
  {
    "url": "assets/js/18.dc99ea95.js",
    "revision": "0db3c8433c3f907139eef128ad66dc72"
  },
  {
    "url": "assets/js/19.5c685458.js",
    "revision": "c6af1f4fa7636722fa52b73f3da9d164"
  },
  {
    "url": "assets/js/2.3e762a60.js",
    "revision": "3d9204b78264a78ebfe7b0677c972265"
  },
  {
    "url": "assets/js/20.5ea4e7d9.js",
    "revision": "06a9bd8a7cd9d819d6bc22198f8e373f"
  },
  {
    "url": "assets/js/21.394e4747.js",
    "revision": "d4875f5c5d23803f2b9168468044ff3f"
  },
  {
    "url": "assets/js/22.c22bfe45.js",
    "revision": "d089c346185f678a08f2810e802faf85"
  },
  {
    "url": "assets/js/23.55217ea0.js",
    "revision": "f705308d9a2f318d391b51077f81fe83"
  },
  {
    "url": "assets/js/24.7efcb354.js",
    "revision": "dafcab93ea134911efa5a61d0690cdb3"
  },
  {
    "url": "assets/js/25.a414cf5a.js",
    "revision": "85ac2dbcd68a3736694b1e8067180742"
  },
  {
    "url": "assets/js/26.f5a54f5f.js",
    "revision": "ff32f0666450fea26842180553a6be12"
  },
  {
    "url": "assets/js/27.5fe17a91.js",
    "revision": "f336bc14c7afe7916400c2a09a9390fd"
  },
  {
    "url": "assets/js/3.5be415c3.js",
    "revision": "a0135dab82aff056e8b4691b761a7f1d"
  },
  {
    "url": "assets/js/4.f29072a0.js",
    "revision": "6156a32a1021abfe7c4d8797a6806ab3"
  },
  {
    "url": "assets/js/5.76400afa.js",
    "revision": "7c28d3e0101241e3dc6225ddd92a8a30"
  },
  {
    "url": "assets/js/6.fe0024a0.js",
    "revision": "028618d9ed6588ecde133a01399c2374"
  },
  {
    "url": "assets/js/7.7a1dff7c.js",
    "revision": "1802d5ada5f7e08650d08269afe160bd"
  },
  {
    "url": "assets/js/8.96da46b8.js",
    "revision": "ddc89778ffaf94171506df80d65a2214"
  },
  {
    "url": "assets/js/9.3c00e0bf.js",
    "revision": "3a7103c8f959598826ee7755e09176e9"
  },
  {
    "url": "assets/js/app.488be3da.js",
    "revision": "d88018a8a15ef480df56fcdcc08f5b3c"
  },
  {
    "url": "component/aside-menu.html",
    "revision": "d04e55bfd361f315d9888b8d2a3e84f5"
  },
  {
    "url": "component/chart.html",
    "revision": "dd475d3e16a929e830b0bdd435bf3aa7"
  },
  {
    "url": "component/customize-theme.html",
    "revision": "23638bfdd78ebc8d59df4246ffbc153f"
  },
  {
    "url": "component/date-picker.html",
    "revision": "80b927a0109f76d397fd8a3234ad452f"
  },
  {
    "url": "component/installation.html",
    "revision": "78e6d6fcc2f52ace4da8d8135173f467"
  },
  {
    "url": "component/layout.html",
    "revision": "4893f750be3ff5356a9d63e9238d82a1"
  },
  {
    "url": "component/page-filter.html",
    "revision": "3210d4f978397a54137cc4cf6f7789e9"
  },
  {
    "url": "component/page-table.html",
    "revision": "04cc032cdcc6b784e76ecf4e724beca0"
  },
  {
    "url": "component/tabs-view.html",
    "revision": "9435c7ac88f51dff3d1d58d431147843"
  },
  {
    "url": "config/application.html",
    "revision": "3ff180e4366a58e47e75e9315afe8c89"
  },
  {
    "url": "config/builder.html",
    "revision": "dca5f3f0d982397a455f9dc8fe1fce22"
  },
  {
    "url": "config/plugins.html",
    "revision": "101547d61a0f7246a398ccd11377c0e8"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "f8ef1d3a0b941ec4a4912b96211d6718"
  },
  {
    "url": "guide/introduce.html",
    "revision": "e43d1af9c0dad67cd75ae10acb7f34be"
  },
  {
    "url": "guide/mock.html",
    "revision": "d1c9c6086003ae481ae8557accf93eee"
  },
  {
    "url": "guide/request.html",
    "revision": "6bd30bdf11133b8ea45b5991e4ecb752"
  },
  {
    "url": "guide/routing.html",
    "revision": "9937ad659a3d5856bd0f540851ced8da"
  },
  {
    "url": "guide/store-module.html",
    "revision": "0e538b1cb966eb6759f80fc60ba346f6"
  },
  {
    "url": "index.html",
    "revision": "92aca3056db700271c56fd8fbf6d4d18"
  },
  {
    "url": "logo.png",
    "revision": "f6d57eee0aa801b00bd3ae041d1d14d6"
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
