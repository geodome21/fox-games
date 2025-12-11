//Service Worker
if('serviceWorker' in navigator) {
    console.log('Puedes usar el service worker en tu navegador');
    navigator.serviceWorker.register('sw.js');
} else {
    console.log('No puede usar los service worker en tu navegador');
}