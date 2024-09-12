const canvas = document.getElementById('albumCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fetch top albums from Spotify
const getTopAlbums = async () => {
  const token = 'YOUR_ACCESS_TOKEN'; // Replace with your access token
  const response = await fetch('https://api.spotify.com/v1/me/top/albums', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data.items; // Array of albums
};

// Render albums on canvas
const renderAlbums = async () => {
  const albums = await getTopAlbums();
  albums.forEach((album, index) => {
    // Example: Draw album images on the canvas
    const img = new Image();
    img.src = album.images[0].url; // Use album artwork
    img.onload = () => {
      ctx.drawImage(img, Math.random() * canvas.width, Math.random() * canvas.height, 100, 100);
    };
  });
};

renderAlbums();
