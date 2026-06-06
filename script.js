document.addEventListener("DOMContentLoaded",function(){
  // mobile nav toggle
  const navToggle=document.querySelector('.nav-toggle');
  const nav=document.getElementById('primary-navigation');
  navToggle&&navToggle.addEventListener('click',function(){
    const expanded=this.getAttribute('aria-expanded')==='true';
    this.setAttribute('aria-expanded',String(!expanded));
    if(nav.style.display==='block')nav.style.display='';else nav.style.display='block';
  });

  // set current year
  const yearEl=document.getElementById('year');
  if(yearEl)yearEl.textContent=new Date().getFullYear();

  // simple form handling (placeholder for real backend)
  const form=document.getElementById('contact-form');
  const status=document.getElementById('form-status');
  form&&form.addEventListener('submit',function(e){
    e.preventDefault();
    const name=form.name.value.trim();
    const email=form.email.value.trim();
    if(!name||!email){
      status.textContent='Please provide name and a valid email.';return;
    }
    status.textContent='Thanks — request sent. I will email you shortly.';
    form.reset();
  });

  // auth modal
  const authModal=document.getElementById('auth-modal');
  const loginBtn=document.getElementById('login-btn');
  const signupBtn=document.getElementById('signup-btn');
  const modalClose=authModal && authModal.querySelector('.modal-close');
  const loginForm=document.getElementById('login-form');
  const signupForm=document.getElementById('signup-form');
  const showSignupLink=document.getElementById('show-signup');

  function openModal(showSignup){
    if(!authModal) return;
    authModal.setAttribute('aria-hidden','false');
    authModal.style.display='flex';
    if(showSignup){loginForm.style.display='none';signupForm.style.display='block';}else{loginForm.style.display='block';signupForm.style.display='none';}
  }
  function closeModal(){if(!authModal) return;authModal.setAttribute('aria-hidden','true');authModal.style.display='none';}

  loginBtn&&loginBtn.addEventListener('click',function(){openModal(false)});
  signupBtn&&signupBtn.addEventListener('click',function(e){e.preventDefault();openModal(true)});
  modalClose&&modalClose.addEventListener('click',closeModal);
  authModal&&authModal.addEventListener('click',function(e){if(e.target===authModal)closeModal();});
  showSignupLink&&showSignupLink.addEventListener('click',function(e){e.preventDefault();openModal(true)});

  // simple auth form handlers (placeholder)
  loginForm&&loginForm.addEventListener('submit',function(e){e.preventDefault();alert('Logged in (demo)');closeModal();});
  signupForm&&signupForm.addEventListener('submit',function(e){e.preventDefault();alert('Account created (demo)');closeModal();});

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click',function(e){
      const href=this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el=document.querySelector(href);
        if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
});
