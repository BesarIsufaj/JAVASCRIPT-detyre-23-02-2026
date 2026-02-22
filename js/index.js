  // Merr të gjitha <details>
  const detailsList = document.querySelectorAll('details');
  
  // Shto event listener në çdo summary
  detailsList.forEach((detail) => {
    detail.addEventListener('toggle', function() {
      // Nëse ky details është i hapur
      if (this.open) {
        // Mbyll të gjitha të tjerat
        detailsList.forEach((otherDetail) => {
          if (otherDetail !== this) {
            otherDetail.removeAttribute('open');
          }
        });
      }
    });
  });