// import { version } from "./modules/utils/helpers/get-version"
// version()

const ver = '2.7.0'
const cacheName = 'Memomizer-pwa-v-' + ver
const filesToCache = [
  '/'
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