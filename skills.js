let scale = 1;

window.addEventListener('wheel', function(e) {
  if (e.ctrlKey) {
    e.preventDefault(); // Prevent browser default zoom

    if (e.deltaY < 0) {
      scale += 0.1;
    } else {
      scale = Math.max(0.1, scale - 0.1);
    }

    document.getElementById('content-wrapper').style.transform = `scale(${scale})`;
  }
}, { passive: false });
