import { useState, useEffect } from 'react';

interface IntroAnimationProps {
    onComplete: () => void;
}

const WORDS = [
    'Developer',
    'Mobile',
    'Backend',
    'Swift',
    'Java',
    'Thinker',
    'Creator',
    'Person'
];

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        if (!isAnimating) return;

        // Show each word for 180ms, then move to next
        const wordInterval = setInterval(() => {
            setCurrentWordIndex((prev) => {
                if (prev >= WORDS.length - 1) {
                    clearInterval(wordInterval);
                    // Start fade out after last word
                    setTimeout(() => {
                        setIsFadingOut(true);
                        // Complete animation after fade out
                        setTimeout(() => {
                            setIsAnimating(false);
                            onComplete();
                        }, 600);
                    }, 400);
                    return prev;
                }
                return prev + 1;
            });
        }, 180);

        return () => clearInterval(wordInterval);
    }, [isAnimating, onComplete]);

    if (!isAnimating && !isFadingOut) return null;

    return (
        <div
            className={`intro-overlay ${isFadingOut ? 'intro-fade-out' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
            }}
        >
            <span
                key={currentWordIndex}
                className="intro-word"
                style={{
                    color: '#ffffff',
                    fontSize: 'clamp(3rem, 12vw, 8rem)',
                    fontWeight: 700,
                    fontFamily: 'inherit',
                    letterSpacing: '-0.03em',
                    textTransform: 'uppercase',
                }}
            >
                {WORDS[currentWordIndex]}
            </span>
        </div>
    );
};

export default IntroAnimation;
