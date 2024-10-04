document.addEventListener('DOMContentLoaded', () => {
  const arrows = document.querySelectorAll('.games__arrow');
  const modal = document.getElementById('game-modal');
  const iframe = document.getElementById('game-frame');
  const closeButton = document.querySelector('.close');

  arrows.forEach(arrow => {
      arrow.addEventListener('click', (event) => {
          event.preventDefault(); 
          const gameUrl = arrow.getAttribute('data-url'); 

          iframe.src = gameUrl;
          modal.classList.add('open'); 
      });
  });

  
  closeButton.addEventListener('click', () => {
      modal.classList.remove('open'); 
      iframe.src = ''; 
  });

  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.classList.remove('open');
          iframe.src = ''; 
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    successMessage.style.display = 'block'; 

    form.reset();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const registerBtn = document.getElementById('register-btn');
  const modal = document.getElementById('register-modal');
  const closeButton = document.querySelector('.close');
  const registerForm = document.getElementById('register-form');

  registerBtn.addEventListener('click', (event) => {
      event.preventDefault(); 
      modal.classList.add('show'); 
  });

  closeButton.addEventListener('click', () => {
      modal.classList.remove('show'); 
  });

  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.classList.remove('show'); 
      }
  });

  registerForm.addEventListener('submit', (event) => {
      event.preventDefault(); 
      alert('Registration successful!'); 
      modal.classList.remove('show'); 
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookiesButton = document.getElementById('accept-cookies');
  const declineCookiesButton = document.getElementById('decline-cookies');

  if (!localStorage.getItem('cookiesAccepted') && !localStorage.getItem('cookiesDeclined')) {
      cookieBanner.style.display = 'block'; 
  }

  acceptCookiesButton.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true'); 
      cookieBanner.style.display = 'none'; 
  });

  declineCookiesButton.addEventListener('click', () => {
      localStorage.setItem('cookiesDeclined', 'true'); 
      cookieBanner.style.display = 'none'; 
  });
});