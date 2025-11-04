// Minimal enhancements: active nav + current year
(function(){
  var path = location.pathname;
  var links = document.querySelectorAll('.nav a');
  links.forEach(function(a){
    var href = a.getAttribute('href');
    if(!href) return;
    // normalize: handle /, /index.html and file names
    var isHome = (href.endsWith('index.html') || href.endsWith('/'));
    if(isHome && (path.endsWith('/') || path.endsWith('/index.html'))) a.classList.add('active');
    else if(path.endsWith(href)) a.classList.add('active');
  });
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();