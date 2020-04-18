function getUserPreferences(cb) {
  setTimeout(() => {
    cb({
      theme: 'dusk',
    })
  }, 1000);
}

function log(value) {
  return console.log(value);
}

log('starting');

getUserPreferences(preferences => {
  return log(preferences.theme.toUpperCase());
});

log('ending?');

function getMusic(theme, cb) {
  setTimeout(() => {
    if (theme === 'dusk') {
      return cb({
        album: 'music for airports'
      })
    }
    return cb({
      album: 'kind of blue'
    })
  }, 1000);
}

getUserPreferences(preferences => {
  return getMusic(preferences.theme, music => {
    console.log(music.album);
  });
});

function getUserPreferences1() {
  const preferences = new Promise((resolve, reject) => {
    resolve({
      theme: 'dusk'
    });
  });
  return preferences;
}

getUserPreferences1()
  .then(preferences => {
    console.log(preferences.theme);
  });

function failUserPreference() {
  const finder = new Promise((resolve, reject) => {
    reject({
      type: 'Access Denied'
    });
  });
  return finder;
}

failUserPreference()
  .then(preferences => {
    console.log(preferences.theme);
  })
  .catch(error => {
    console.error(`Fail: ${error.type}`);
  });

function getMusic1(theme) {
  if (theme === 'dusk') {
    return Promise.resolve({
      album: 'music for airports'
    });
  }
  return Promise.resolve({
    album: 'kind of blue'
  });
}

getUserPreferences1()
  .then(preference => {
    return getMusic1(preference.theme);
  })
  .then(music => {
    console.log(music.album);
  });

function getArtist(album) {
  return Promise.resolve({
    artist: 'Brian Eno'
  });
}

function failMusic(theme) {
  return Promise.reject({
    type: 'Network error'
  });
}

getUserPreferences1()
  .then(preference => failMusic(preference.theme))
  .then(music => getArtist(music.album))
  .catch(e => {
    console.log(e);
  });