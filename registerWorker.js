if ('serviceWorker' in navigator) {
  if (doDataCache) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        console.error('ServiceWorker registration failed: ', err);
      });
    });
  } else {
    navigator.serviceWorker.getRegistrations().then(registrations => {
        for (const registration of registrations) {
            registration.unregister();
        } 
    });
  }
}