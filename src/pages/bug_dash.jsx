import { useEffect, useRef, useState } from 'react';

const codeLines = [
    ["let", "score", "=", "0"],
    ["if", "(", "fixed", ")"],
    ["print", "(", "'yay!'", ")"],
    ["for", "(", "i", "<", "5", ")"],
]

const colors = {
  pink: '#F273C4',
  blue: '#4A5CF0',
  orange: '#E8432C',
  yellow: '#FFC94A',
  dark: '#1B1B45',
};

const HIGH_SCORE_KEY = 'bugdash-highscore';

export default function BugDash() {
  const canvasRef = useRef(null);
  const highScoreRef = useRef(0);
  const [displayScore, setDisplayScore] = useState(0);
  const [buildingText, setBuildingText] = useState('Building: _');
  const [gameOver, setGameOver] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isNewHighScore, setIsNewHighScore] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    try {
      const saved = Number(localStorage.getItem(HIGH_SCORE_KEY)) || 0;
      highScoreRef.current = saved;
      setHighScore(saved);
    } catch {
      // localStorage unavailable — high score just won't persist
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const groundY = 170;

    let player, bugs, tokens, speed, score, isJumping, velocityY, gravity, running;
    let bugTimer, tokenTimer, lineIndex, tokenIndex, animationId;

    const currentLine = () => codeLines[lineIndex % codeLines.length];

    const updateBuildingText = () => {
      const line = currentLine();
      const built = line.slice(0, tokenIndex).join(' ');
      setBuildingText('Building: ' + built + (tokenIndex < line.length ? ' _' : ''));
    };

    const reset = () => {
      player = { x: 60, y: groundY - 40, w: 34, h: 40 };
      bugs = [];
      tokens = [];
      speed = 4.5;
      score = 0;
      isJumping = false;
      velocityY = 0;
      gravity = 0.9;
      running = true;
      bugTimer = 60;
      tokenTimer = 40;
      lineIndex = 0;
      tokenIndex = 0;
      setGameOver(false);
      setIsNewHighScore(false);
      updateBuildingText();
    };

    const jump = () => {
      if (!isJumping && running) {
        isJumping = true;
        velocityY = -14;
      }
    };

    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        jump();
      }
    };
    const handlePointerDown = (e) => {
      e.preventDefault();
      jump();
    };

    document.addEventListener('keydown', handleKeyDown);
    canvas.addEventListener('mousedown', handlePointerDown);
    canvas.addEventListener('touchstart', handlePointerDown);

    const drawPlayer = () => {
      ctx.fillStyle = colors.pink;
      ctx.beginPath();
      ctx.roundRect(player.x, player.y, player.w, player.h - 12, 8);
      ctx.fill();
      ctx.fillStyle = '#FFD8B0';
      ctx.beginPath();
      ctx.roundRect(player.x + 4, player.y - 20, player.w - 8, 22, 8);
      ctx.fill();
      ctx.fillStyle = colors.dark;
      ctx.beginPath();
      ctx.arc(player.x + 13, player.y - 10, 2.5, 0, 7);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(player.x + 22, player.y - 10, 2.5, 0, 7);
      ctx.fill();
    };

    const drawBug = (o) => {
      ctx.fillStyle = colors.orange;
      ctx.beginPath();
      ctx.ellipse(o.x + o.w / 2, o.y + o.h / 2, o.w / 2, o.h / 2, 0, 0, 7);
      ctx.fill();
      ctx.strokeStyle = colors.dark;
      ctx.lineWidth = 2;
      for (let i = 0; i < 3; i++) {
        const ly = o.y + 6 + i * 7;
        ctx.beginPath();
        ctx.moveTo(o.x - 4, ly);
        ctx.lineTo(o.x + 3, ly);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(o.x + o.w - 3, ly);
        ctx.lineTo(o.x + o.w + 4, ly);
        ctx.stroke();
      }
    };

    const drawToken = (o) => {
      ctx.fillStyle = colors.blue;
      ctx.beginPath();
      ctx.roundRect(o.x, o.y, o.w, o.h, 6);
      ctx.fill();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 13px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(o.text, o.x + o.w / 2, o.y + o.h / 2 + 4);
    };

    const spawnToken = () => {
      const line = currentLine();
      const text = line[tokenIndex];
      const w = Math.max(34, text.length * 10 + 12);
      tokens.push({ x: canvas.width, y: groundY - 100, w, h: 26, text });
    };

    const update = () => {
      if (!running) return;

      if (isJumping) {
        player.y += velocityY;
        velocityY += gravity;
        if (player.y >= groundY - 40) {
          player.y = groundY - 40;
          isJumping = false;
          velocityY = 0;
        }
      }

      bugTimer--;
      if (bugTimer <= 0) {
        const h = 22 + Math.random() * 10;
        bugs.push({ x: canvas.width, y: groundY - h, w: 26, h });
        bugTimer = 75 + Math.random() * 50;
      }

      tokenTimer--;
      if (tokenTimer <= 0 && tokens.length === 0) {
        spawnToken();
        tokenTimer = 200;
      }

      bugs.forEach((o) => (o.x -= speed));
      bugs = bugs.filter((o) => o.x + o.w > 0);
      tokens.forEach((o) => (o.x -= speed));
      const missed = tokens.some((o) => o.x + o.w <= 0);
      tokens = tokens.filter((o) => o.x + o.w > 0);
      if (missed) tokenTimer = 20;

      for (const o of bugs) {
        if (
          player.x < o.x + o.w - 6 &&
          player.x + player.w - 6 > o.x &&
          player.y + (player.h - 12) > o.y + 6 &&
          player.y < o.y + o.h - 4
        ) {
          running = false;
          const finalScoreValue = Math.floor(score);
          setFinalScore(finalScoreValue);
          if (finalScoreValue > highScoreRef.current) {
            highScoreRef.current = finalScoreValue;
            setHighScore(finalScoreValue);
            setIsNewHighScore(true);
            try {
              localStorage.setItem(HIGH_SCORE_KEY, String(finalScoreValue));
            } catch {
              // localStorage unavailable — high score just won't persist
            }
          }
          setGameOver(true);
        }
      }

      tokens = tokens.filter((o) => {
        const hit =
          player.x < o.x + o.w &&
          player.x + player.w > o.x &&
          player.y < o.y + o.h &&
          player.y + player.h > o.y;
        if (hit) {
          score += 15;
          tokenIndex++;
          updateBuildingText();
          if (tokenIndex >= currentLine().length) {
            score += 50;
            lineIndex++;
            tokenIndex = 0;
            updateBuildingText();
          }
          tokenTimer = 40;
          return false;
        }
        return true;
      });

      score += 0.15;
      speed += 0.0012;
      setDisplayScore(Math.floor(score));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = colors.dark;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(canvas.width, groundY);
      ctx.stroke();
      drawPlayer();
      bugs.forEach(drawBug);
      tokens.forEach(drawToken);
    };

    const loop = () => {
      update();
      draw();
      if (running) animationId = requestAnimationFrame(loop);
    };

    reset();
    loop();

    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener('keydown', handleKeyDown);
      canvas.removeEventListener('mousedown', handlePointerDown);
      canvas.removeEventListener('touchstart', handlePointerDown);
    };
  }, [resetKey]);

  return (
    <div className="bugdash-wrap">
      <h2 className="bugdash-heading">Tiny Tumble</h2>
      <p className="bugdash-sub"></p>
      <div className="bugdash-game">
        <canvas ref={canvasRef} width={600} height={220} />
        <div className="bugdash-score">{displayScore}</div>
        <div className="bugdash-highscore">Best: {highScore}</div>
        <div className="bugdash-hint">SPACE to jump</div>
        <div className="bugdash-codeline">{buildingText}</div>
        {gameOver && (
          <div className="bugdash-overlay">
            <div className="bugdash-overtitle">Game over</div>
            <div className="bugdash-overscore">Score: {finalScore}</div>
            <div className="bugdash-overscore">Best: {highScore}</div>
            {isNewHighScore && <div className="bugdash-newhigh">New high score!</div>}
            <button className="bugdash-restart" onClick={() => setResetKey((k) => k + 1)}>
              Play again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}