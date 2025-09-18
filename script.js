// Basic interactive behavior for the personal site

function contactMe(){
  const email = prompt('Enter your email to contact me:');
  if(email){
    alert('Thanks! This is a demo — would contact ' + email);
  }
}

function scrollToTop(){
  window.scrollTo({top:0,behavior:'smooth'});
}

// Loading screen: hide after DOM content loaded
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loading-screen');
  if(loader){
    setTimeout(() => { loader.style.display = 'none'; }, 600);
  }
});

// Back-to-top button visibility
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  if(!btn) return;
  if(window.scrollY > 200){ btn.style.display = 'block'; } else { btn.style.display = 'none'; }
});

// Simple accessibility: focus outline for keyboard users
document.addEventListener('keydown', (e) => {
  if(e.key === 'Tab') document.body.classList.add('show-focus');
});
