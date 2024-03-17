const canvas = document.createElement("canvas")
const gl = canvas.getContext("webgl2")

document.title = "🤖";
document.body.innerHTML = "";
document.body.appendChild(canvas);
document.body.style = "margin:0;touch-action:none;overflow:hidden;";
canvas.style.width = "100%";
canvas.style.height = "auto";
canvas.style.userSelect = "none";

const dpr = Math.max(1, .5*window.devicePixelRatio)
function resize() {
	const {
		innerWidth: width,
		innerHeight: height
	} = window

	canvas.width = width * dpr
	canvas.height = height * dpr

	gl.viewport(0, 0, width * dpr, height * dpr)
}

window.onresize = resize

const vertexSource = `#version 300 es
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#endif

in vec4 position;

void main(void) {
    gl_Position = position;
}
`

const fragmentSource = `#version 300 es
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
out vec4 O;
uniform vec2 resolution;
uniform float time;
uniform int pointerCount;
uniform vec2 touch;
#define mouse (touch/R)
#define P pointerCount
#define FC gl_FragCoord.xy
#define R resolution
#define T time
#define S smoothstep
#define N normalize
#define rot(a) mat2(cos(a-vec4(0,11,33,0)))
float vmax(vec3 v) { return max(max(v.x, v.y), v.z); }
float box(vec3 p, vec3 s) {
  vec3 d = abs(p)-s;
  return length(max(d,.0))+vmax(min(d,.0));
}
float mat = .0;
float map(vec3 p) {
    float d=5e5,
	room = -(length(p)-10.);
	d = min(d, box(p,vec3(1))-.025);
	d = min(d, room);
	if (d < room) mat = 1.;
	else mat = .0;
	return d;
}
vec3 norm(vec3 p) {
    float h=1e-3;
    vec2 k=vec2(-1,1);
	return N(
	k.xyy*map(p+k.xyy*h)+
	k.yxy*map(p+k.yxy*h)+
	k.yyx*map(p+k.yyx*h)+
	k.xxx*map(p+k.xxx*h)
	);
}
void cam(inout vec3 p) {
	if (P>0) {
	  p.yz*=rot(-mouse.y*6.3+3.14);
	  p.xz*=rot(3.14-mouse.x*6.3);
	} else {
	  float t = T*.2;
	  p.yz *= rot(-t*.5);
	  p.xz *= rot(t);
	}
}
float rnd(vec2 p) { return fract(sin(dot(p,vec2(12.9898,78.233)))*345678.); }
float noise(vec2 p ) { vec2 i=floor(p),f=fract(p),u=S(.0,1.,f),s=vec2(1,0); float a=rnd(i),b=rnd(i+s),c=rnd(i+s.yx),d=rnd(i+1.); return mix(mix(a,b,u.x),mix(c,d,u.x),u.y); }
float fbm(vec2 p) {
	float t=.0, a=1.;
	for (int i=0; i<5; i++) {
	    t+=a*noise(p);
		p*=2.;
		a*=.5;
	}
	return t;
}
vec3 palette(float t) { vec3 a=vec3(.2),b=vec3(.4),c=vec3(1),d=vec3(.12,.14,.16); return a+b*cos(6.3*(c*t*+d)); }
vec3 pattern(vec2 uv) { 
    vec2 p=uv;
	vec3 col=vec3(0);
	float d=1.;
	for (float i=.0; i<3.; i++) {
	    uv*=2.;
		d=fbm(uv*d);
		col+=palette(d+length(p)-T)*.5;
	}
	return col;
}
vec3 bg(vec3 p) {
  return mix(vec3(.5,.7,.9),vec3(.9,.7,.5),p.y*.5+.5);
}
void main() {
  vec2 uv = (FC-.5*R)/min(R.x,R.y);
  vec3 col = vec3(0),
  p=vec3(0,0,-6),
  rd=N(vec3(uv,1)),
  l=N(vec3(0,10,0));
  cam(p);
  cam(rd);
  const float steps=400., maxd=12.;
  for (float i=.0; i<steps; i++) {
    float d=map(p);
    if (d<1e-3) {
      vec3 n=norm(p),
	  r=reflect(rd,n),
	  bkg=bg(r);
	  float spec=max(.0,-r.y),
	  diff=max(.0,dot(l,n)*.5+.5);
	  n.xz=abs(n.xz);
	  col=mat == .0 ? mix(bkg,bg(r),1.-diff)*pow(spec,20.) : pattern(p.xy)*n.z+pattern(p.xz)*n.y+pattern(p.yz)*n.x;

	  break;
  }
  if (d>maxd) break;
  p+=rd*d;
  }
  O=vec4(col,1);
}
`

function compile(shader, source) {
	gl.shaderSource(shader, source)
	gl.compileShader(shader);

	if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.error(gl.getShaderInfoLog(shader))
	}
}

let program

function setup() {
	const vs = gl.createShader(gl.VERTEX_SHADER)
	const fs = gl.createShader(gl.FRAGMENT_SHADER)

	compile(vs, vertexSource)
	compile(fs, fragmentSource)

	program = gl.createProgram()

	gl.attachShader(program, vs)
	gl.attachShader(program, fs)
	gl.linkProgram(program)

	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		console.error(gl.getProgramInfoLog(program))
	}
}

let vertices, buffer

function init() {
	vertices = [
		-1.,-1., 1.,
		-1.,-1., 1.,
		-1., 1., 1.,
		-1., 1., 1.,
	]

	buffer = gl.createBuffer()

	gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)

	const position = gl.getAttribLocation(program, "position")

	gl.enableVertexAttribArray(position)
	gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)

	program.resolution = gl.getUniformLocation(program, "resolution")
	program.time = gl.getUniformLocation(program, "time")
	program.touch = gl.getUniformLocation(program, "touch")
	program.pointerCount = gl.getUniformLocation(program, "pointerCount")
}

const mouse = {
	x: 0, y: 0, touches: new Set(),
	update: function(x, y, pointerId) {
		this.x = x*dpr; this.y = canvas.height-y*dpr; this.touches.add(pointerId)
	},
	remove: function(pointerId) { this.touches.delete(pointerId) }
}

function loop(now) {
	gl.clearColor(0, 0, 0, 1)
	gl.clear(gl.COLOR_BUFFER_BIT)
	gl.useProgram(program)
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
	gl.uniform2f(program.resolution, canvas.width, canvas.height)
	gl.uniform1f(program.time, now*1e-3)
	gl.uniform2f(program.touch, mouse.x, mouse.y)
	gl.uniform1i(program.pointerCount, mouse.touches.size)
	gl.drawArrays(gl.TRIANGLES, 0, vertices.length * .5)
	requestAnimationFrame(loop)
}

setup()
init()
resize()
loop(0)

window.addEventListener("pointerdown", e => mouse.update(e.clientX, e.clientY, e.pointerId))
window.addEventListener("pointerup", e => mouse.remove(e.pointerId))
window.addEventListener("pointermove", e => {
	if (mouse.touches.has(e.pointerId))
		mouse.update(e.clientX, e.clientY, e.pointerId)
})
