import React, { useState, useEffect } from 'react';
const Confetti = () => {
  const [animationActive, setAnimationActive] = useState(true);
  const makeItConfetti = () => {
    const confetti = document.querySelectorAll('.confetti');
    if (!confetti[0]?.animate) {
      return false;
    }
    const confettiPlayers = [];
    for (let i = 0, len = confetti.length; i < len; ++i) {
      const snowball = confetti[i];
      snowball.innerHTML = '<div class="rotate"><div class="askew"></div></div>';
      const scale = Math.random() * 0.8 + 0.2;
      const player = snowball.animate([
        { transform: `translate3d(${(i / len) * 100}vw, 0, 0) scale(${scale})`, opacity: scale },
        { transform: `translate3d(${(i / len) * 100 + 10}vw, 60px, 0) scale(${scale})`, opacity: 1 }
      ], {
        duration: Math.random() * 3000 + 3000,
        iterations: Infinity,
        delay: -(Math.random() * 5000)
      });
      confettiPlayers.push(player);
    }
  };
  useEffect(() => {
    makeItConfetti();
    const animationTimeout = setTimeout(() => {
      setAnimationActive(false);
    }, 10000);
    return () => clearTimeout(animationTimeout);
  }, []);
  return (
    <>
      <div id="top_most">
        <div id="confetti_setup">
          <div className={`pepul_launch ${animationActive ? 'scroll-lock' : ''}`}>
            <div id="confetti">
              {/* <p className="top_list"> "Thanks to the incredible team and all supporters. We have reached <span className="lakhs"><span className="counter" data-count="0">0</span> Downloads"</span> </p> */}
              <p className="top_list">  "Thanks to incredible team and all supporters. 🚆  We have reached 5K Downloads" </p>
            </div>
            <div className="confetti-land">
              {Array.from({ length: 100 }, (_, i) => (
                <div key={i} className="confetti"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Confetti;