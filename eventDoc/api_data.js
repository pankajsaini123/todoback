define({ "api": [
  {
    "type": "emit",
    "url": "auth-error",
    "title": "emit authentication error",
    "version": "1.0.0",
    "group": "Emit",
    "description": "<p>This event is emmited when the auth token provided by user cannot be verified</p>",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitAuthError"
  },
  {
    "type": "emit",
    "url": "auth-error",
    "title": "broadcast users online",
    "version": "1.0.0",
    "group": "Emit",
    "description": "<p>This broadcast event is emited to indicate the online users</p>",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitAuthError"
  },
  {
    "type": "emit",
    "url": "verifyUser",
    "title": "verify user",
    "version": "1.0.0",
    "group": "Emit",
    "description": "<p>This event is emmited to verify asking user to verify itself.</p>",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitVerifyuser"
  },
  {
    "type": "listen",
    "url": "disconnect",
    "title": "to disconnect from socket",
    "version": "1.0.0",
    "group": "Listen",
    "description": "<p>This eventListner is listens to disconnect event to disconnect from socket</p>",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "ListenDisconnect"
  },
  {
    "type": "listen",
    "url": "notify-updates",
    "title": "notification",
    "version": "1.0.0",
    "group": "Listen",
    "description": "<p>This eventListner listens to updates from client</p>",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "ListenNotifyUpdates"
  },
  {
    "type": "listen",
    "url": "set-user",
    "title": "Setting user online",
    "version": "1.0.0",
    "group": "Listen",
    "description": "<p>This eventListner listens to user for authToken verification</p>",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "ListenSetUser"
  }
] });
