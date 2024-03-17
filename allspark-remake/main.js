const canvas = document.createElement("canvas")
const gl = canvas.getContext("webgl2")

document.title = "🤖";
document.body.innerHTML = "";
document.body.appendChild(canvas);
document.body.style = "margin: 0; touch-action: none; overflow: hidden;";
canvas.style.width = "100%";
canvas.style.height = "auto";
canvas.style.userSelect = "none";

const dpr = Math.max(2, .5 * window.devicePixelRatio)
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

const vertextSource = `#version 300 es
#ifder GL_FRAGMENT-PRECISION_HIGH
precision highp float;
#endif

in vec4 position;

void main(void) {
    gl_Position = position;
}
`


