'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "11eda2396326cb29e12d5b7166e30df7",
"/": "11eda2396326cb29e12d5b7166e30df7",
"main.dart.js": "9f9421588553a150e8cc2ab6924691b3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "58d143c12ad2d3136dd275bd3a6ed247",
".git/ORIG_HEAD": "ce36cf85eb1f3620ed6d4493ea020d0b",
".git/config": "a8103e62bd8e70e4bcafb81562519c0d",
".git/objects/61/36318cb300f4395d7967c03e92fc902cd4d060": "f9d26d561310b4f8c75c3785f932814f",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/0c/b5c968b1d10256cf7de260fcf655d9dbe48e65": "5a942d6cbed913a58c09e39eff574a95",
".git/objects/0c/375552ccd8d4b2c339903965110b59910ad5b2": "f8fc88e2dfd03232fc96c14d93dd1bd0",
".git/objects/3b/f7284e1c72553a9fb3ec1564015e768effd9a6": "f63f707ce579bf34a9f3f6189b3c2002",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/cfcba25f13f97d02136f7a447e5be6f50b614b": "d0f60d00e1e6e3ecb16ef4f1ee75c46d",
".git/objects/35/6a36c01ca95edf89c6e8be67b666757841b39b": "e8cd6def0b351f494dc59319e41cec6b",
".git/objects/3c/3925eb6a2ddfac70280737df03e9ea618a5fcb": "06d98c8d23cfb7d16fb63bf7e0830ae9",
".git/objects/51/3f79c1a6c4d50408a62b3569d94fdceff186d0": "b96a16cd19f2f81fa3d1162e29396d34",
".git/objects/3d/26e0350e4c0a72e1248f71290b9f1cc335f4a3": "f3d5d5a75bf96d28f08b9039ea43bd3c",
".git/objects/58/72f836921297465a3458b9905cee72ab369970": "53f3aa83d9fe591ca6e45cdff01ccd92",
".git/objects/67/ed67808817d825ad9e206817791e740b1bce77": "9b2e0875679a391774c2ba44a238d7fb",
".git/objects/0b/3eaab49b9d56133dec9c15fe2d03879c38676f": "33d8f67071002956e598277dcf13e4ef",
".git/objects/60/1bf33a060f75b6bfce4b568753a8abb6020675": "d44cccfcf4754a445fb842a0beeaabf1",
".git/objects/5a/6d0ddbf3c4cb7795e879b3e34721382427f432": "9ae37bf09c26bedd59cd498f1d1c4d6b",
".git/objects/5f/2a6d0c9a1f573b5affb3267a61e86325464fd7": "4984d4734f8d86df238703db9b1753ed",
".git/objects/a4/1a31bd08b16cd40aa180a07a120ad9968a1cf8": "b43c9a811f5eee99fdd91b8e5ac615ae",
".git/objects/a4/724f504f69427ff481d7ef8115e445c99a72c2": "86cc8fb97cec16a5bb56fec61d57260f",
".git/objects/ac/9af2e84df24431000934028b83881e1337190d": "aec2a6d467de353929013f38258416aa",
".git/objects/bb/279ff7036ea48121a7e23dce99ae3e462ff306": "1ece6268b1c5ff825f979bcf3df02d87",
".git/objects/d7/fd3a0b307b9e1953828ac02dc57260b67b698f": "b7f02b3353d813999a64dc58cf316dfb",
".git/objects/d0/527740acc8f063e8f64f057d948377e4c610d1": "6b820e7d3516c5f0e8b9877d95497113",
".git/objects/be/35580ac7483dc6fddb5270aa8e6019d4e911ca": "072379ef496f17fe601a13dcc77899ac",
".git/objects/be/59674096e0a48d5c905b0942109c062d3aed8e": "ae560ca4b66c7cd7a663166bd406ea49",
".git/objects/d1/a2dcb74641dfa244ebc347b0e3feb62300722b": "cf1a16ff96594523ffa690fa8450df34",
".git/objects/f4/b1a715c925cfab7dbc9b16c466148801420799": "e38b35a6c31cd8e5938e6cd0d1e080ad",
".git/objects/ee/0fc28a18771bbffe2f0fed591bfb89d0ebf313": "c587b089fb9edfaceac860f255a45d19",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fd/55adaec63df4943cd10ccc7c49971d1de69d82": "df337c1b7be732c8554d0b746cac30e6",
".git/objects/fd/16687f09bb9b19522dc389f506c4918c113e8d": "885648a1c4e63bebf85417874ef27938",
".git/objects/4e/fe5d2e0209822b05cc5b85a98e7bcd43576310": "c6ab7b42ff2a6ecb0cefc51961d53b88",
".git/objects/4e/a3f29eb1527ad97e42f3c153d7eaf0a2228224": "19ef83bbc0281763c5a88a5d71471757",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/11e3e67fe52afb7f6394f9e323a7496e0377f0": "2190141f7930ed78a0c41154ee36c89e",
".git/objects/27/4385d263433658c7f291dc44bdfaaa0278d7e3": "a8a6e242e234f85e2a9c03b4bc36493d",
".git/objects/11/42a0ed66584276f381f9399f98c64bb2cd30ab": "973698de3586b7f697596128112b0a9a",
".git/objects/7d/4b7298d2708442d367e229c40496bfcdc5fd28": "a93ec77e1f7631307f6ca23cd2821c41",
".git/objects/29/bf66edfc57acf90141ead2c4480dd6e0d38693": "63054f577da8999291c16923bea03196",
".git/objects/7c/4d6631fafd982ea3d1a39e318051bb91f831a2": "16e3c080a23278651879466ce0ee6422",
".git/objects/42/5daac608f661d499661b29ebe376b091c9ee56": "426037ab742cc8e53ef90a75db79836c",
".git/objects/74/40c5d275ddb505d232eae358d7468f0d767fad": "e5d846344d73eac5c8339bf84045e124",
".git/objects/17/8f32d50ee0453b9da62d31563fa7716636cab3": "93c54d103faf7bb71687e7a43df401be",
".git/objects/7b/81d908380382184d80a0720b357c413fef57e8": "14010d216ece54bf6f2da9b1cca44cec",
".git/objects/7b/15e8a1ceb6755d8a9136114036c2fadf97fbc0": "a23589f1a7b986943445308d80d6929a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/a87b91037bb6b9147a87af0a7ad96681c2b9e9": "093ba20cc0e5ddc7895afe33514ac84a",
".git/objects/4c/decdcfada27789432e54e199c9ca92ec6b6946": "149c5ec4a78e6f0e66ece4348c4625c5",
".git/objects/26/a8421a62d7fe7abea4d11ccf61aa11d5ab4a0a": "03cea666deb4379348b4c34941c0d5e3",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/cb492fe33cb8eccd2874462644b8232c564c92": "1339ff71987c79a8bf4e5266fa30c3c0",
".git/objects/5c/34456604fcebc4831226b9d537eb569c483da8": "702fe2a1c1550bd2af95971022d10d0c",
".git/objects/65/e0798c257dd0e316a86556b580f18d870d5db6": "86761a235df6ad90f4c17d362b799dc5",
".git/objects/96/1032beb51d2d91b22ff7e506c5da6de2999fe3": "918de5ea47191853ee7b001c908ece1c",
".git/objects/54/ca002db0c1ceafb6beb5e8334e0c845d7e7be8": "640ab3952b4ce886a0d8bcaf36f8b6af",
".git/objects/6d/bcb62cab1b465dc3d716740b1cc71312ffe5ce": "de6d48da3673939423c50859ba24e897",
".git/objects/01/2d6dbd29139ff1f2330e286f6635ca07a6f736": "31302df115a06ef750a9835daa44d3ab",
".git/objects/39/15cd252e149a905241159a7229b7ff4979e719": "452ed577472cbaced8c1d64e42f65a4f",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/d3/26cf93966225c90d4b35cc3ce3f6f21873eb60": "63659097602f55e9dd0416913b8ab050",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/d5/f42420a3bfcea177d03cb6695f8669ed2b505f": "45d72a3dd71b42d2235421798ada4517",
".git/objects/d5/911643ab485d01bcc5229a09df4512a31bfd2d": "e5fe786ce375a671fd8db64df2ae4e3b",
".git/objects/d2/3d6f83b6a9bc7a3ace04590823df03c465b5b7": "2f66499c9145c8debc820e1b86ee22eb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/b354d864ac996ccca39554988ae83497a33159": "398eb6d34e2fcbc12de44fbb21dd4973",
".git/objects/a8/358000b7e2fe7eaee69338554c473b1424213f": "445c145dde1296df4d058125f0ddbcab",
".git/objects/a6/2927046ed1b9cf631e260ba54fa62d544324d8": "ffe4a6f3f3aed9e5c4607eaaaf4128ae",
".git/objects/e6/83d8ea909b25b5db39328e817240f6728d7e41": "14a7a681adf1d759b5256044ce472a2c",
".git/objects/e8/6e04e525f88a172315b0dd0db98de9d0a771f7": "181022af4ec2ec40ae4a0f4534833bc2",
".git/objects/fa/c3ece0e4c44d7d1789d24a06e8dba9c88f5578": "8f1dadd4c9e25d3977f146fde1a8bf45",
".git/objects/e9/91cbe2f9433b4379f2bcca9eab0013bfcf17f6": "7eb0b50ab1508a92de3d3bd06ab68a22",
".git/objects/e7/c1c81278050347eec74337989fae722a9fa711": "d0e3f951c916f711947f0b602fbbf39d",
".git/objects/83/1e16262816f548c361fba4fa8b778493adcc0b": "4b6f82143b26187ba10a57e7077da2b6",
".git/objects/1b/4947f9519988b92fead145e15754aefb2e4f19": "a10b26a22206b0ac4ae1798c9b914d30",
".git/objects/70/1fcd4daedc7606e1863bc71792cfa94e7769f4": "90d7d516c78b0ceb8ee80bda4afe120b",
".git/objects/1e/14e2c50d203d1ca87ed63dafb362c25ac28832": "431f14a47cacc8c971b5a2f0b4c763ef",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/85/ef3947d0eeb8a461f6a3195acae4d2de2f65db": "cce6c4d7599649b758ccea5a27f623d4",
".git/objects/1d/63e677acae2ba79f532bc49d6429c88e9e19ab": "27643bf506bceb5c1b1faef5ca559775",
".git/objects/71/f23cc1c998dbbe3bfedd05d3fe19214df0bf95": "059ba8645a552c94eca14880b5f7410e",
".git/objects/40/421f0860d6aaf63ee2b3bbd6d2948db3918419": "aae597d165b7474e8fca03d97da286ac",
".git/objects/2e/86b3c85e4ed230f03c2d614128700872c61a93": "b0a2f89108e0886b04f8515847a46dd7",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/8e/c7040c6819d1748a6da72c6e25eee69fed922b": "7ebe2f5d448abfa387722e269b6ac43f",
".git/objects/8e/cbfa6e62c40cad27980f016c9f262f431d5f58": "df3b1d6959dbed7e85e3eeac5ba7b2f3",
".git/objects/22/66b7664a15c2aea63b1cadb73a413763d083f4": "475daa592ceedb074aa8caf4a3393914",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d673f29722a79d764a04dc4f888fa20d",
".git/logs/refs/heads/master": "d673f29722a79d764a04dc4f888fa20d",
".git/logs/refs/remotes/origin/master": "beb6265389c89ee8ca4b60d73c43f01d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "45973e07dd5503f355e0a8d350e9c3e7",
".git/refs/remotes/origin/master": "45973e07dd5503f355e0a8d350e9c3e7",
".git/index": "b21cd5f7a8d3cf9e357bb03d30e53df2",
".git/COMMIT_EDITMSG": "120acd42a31161b4cbe654a9d1f03761",
".git/FETCH_HEAD": "c79a835067995338af449dbf0d6dd9ba",
"assets/AssetManifest.json": "919bf67be23a9d9335d53861cec844cc",
"assets/NOTICES": "d1512a8c862f8ab4fbf11e2bfd1e3a39",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/beyond-meat-mcdonalds.png": "d7e581277544fcc19aac9ea9e85c2dd1",
"assets/assets/images/burger.png": "4d17e27295ecdebf10bdf31641d85d31",
"assets/assets/icons/search.svg": "44c74f6caa429d5000297da002fa24da",
"assets/assets/icons/person.svg": "dba219de92e29f222eff24c12b21a093",
"assets/assets/icons/home.svg": "777cec44194e8833e3f59fe27a6010d4",
"assets/assets/icons/chinese_noodles.svg": "8c249ffc25541cfd1880817f37527a90",
"assets/assets/icons/Following.svg": "d052c369d38c0189c83a8567981f1b1a",
"assets/assets/icons/bag.svg": "16e0312baad06fee9eda5c084a1f96b3",
"assets/assets/icons/notification.svg": "45b14e00a24f69ec7825247db39bc07e",
"assets/assets/icons/more.svg": "211bf8c1882de0f9bac7e958134fc3f0",
"assets/assets/icons/share.svg": "8994aae9e31ee14540f5d58836368b4d",
"assets/assets/icons/burger_beer.svg": "ff6cf7d441d0ed3f02d7c589cb0a1aa7",
"assets/assets/icons/macdonalds.svg": "3b7d1ecf9e9e41a38a055b0dfdaf447f",
"assets/assets/icons/menu.svg": "bd19ca24aafe67c4aafcde346384979d",
"assets/assets/icons/Glyph.svg": "4d15e1dfc29d38934808d67b0ea65a78"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
