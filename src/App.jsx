import { useState } from "react";

function App() {
  const [totalSecond, setTotalSecond] = useState(1209600);
  const [time, setTime] = useState({
    days: parseInt(totalSecond / 86400),
    hours: parseInt((totalSecond % 86400) / 3600),
    minutes: parseInt(((totalSecond % 86400) % 3600) / 60),
    seconds: parseInt(((totalSecond % 86400) % 3600) % 60),
  });

  setTimeout(() => {
    setTotalSecond(totalSecond - 1);
    setTime({
      days: parseInt(totalSecond / 86400),
      hours: parseInt((totalSecond % 86400) / 3600),
      minutes: parseInt(((totalSecond % 86400) % 3600) / 60),
      seconds: parseInt(((totalSecond % 86400) % 3600) % 60),
    });
  }, 1000);

  return (
    <>
      <main className="font-red-hat bg-image bg-very-dark-blue flex h-screen w-screen flex-col items-center justify-around">
        <h1 className="mt-20 px-16 text-center text-xl font-semibold uppercase tracking-[0.3em] text-white md:px-0">
          We're launching soon
        </h1>
        <section className="flex gap-3 md:gap-5">
          <div className="time-card">
            <div className="time-page">
              <p className="time-num">{String(time.days).padStart(2, "0")}</p>

              <div className="flip"></div>
            </div>
            <p className="time-text">Days</p>
          </div>
          <div className="time-card">
            <div className="time-page">
              <p className="time-num">{String(time.hours).padStart(2, "0")}</p>
              <div className="flip"></div>
            </div>
            <p className="time-text">Hours</p>
          </div>
          <div className="time-card">
            <div className="time-page">
              <p className="time-num">
                {String(time.minutes).padStart(2, "0")}
              </p>
              <div className="flip"></div>
            </div>
            <p className="time-text">Minutes</p>
          </div>
          <div className="time-card">
            <div className="time-page">
              <p className="time-num">
                {String(time.seconds).padStart(2, "0")}
              </p>
              <div className="flip"></div>
            </div>
            <p className="time-text">Seconds</p>
          </div>
        </section>
        <address className="flex items-center gap-6">
          <a
            href="#"
            className="hover:text-soft-red text-grayish-blue text-4xl"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a
            href="#"
            className="hover:text-soft-red text-grayish-blue text-4xl"
          >
            <ion-icon name="logo-pinterest"></ion-icon>
          </a>
          <a
            href="#"
            className="hover:text-soft-red text-grayish-blue text-4xl"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </address>
      </main>
    </>
  );
}

export default App;
