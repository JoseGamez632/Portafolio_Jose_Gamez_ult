// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQC4UP_kqLxaT35pXtIiQSFq8bclFgJZ-BFoqwizMRFo_8O9iXOJFaS5IGpDVx_DmUsEiqNpu0pYkt_brk8AfqUUiupNQ-gZayLbDcoHFDip6zwv7jvYI3uk1PB-idt2vYbhUiKbMPLzpYZRR1YEPhgzED0dQfMVKnUa1oPWRS8GKKKYXCiXIbj5rpYRNUD4VMzsNDdTFcchh2kzzXs9NnlcpIep0O_PGV5TAOnGoTUUoWwJqqIPpspc7ZyMfkR-DFk803-n_vstNbRii02dM33idQxSRxJR';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);

const playlistId = '3wCHrBv35HfUPqVJ1JTvZA';

<iframe
  title="Spotify Embed: Recommendation Playlist "
  src={`https://open.spotify.com/embed/playlist/3wCHrBv35HfUPqVJ1JTvZA?utm_source=generator&theme=0`}
  width="100%"
  height="100%"
  style={{ minHeight: '360px' }}
  frameBorder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
/>