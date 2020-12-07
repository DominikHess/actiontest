export default function sketch(s) {
  let x, y, backgroundColor;
  let teapot;

  const width = 500;
  const height = 500;

  s.preload = () => {
    teapot = s.loadModel('./assets/chair2.obj', true);
  }

  s.setup = () => {
    s.createCanvas(width, height, s.WEBGL);
    s.angleMode(s.DEGREES)
  };

  s.draw = () => {
    s.background(200);
    s.rotateX(-180);
    s.rotateY(s.frameCount * -0.1);
//    s.rotateY(s.mouseX * -0.5);
    s.normalMaterial(); // For effect
    s.model(teapot);
  };
    
}
