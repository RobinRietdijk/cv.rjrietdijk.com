import { random, position, sizeRatio } from './utils'

export class Flare {
    constructor(ctx, color) {
        this.context = ctx
        this.x = random(-0.25, 1.25, true)
        this.y = random(-0.25, 1.25, true)
        this.z = random(0, 2)
        this.color = color
        this.opacity = random(0.001, 0.01, true)
        this.flareSizeMultiplier = 100
        this.flareSizeBase = 100
    }

    render(canvas, noiseStrength, nPos, mouse, motion) {
        var context = this.context
        var pos = position(this.x, this.y, this.z, canvas, noiseStrength, nPos, mouse, motion),
            r = ((this.z * this.flareSizeMultiplier) + this.flareSizeBase) * (sizeRatio(canvas) / 1000)

        context.beginPath()
        context.globalAlpha = this.opacity
        context.arc(pos.x, pos.y, r, 0, 2 * Math.PI, false)
        context.fillStyle = this.color
        context.fill()
        context.closePath()
        context.globalAlpha = 1
    }
}
