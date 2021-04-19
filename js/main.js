$(function () {
  const body = document.querySelector('body');
  const toggle = document.getElementById('toggle');
  const input = document.getElementById('switch');

  const introHeight = document.querySelector('.intro').offsetHeight;
  const topButton = document.getElementById('top-button');
  const $topButton = $('#top-button');
  const botButton = document.getElementById('bot-button');
  const $botButton = $('#bot-button');

  if (window.pageYOffset < 10) {
    console.log('YOOOOOO');
    botButton.classList.add('show');
  }
  else if (window.pageYOffset > introHeight) {
    topButton.classList.add('show');
  }

  window.addEventListener(
    'scroll',
    function () {
      if (window.scrollY > introHeight) {
        $topButton.fadeIn();
      } else {
        $topButton.fadeOut();
      }

      if (window.scrollY > 10) {
        $botButton.fadeOut();
      }
      else {
        $botButton.fadeIn();
      }
    },
    false
  );

  topButton.addEventListener('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  botButton.addEventListener('click', function () {
    $('html, body').animate({ scrollTop: introHeight }, 500);
  });

  const hand = document.querySelector('.emoji.wave-hand');

  function waveOnLoad() {
    hand.classList.add('wave');
    setTimeout(function () {
      hand.classList.remove('wave');
    }, 2000);
  }

  function pointDownOnLoad() {
    botButton.classList.add('point-down');
    setTimeout(function () {
      botButton.classList.remove('point-down');
    }, 200);
    setTimeout(function () {
      botButton.classList.add('point-down');
    }, 400);
    setTimeout(function () {
      botButton.classList.remove('point-down');
    }, 600);
  }

  setTimeout(function () {
    waveOnLoad();
  }, 1000);

  setTimeout(function () {
    if (window.pageYOffset < 10) {
      pointDownOnLoad();
    }
  }, 1200);

  hand.addEventListener('mouseover', function () {
    hand.classList.add('wave');
  });

  hand.addEventListener('mouseout', function () {
    hand.classList.remove('wave');
  });

  window.sr = ScrollReveal({
    reset: false,
    duration: 600,
    easing: 'cubic-bezier(.694,0,.335,1)',
    scale: 1,
    viewFactor: 0.3,
  });

  sr.reveal('.background');
  sr.reveal('.skills');
  sr.reveal('.experience', { viewFactor: 0.2 });
  sr.reveal('.featured-projects', { viewFactor: 0.1 });
  sr.reveal('.other-projects', { viewFactor: 0.05 });
});
