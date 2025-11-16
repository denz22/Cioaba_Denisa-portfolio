// ---------- DRAGGABLE POPUPS ----------
function makeDraggablePopup(buttonId, popupId, headerId, closeId) {
  const btn    = document.getElementById(buttonId);
  const popup  = document.getElementById(popupId);
  const header = document.getElementById(headerId);
  const close  = document.getElementById(closeId);

  if (!btn || !popup || !header || !close) {
    console.warn('Missing element for:', buttonId, popupId);
    return;
  }

  // open (centrat)
  btn.addEventListener('click', () => {
    popup.style.display = 'block';
    popup.style.left = '50%';
    popup.style.top  = '120px';
    popup.style.transform = 'translateX(-50%)';
  });

  // close
  close.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // drag
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  header.addEventListener('mousedown', (e) => {
    isDragging = true;
    const rect = popup.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    popup.style.transform = 'none';
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    popup.style.left = (e.clientX - offsetX) + 'px';
    popup.style.top  = (e.clientY - offsetY) + 'px';
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
}

// attach popups
makeDraggablePopup('Cv_button',       'Cv_popup',       'Cv_popup_header',       'Cv_close');
makeDraggablePopup('Proiecte_button', 'Proiecte_popup', 'Proiecte_popup_header', 'Proiecte_close');
makeDraggablePopup('Q_A_button',      'Q_A_popup',      'Q_A_popup_header',      'Q_A_close');
makeDraggablePopup('Other_button',    'Other_popup',    'Other_popup_header',    'Other_close');

// ---------- THEME SWITCHER ----------
const themeRadios = document.querySelectorAll('input[name="theme"]');
const themes = ['blue', 'pink', 'yellow', 'black', 'green'];

document.body.classList.add('theme-green');
document.getElementById('Green').checked = true;

themeRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    const value = radio.value;
    themes.forEach(t => document.body.classList.remove('theme-' + t));
    document.body.classList.add('theme-' + value);
  });
});

// ---------- EMAIL / LINKEDIN / GITHUB BUTTONS ----------

// Deschide direct Gmail compose într-un tab nou
const emailBtn = document.getElementById('Email_button');
if (emailBtn) {
  emailBtn.addEventListener('click', () => {
    const url =
      'https://mail.google.com/mail/?view=cm&fs=1' +
      '&to=anamariadeni8@gmail.com' +
      '&su=Hello%20Denisa';
    window.open(url, '_blank');
  });
}

// LinkedIn profil
const linkedinBtn = document.getElementById('Linkedin_button');
if (linkedinBtn) {
  linkedinBtn.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/cioaba-denisa-9bb4a3270', '_blank');
  });
}

// GitHub profil
const gitBtn = document.getElementById('Git_button');
if (gitBtn) {
  gitBtn.addEventListener('click', () => {
    window.open('https://github.com/denz22', '_blank');
  });
}

// ---------- Q&A ACCORDION ----------
document.querySelectorAll('.qa-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.qa-item');
    item.classList.toggle('open');
  });
});
