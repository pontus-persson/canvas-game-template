class Render {

  containerID: string;
  canvas: any;
  ctx: any;

  constructor(container) {
    console.log('constructing render');
    this.containerID = container;
  }

  // init rendering stuff
  public init() {
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
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.strokeStyle = "rgb("+(Math.random()*255)+","+(Math.random()*255)+","+(Math.random()*255)+")";
    this.ctx.beginPath();
    this.ctx.moveTo(0,0);
    this.ctx.lineTo(this.canvas.width, this.canvas.height);
    this.ctx.moveTo(this.canvas.width,0);
    this.ctx.lineTo(0, this.canvas.height);
    this.ctx.closePath();
    this.ctx.stroke();

    this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);


    requestAnimationFrame(this.render);
  }


  // handle resize event
  resize(e) {
    console.log('resize', e);
  }


}


export default Render;