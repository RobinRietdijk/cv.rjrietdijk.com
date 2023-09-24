export function random(min, max, float) {
    return float ?
        Math.random() * (max - min) + min :
        Math.floor(Math.random() * (max - min + 1)) + min;
}

export function position(x, y, z, canvas, noiseStrength, nPos, mouse, motion) {
    return {
        x: (x * canvas.width) + ((((canvas.width / 2) - mouse.x + ((nPos.x - 0.5) * noiseStrength)) * z) * motion),
        y: (y * canvas.height) + ((((canvas.height / 2) - mouse.y + ((nPos.y - 0.5) * noiseStrength)) * z) * motion)
    };
}

export function noisePoint(i, nAngle, nRad) {
    var a = nAngle * i,
        cosA = Math.cos(a),
        sinA = Math.sin(a),
        rad = nRad;
    return {
        x: rad * cosA,
        y: rad * sinA
    };
}

export function sizeRatio(canvas) {
    return canvas.width >= canvas.height ? canvas.width : canvas.height;
}
