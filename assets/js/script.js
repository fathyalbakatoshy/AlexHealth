const deadlineDate = new Date('November 24, 2024 00:00:00').getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = deadlineDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = 'Deadline Reached';
  }
}, 1000);