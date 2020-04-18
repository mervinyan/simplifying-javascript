function getUserPreferences() {
  const preferences = new Promise((resolve, reject) => {
    resolve({
      theme: 'dusk'
    });
  });
  return preferences;
}

async function getTheme() {
  const { theme } = await getUserPreferences();
  return theme;
}

getTheme()
  .then(theme => {
    console.log(theme);
  });

function getMusic(theme) {
  if (theme === 'dusk') {
    return Promise.resolve({
      album: 'music for airports'
    });
  }
  return Promise.resolve({
    album: 'kind of blue'
  });
}

function getArtist(album) {
  return Promise.resolve({
    artist: 'Brian Eno'
  });
}

async function getArtistByPreference() {
  const { theme } = await getUserPreferences();
  const { album } = await getMusic(theme);
  const { artist } = await getArtist(album);
  return artist;

}

getArtistByPreference()
  .then(artist => {
    console.log(artist);
  })
  .catch(e => {
    console.log(e);
  });