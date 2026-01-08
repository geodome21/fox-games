// Simple side banner behavior: close button and optional auto-rotate
document.addEventListener('DOMContentLoaded', function(){
  // Close buttons for both banners
  document.querySelectorAll('.side-banner-close').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const parent = btn.closest('.side-banner');
      parent?.remove();
    });
  });

  // Optional: auto-rotate for each banner container (disabled by default)
  const rotate = false; // set true to enable
  if(rotate){
    document.querySelectorAll('.side-banner-inner').forEach(inner=>{
      let index = 0;
      const items = inner.querySelectorAll('.banner-item');
      if(items.length>1){
        items.forEach((el,i)=> el.style.display = i===0? 'block':'none');
        setInterval(()=>{
          items[index].style.display='none';
          index = (index+1)%items.length;
          items[index].style.display='block';
        },4000);
      }
    });
  }
  // Responsive sizing: compute ideal banner size based on viewport while respecting aspect ratio and limits
  const ASPECT = 500/300; // height / width (matches new default 300x500)
  const MIN_W = 240; // increase minimum width so banners stay large on small viewports
  const MAX_W = 720; // allow much larger banners on big screens
  const WIDTH_VW_RATIO = 0.12; // use a larger fraction of viewport width for banners

  function updateBannerSizes(){
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    let w = Math.round(Math.min(Math.max(vw * WIDTH_VW_RATIO, MIN_W), MAX_W));
    let h = Math.round(w * ASPECT);
    // ensure it doesn't exceed a percentage of viewport height
    const maxH = Math.round(vh * 0.8);
    if(h > maxH){
      h = maxH;
      w = Math.round(h / ASPECT);
    }

    document.querySelectorAll('.side-banner').forEach(el=>{
      el.style.setProperty('--banner-width', w + 'px');
      el.style.setProperty('--banner-height', h + 'px');
    });
  }

  // debounce resize
  let resizeTimer = null;
  window.addEventListener('resize', ()=>{
    if(resizeTimer) cancelAnimationFrame(resizeTimer);
    resizeTimer = requestAnimationFrame(updateBannerSizes);
  });

  // initial sizing
  updateBannerSizes();
});
