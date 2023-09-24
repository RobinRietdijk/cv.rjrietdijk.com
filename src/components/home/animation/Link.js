import { random, position } from './utils'

export class Link {
    constructor(ctx, startVertex, numPoints, color, lineWidth) {
        this.context = ctx
        this.length = numPoints
        this.verts = [startVertex]
        this.stage = 0
        this.linked = [startVertex]
        this.distances = []
        this.traveled = 0
        this.fade = 0
        this.finished = false
        this.color = color
        this.linkSpeed = 1
        this.linkFade = 90
        this.linkOpacity = 0.25
        this.lineWidth = lineWidth
    }

    render(canvas, particles, noiseStrength, nPos, mouse, motion) {
        switch (this.stage) {
            case 0:
                var last = particles[this.verts[this.verts.length - 1]]
                if (last && last.neighbors && last.neighbors.length > 0) {
                    var neighbor = last.neighbors[random(0, last.neighbors.length - 1)]
                    if (this.verts.indexOf(neighbor) == -1) {
                        this.verts.push(neighbor)
                    }
                }
                else {
                    this.stage = 3
                    this.finished = true
                }

                if (this.verts.length >= this.length) {
                    for (var i = 0; i < this.verts.length - 1; i++) {
                        var p1 = particles[this.verts[i]],
                            p2 = particles[this.verts[i + 1]],
                            dx = p1.x - p2.x,
                            dy = p1.y - p2.y,
                            dist = Math.sqrt(dx * dx + dy * dy)

                        this.distances.push(dist)
                    }
                    this.stage = 1
                }
                break
            case 1:
                if (this.distances.length > 0) {

                    var points = []
                    for (var i = 0; i < this.linked.length; i++) {
                        var p = particles[this.linked[i]]
                        var pos = position(p.x, p.y, p.z, canvas, noiseStrength, nPos, mouse, motion)
                        points.push([pos.x, pos.y])
                    }

                    var linkSpeedRel = this.linkSpeed * 0.00001 * canvas.width
                    this.traveled += linkSpeedRel
                    var d = this.distances[this.linked.length - 1]
                    if (this.traveled >= d) {
                        this.traveled = 0
                        this.linked.push(this.verts[this.linked.length])
                        var p = particles[this.linked[this.linked.length - 1]]
                        var pos = position(p.x, p.y, p.z, canvas, noiseStrength, nPos, mouse, motion)
                        points.push([pos.x, pos.y])

                        if (this.linked.length >= this.verts.length) {
                            this.stage = 2
                        }
                    }
                    else {
                        var a = particles[this.linked[this.linked.length - 1]],
                            b = particles[this.verts[this.linked.length]],
                            t = d - this.traveled,
                            x = ((this.traveled * b.x) + (t * a.x)) / d,
                            y = ((this.traveled * b.y) + (t * a.y)) / d,
                            z = ((this.traveled * b.z) + (t * a.z)) / d

                        var pos = position(x, y, z, canvas, noiseStrength, nPos, mouse, motion)
                        points.push([pos.x, pos.y])
                    }

                    this.drawLine(points)
                }
                else {
                    this.stage = 3
                    this.finished = true
                }
                break

            case 2:
                if (this.verts.length > 1) {
                    if (this.fade < this.linkFade) {
                        this.fade++

                        var points = [];
                        var alpha = (1 - (this.fade / this.linkFade)) * this.linkOpacity
                        for (var i = 0; i < this.verts.length; i++) {
                            var p = particles[this.verts[i]]
                            var pos = position(p.x, p.y, p.z, canvas, noiseStrength, nPos, mouse, motion)
                            points.push([pos.x, pos.y])
                        }
                        this.drawLine(points, alpha)
                    }
                    else {
                        this.stage = 3
                        this.finished = true
                    }
                }
                else {
                    this.stage = 3
                    this.finished = true
                }
                break
            case 3:
            default:
                this.finished = true
                break
        }
    }
    
    drawLine(points, alpha) {
        var context = this.context
        if (typeof alpha !== 'number')
            alpha = this.linkOpacity

        if (points.length > 1 && alpha > 0) {
            context.globalAlpha = alpha
            context.beginPath()
            for (var i = 0; i < points.length - 1; i++) {
                context.moveTo(points[i][0], points[i][1])
                context.lineTo(points[i + 1][0], points[i + 1][1])
            }
            context.strokeStyle = this.color
            context.lineWidth = this.lineWidth
            context.stroke();
            context.closePath();
            context.globalAlpha = 1;
        }
    }
}
