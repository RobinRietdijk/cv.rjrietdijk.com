<template>
    <div class="anim-wrap">
        <canvas id="anim" ref="anim" />
    </div>
</template>

<script>
import { Particle } from '@/components/home/animation/Particle.js'
import { Flare } from '@/components/home/animation/Flare.js'
import { Link } from '@/components/home/animation/Link.js'
import { noisePoint, position, random } from '@/components/home/animation/utils.js'
import Delaunay from "delaunay-fast";

export default {
    data: () => ({
        particleCount: 40,
        flareCount: 15,
        color: '#ffffff',
        c: 1000,
        blurSize: 0,
        mouse: { x: 0, y: 0 },
        motion: 0.05,
        linkChance: 75,
        linkLengthMin: 5,
        linkLengthMax: 7,
        debug: false,

        noiseLength: 1000,
        noiseStrength: 1,
        n: 0,
        nAngle: (Math.PI * 2) / 1000,
        nRad: 100,
        nPos: { x: 0, y: 0 },

        particles: [],
        points: [],
        triangles: [],
        vertices: [],
        flares: [],
        links: [],
        provider: {
            context: null,
            canvas: null,
        },
    }),

    provide() {
        return {
            provider: this.provider,
        };
    },

    mounted() {
        this.provider.context = this.$refs["anim"].getContext("2d")
        this.provider.canvas = this.$refs["anim"]
        this.init()
    },

    beforeUnmount() {
        this._destroyed = true
    },

    methods: {
        init() {
            window.requestAnimFrame = (function () {
                return (
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    function (callback) { window.setTimeout(callback, 1000 / 60) }
                )
            })()

            this.resize()

            this.mouse.x = this.provider.canvas.clientWidth / 2
            this.mouse.y = this.provider.canvas.clientHeight / 2

            for (var i = 0; i < this.particleCount; i++) {
                var p = new Particle(this.provider.context, this.color)
                this.particles.push(p)
                this.points.push([p.x * this.c, p.y * this.c])
            }

            this.vertices = Delaunay.triangulate(this.points)
            var tri = []
            for (var i = 0; i < this.vertices.length; i++) {
                if (tri.length == 3) {
                    this.triangles.push(tri)
                    tri = []
                }
                tri.push(this.vertices[i])
            }

            for (var i = 0; i < this.particles.length; i++) {
                for (var j = 0; j < this.triangles.length; j++) {
                    var k = this.triangles[j].indexOf(i)
                    if (k !== -1) {
                        this.triangles[j].forEach((value) => {
                            if (value !== i && this.particles[i].neighbors.indexOf(value) == -1) {
                                this.particles[i].neighbors.push(value)
                            }
                        })
                    }
                }
            }

            for (var i = 0; i < this.flareCount; i++) {
                this.flares.push(new Flare(this.provider.context, this.color))
            }

            if ('ontouchstart' in document.documentElement && window.DeviceOrientationEvent) {
                window.addEventListener('deviceorientation', (e) => {
                    this.mouse.x = (this.provider.canvas.clientWidth / 2) - ((e.gamma / 90) * (this.provider.canvas.clientWidth / 2) * 2)
                    this.mouse.y = (this.provider.canvas.clientHeight / 2) - ((e.beta / 90) * (this.provider.canvas.clientHeight / 2) * 2)
                }, true)
            } else {
                document.body.addEventListener('mousemove', (e) => {
                    this.mouse.x = e.clientX
                    this.mouse.y = e.clientY
                })
            }

            const animloop = () => {
                if (this._destroyed) return
                requestAnimFrame(animloop)
                this.resize()   // guarded — only resets canvas when size actually changed
                this.render()
            }
            animloop()
        },

        render() {
            var canvas = this.provider.canvas
            var context = this.provider.context

            this.n++
            if (this.n >= this.noiseLength) this.n = 0
            this.nPos = noisePoint(this.n, this.nAngle, this.nRad)

            context.clearRect(0, 0, canvas.width, canvas.height)

            if (this.blurSize > 0) {
                context.shadowBlur = this.blurSize
                context.shadowColor = this.color
            }

            for (var i = 0; i < this.particleCount; i++) {
                this.particles[i].render(canvas, this.noiseStrength, this.nPos, this.mouse, this.motion)
            }

            if (random(0, this.linkChance) === this.linkChance) {
                var length = random(this.linkLengthMin, this.linkLengthMax)
                var start = random(0, this.particles.length - 1)
                this.startLink(start, length)
            }

            // splice (not delete) so the array never accumulates undefined slots
            for (var l = this.links.length - 1; l >= 0; l--) {
                if (this.links[l] && !this.links[l].finished) {
                    this.links[l].render(canvas, this.particles, this.noiseStrength, this.nPos, this.mouse, this.motion)
                } else {
                    this.links.splice(l, 1)
                }
            }

            for (var j = 0; j < this.flareCount; j++) {
                this.flares[j].render(canvas, this.noiseStrength, this.nPos, this.mouse, this.motion)
            }
        },

        // Guarded: only resets canvas bitmap when dimensions actually change.
        // Setting canvas.width/height resets the whole bitmap even for the same value —
        // calling it every frame at 60 fps was the main source of lag.
        resize() {
            const dpr = window.devicePixelRatio || 1
            const w = Math.round(window.innerWidth * dpr)
            const h = Math.round(window.innerHeight * dpr)
            if (this.provider.canvas.width !== w)  this.provider.canvas.width  = w
            if (this.provider.canvas.height !== h) this.provider.canvas.height = h
        },

        startLink(vertex, length) {
            this.links.push(new Link(this.provider.context, vertex, length, this.color, this.lineWidth))
        }
    },
}
</script>

<style scoped>
.anim-wrap {
    background: radial-gradient(ellipse at center, #0d2535 0%, #040e16 100%);
    width: 100%;
    max-width: 100%;
}

#anim {
    display: block;
    position: relative;
    width: 100%;
    max-width: 100%;
    height: 100vh;
    z-index: 1;
}
</style>
