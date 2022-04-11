import React from 'react';
import Canvas from './components/Canvas'; 
import "./styles.css";

function App() {

  // resize canvas in case screen has resizd, this way size can be specified exclusively with CSS
  function resizeCanvas(canvas){
    const { width, height} = canvas.getBoundingClientRect();

    if(canvas.width !== width || canvas.height !== height ) {
      canvas.width = width;
      canvas.height = height;
      return true;
    };

    return false;
  };



  const draw = (ctx, frameCount) => {
    // important canvas lifecycle stuff for each frame, resize and clear last drawing
    const cw = ctx.canvas.width;
    const ch = ctx.canvas.height;
    resizeCanvas(ctx.canvas);
    ctx.clearRect(0,0,cw,ch);

    // This bit sets what to be drawn, and we will use frameCount in order to calulate movement etc
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(50,100, 20*Math.sin(frameCount*0.025)**2,0,2*Math.PI);
    ctx.fill();
  };

  return (
    <Canvas draw={draw}/>
  );
}

export default App;
