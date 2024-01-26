const startElement = document.querySelector('.js-start');
      const stopElement = document.querySelector('.js-stop');
      const resetElement = document.querySelector('.js-reset');
      const sec = document.querySelector('.js-seconds');
      const min = document.querySelector('.js-min');
      const hour = document.querySelector('.js-hour');
      const mili = document.querySelector('.js-mili');

      let milisec = 0;
      let seconds = 0;
      let minutes = 0;
      let hours = 0;
      let intervalId;
      showTime();

      startElement.addEventListener('click', () => {
        intervalId = setInterval(() => {
          milisec++;
            if (milisec === 100) {
              seconds++;
              milisec = 0;
            };
            if (seconds === 60) {
              minutes++;
              seconds = 0;
            };
            if (minutes === 60) {
              hours++;
              minutes = 0;
            };
          showTime();
        }, 10)
      });
      stopElement.addEventListener('click', () => {
        clearInterval(intervalId);
        showTime();
      });
      resetElement.addEventListener('click', () => {
        clearInterval(intervalId);
        milisec = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;
        showTime();
      });

      function showTime() {
        mili.innerHTML = `${milisec}ms`;
        sec.innerHTML = `:${seconds}s`;
        min.innerHTML = `:${minutes}m`;
        hour.innerHTML = `${hours}h`;
      }