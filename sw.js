// import { version } from "./modules/utils/helpers/get-version"
// version()

const ver = '2.7.8'
const cacheName = 'Memomizer-pwa-v-' + ver
const filesToCache = [
  '/',
  '/index.html',
  '/css/form.css',
  '/css/list.css',
  '/css/main.css',
  '/css/menu.css',
  '/css/modal.css',
  '/js/db/books.js',
  '/js/db/demo.js',
  '/js/db/trans.js',
  '/js/elements/form/submit.js',
  '/js/elements/modal/add-card.js',
  '/js/elements/modal/del-card.js',
  '/js/elements/modal/edit-card.js',
  '/js/elements/modal/info-card.js',
  '/js/elements/modal/menu.js',
  '/js/elements/modal/modal.js',
  '/js/elements/select/select-list.js',
  '/js/elements/render-cards.js',
  '/js/func/add-listeners.js',
  '/js/func/clicks-touches.js',
  '/js/func/func.js',
  '/js/func/get-info.js',
  '/js/func/init.js',
  '/js/func/storage.js',
  '/js/func/uploading.js',
  '/js/versions/get-version.js',
  '/js/versions/versions.js',
  '/img/icons/icon-128.png',
  '/img/icons/icon-256.png',
  '/img/icons/icon-512.png',
  '/img/backup.png',
  '/img/close.png',
  '/img/data.png',
  '/img/del-red.png',
  '/img/edit-blue.png',
  '/img/import.png',
  '/img/info-blue.png',
  '/img/info-white.png',
  '/img/menu.png',
  '/app.js',
  '/favicon.png',
]
const dataCacheName = 'pwa-data-v-' + ver

self.addEventListener('install', async (e) => {
  // console.log('[sw]: installed')
  const cache = await caches.open(cacheName)
  await cache.addAll(filesToCache)
})

self.addEventListener('activate', event => {
  // console.log('SW activated!')
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName  => {
          // Return true if you want to remove this cache
        }).map(cacheName => {
          return caches.delete(cacheName)
        })
      )
    })
  )
})
self.addEventListener('fetch', (event) => {
  // console.log('[sw]: Fetch')

  event.respondWith(
    caches
      .match(event.request)
      .then((resp) => {
        return (
          resp ||
          fetch(event.request).then((response) => {
            let responseClone = response.clone()
            caches.open(cacheName).then((cache) => {
              cache.put(event.request, responseClone)
            })

            return response
          })
        )
      })
      .catch(() => {
        return caches.match('/screenshots/screenshot1.jpeg')
      })
  )
})