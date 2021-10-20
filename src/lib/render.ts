class Render {

  containerID: string;
  canvas: any;
  ctx: any;
  counter: number;

  constructor(container: string) {
    this.containerID = container;
  }

  // init rendering stuff
  public init() {
    this.counter = 0;
    this.canvas = document.createElement('canvas');
    document.getElementById(this.containerID).appendChild(this.canvas); // add Canvas element to container
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.render();

    window.onresize = (e) => {
      this.resize(e);
    }
  }


  render = () => {
    const v = Math.abs(Math.cos(this.counter/40));

    // clear canvas
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.strokeStyle = "rgb("+(v*255)+","+(v*255)+","+(v*255)+")";
    this.ctx.beginPath();
    this.ctx.moveTo(0,0);
    this.ctx.lineTo(this.canvas.width, this.canvas.height);
    this.ctx.moveTo(this.canvas.width,0);
    this.ctx.lineTo(0, this.canvas.height);
    this.ctx.closePath();
    this.ctx.stroke();

    this.ctx.strokeRect(1, 1, this.canvas.width-1, this.canvas.height-1);

    this.counter++;

    requestAnimationFrame(this.render);
  }


  // handle resize event
  resize(e: any) {
    console.log('resize', e);
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }


}


export default Render;