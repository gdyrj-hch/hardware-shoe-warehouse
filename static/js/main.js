// 硬货鞋仓官网交互脚本
document.addEventListener('DOMContentLoaded', function() {
  // 移动端菜单切换（如果需要的话）
  initMobileMenu();
  
  // 表单处理
  initForms();
  
  // 动画效果
  initAnimations();
});

// 移动端菜单切换
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }
}

// 表单处理
function initForms() {
  const contactForm = document.getElementById('contact-form');
  const joinForm = document.getElementById('join-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(contactForm);
      
      // 这里应该发送到服务器，暂时只是模拟
      console.log('联系表单数据:', Object.fromEntries(formData));
      alert('感谢您的留言！我们会尽快与您联系。');
      contactForm.reset();
    });
  }
  
  if (joinForm) {
    joinForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(joinForm);
      
      // 这里应该发送到服务器，暂时只是模拟
      console.log('加盟申请表数据:', Object.fromEntries(formData));
      alert('加盟申请已提交！我们的顾问将在24小时内与您联系。');
      joinForm.reset();
    });
  }
}

// 动画效果
function initAnimations() {
  // 滚动时头部样式变化
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // 数字动画（如果有数字展示）
  const counters = document.querySelectorAll('.counter');
  if (counters.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-target'));
          const speed = 200; // 动画速度
          const increment = target / speed;
          let current = 0;
          
          const updateCounter = () => {
            if (current < target) {
              current += increment;
              counter.innerText = Math.ceil(current);
              setTimeout(updateCounter, 1);
            } else {
              counter.innerText = target;
            }
          };
          
          updateCounter();
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
  }
}

// 工具函数：防抖
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}