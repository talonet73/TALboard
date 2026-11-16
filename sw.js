// TALboard service worker: rende l'app disponibile offline. Non tocca i tuoi dati.
const CACHE = 'talboard-v1.5';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png', './icons/logo-256.png', './cal.html'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
// rete prima (così ricevi subito gli aggiornamenti), cache se sei offline
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const u = new URL(e.request.url);
  // file .ics generato al volo: Safari lo riconosce e lo passa al Calendario
  if (u.pathname.endsWith('/event.ics')){
    let ics = '';
    try { const b = atob((u.searchParams.get('d')||'').replace(/-/g,'+').replace(/_/g,'/')); ics = new TextDecoder().decode(Uint8Array.from(b, c => c.charCodeAt(0))); } catch(err){}
    e.respondWith(new Response(ics, {headers:{'Content-Type':'text/calendar; charset=utf-8','Content-Disposition':'inline; filename="TALboard.ics"'}}));
    return;
  }
  e.respondWith(fetch(e.request).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html'))));
});
self.addEventListener('notificationclick', e => { e.notification.close(); e.waitUntil(self.clients.matchAll({type:'window'}).then(cs => cs.length ? cs[0].focus() : self.clients.openWindow('./'))); });
