console.log('Hello from service-worker.js');

import { precacheAndRoute, matchPrecache } from 'workbox-precaching';
import { setCatchHandler } from 'workbox-routing';

// Ensure your build step is configured to include /offline.html as part of your precache manifest.
precacheAndRoute(self.__WB_MANIFEST);

// Catch routing errors, like if the user is offline
setCatchHandler(async ({ event }) => {
    if (process.env.NODE_ENV === "production") {
        // Return the precached offline page if a document is being requested
        if (event.request.destination === 'document') {
          return matchPrecache('/offline.html');
        }

        return Response.error();
    }/*
  // Return the precached offline page if a document is being requested
  if (event.request.destination === 'document') {
    return matchPrecache('/offline.html');
  }

  return Response.error();*/
});
