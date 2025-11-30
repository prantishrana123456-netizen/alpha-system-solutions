document.getElementById('year').textContent = new Date().getFullYear();

(function(){
  const heroWrap = document.querySelector('.hero-wrap');
  const layers = document.querySelectorAll('.parallax .layer');
  
  if(!heroWrap) return;
  
  heroWrap.addEventListener('mousemove', (e) => {
    const rect = heroWrap.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    layers.forEach((layer, i) => {
      const depth = (i + 1) * 6;
      const moveX = x * depth;
      const moveY = y * depth;
      layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(${1 + i * 0.02})`;
    });
  });

  window.addEventListener('load', () => {
    document.querySelectorAll('.reveal').forEach((el, idx) => {
      el.style.animationDelay = (idx * 120) + 'ms';
      el.classList.add('visible');
    });
  });
})();
