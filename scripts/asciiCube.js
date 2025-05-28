let A = 0, B = 0;
const cubeWidth = 20;
const width = 160, height = 44;
const backgroundChar = ' ';
const distanceFromCam = 100;
const K1 = 40;
const incrementSpeed = 0.12;

const buffer = new Array(width * height);
const zBuffer = new Array(width * height);

const asciiOutput = document.createElement("pre");
asciiOutput.id = "ascii-cube";
document.body.appendChild(asciiOutput);

function calculateX(i, j, k) {
  return j * Math.sin(A) * Math.sin(B) * Math.cos(0) - k * Math.cos(A) * Math.sin(B) * Math.cos(0) +
         j * Math.cos(A) * Math.sin(0) + k * Math.sin(A) * Math.sin(0) + i * Math.cos(B) * Math.cos(0);
}

function calculateY(i, j, k) {
  return j * Math.cos(A) * Math.cos(0) + k * Math.sin(A) * Math.cos(0) -
         j * Math.sin(A) * Math.sin(B) * Math.sin(0) + k * Math.cos(A) * Math.sin(B) * Math.sin(0) -
         i * Math.cos(B) * Math.sin(0);
}

function calculateZ(i, j, k) {
  return k * Math.cos(A) * Math.cos(B) - j * Math.sin(A) * Math.cos(B) + i * Math.sin(B);
}

function calculateSurface(x, y, z, ch) {
  const calcX = calculateX(x, y, z);
  const calcY = calculateY(x, y, z);
  const calcZ = calculateZ(x, y, z);

  const ooz = 1 / (calcZ + distanceFromCam);
  const xp = Math.floor(width / 2 + K1 * ooz * calcX * 2);
  const yp = Math.floor(height / 2 + K1 * ooz * calcY);
  const idx = xp + yp * width;

  if (idx >= 0 && idx < width * height) {
    if (ooz > zBuffer[idx]) {
      zBuffer[idx] = ooz;
      buffer[idx] = ch;
    }
  }
}

function renderFrame() {
  buffer.fill(backgroundChar);
  zBuffer.fill(0);

  for (let cubeX = -cubeWidth; cubeX < cubeWidth; cubeX += incrementSpeed) {
    for (let cubeY = -cubeWidth; cubeY < cubeWidth; cubeY += incrementSpeed) {
      calculateSurface(cubeX, cubeY, -cubeWidth, '.');
      calculateSurface(cubeWidth, cubeY, cubeX, '$');
      calculateSurface(-cubeWidth, cubeY, -cubeX, '~');
      calculateSurface(-cubeX, cubeY, cubeWidth, '#');
      calculateSurface(cubeX, -cubeWidth, -cubeY, ';');
      calculateSurface(cubeX, cubeWidth, cubeY, '+');
    }
  }

  let output = '';
  for (let i = 0; i < buffer.length; i++) {
    output += i % width ? buffer[i] : '\n';
  }

  asciiOutput.textContent = output;
  A += 0.05;
  B += 0.05;

  requestAnimationFrame(renderFrame);
}

renderFrame();
