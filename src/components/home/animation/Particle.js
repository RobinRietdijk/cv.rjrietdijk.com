import { random, position, sizeRatio } from './utils'

export class Particle {
    constructor(ctx, color) {
        this.context = ctx
        this.x = random(-0.1, 1.1, true)
        this.y = random(-0.1, 1.1, true)
        this.z = random(0, 4)
        this.color = color
        this.opacity = random(0.1, 1, true)
        this.particleSizeMultiplier = 0.5
        this.particleSizeBase = 1
        this.flicker = true
        this.flickerValue = 0
        this.flickerSmoothing = 15
        this.renderParticleGlare = true
        this.glareOpacityMultiplier = 0.05
        this.glareAngle = -60
        this.neighbors = []
    }

    render(canvas, noiseStrength, nPos, mouse, motion) {
        var context = this.context
        var pos = position(this.x, this.y, this.z, canvas, noiseStrength, nPos, mouse, motion),
            r = ((this.z * this.particleSizeMultiplier) + this.particleSizeBase) * (sizeRatio(canvas) / 1000),
            o = this.opacity

        if (this.flicker) {
            var newVal = random(-0.5, 0.5, true)
            this.flickerValue += (newVal - this.flickerValue) / this.flickerSmoothing
            if (this.flickerValue > 0.5) this.flickerValue = 0.5
            if (this.flickerValue < -0.5) this.flickerValue = -0.5
            o += this.flickerValue
            if (o > 1) o = 1
            if (o < 0) o = 0
        }

        context.fillStyle = this.color
        context.globalAlpha = o
        context.beginPath()
        context.arc(pos.x, pos.y, r, 0, 2 * Math.PI, false)
        context.fill()
        context.closePath()

        if (this.renderParticleGlare) {
            context.globalAlpha = o * this.glareOpacityMultiplier
            context.ellipse(pos.x, pos.y, r * 100, r, (this.glareAngle - ((nPos.x - 0.5) * noiseStrength * motion)) * (Math.PI / 180), 0, 2 * Math.PI, false)
            context.fill()
            context.closePath()
        }

        context.globalAlpha = 1
    }
}
