import { useRef , useEffect } from 'react';

const useCanvas = (draw) => {

    const canvasRef = useRef(null);


    useEffect(() => {
        
        // set up canvas and frame counter variable
        const canvas = canvasRef.current;
        const ctx = canvas.getContext( '2d');
        let frameCount = 0;
        let animationFrameId;

        // Animation Loop, calls external draw method that is taken in to useCanvas hook
        const animate = () => {
            frameCount++;
            draw(ctx, frameCount);
            animationFrameId = window.requestAnimationFrame(animate);
        };
        animate();

        // Cancel on unmout
        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }

    }, [draw]);

    return canvasRef;

};

export default useCanvas;