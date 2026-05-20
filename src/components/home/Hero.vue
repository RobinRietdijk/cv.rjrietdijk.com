<template>
    <section class="hero">
        <div class="hero-img" />

        <div class="hero-overlay" />

        <div class="hero-content">
            <p class="hero-greeting">Hello, I'm</p>
            <h1 class="hero-name">Robin Rietdijk</h1>
            <div class="hero-divider" />
            <h2 class="hero-role">Software Engineer</h2>
            <p class="hero-meta">CS&amp;E Graduate &bull; Delft, Netherlands</p>
        </div>

        <button class="scroll-btn" @click="scrollDown" aria-label="Scroll to content">
            <svg viewBox="0 0 24 24" fill="none">
                <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>

    </section>
</template>

<script>
export default {
    name: 'Hero',
    methods: {
        scrollDown() {
            const target = document.getElementById('about')
            if (!target) return
            const start = window.scrollY
            const end = target.getBoundingClientRect().top + window.scrollY
            const duration = 1400
            const startTime = performance.now()
            const ease = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
            const step = now => {
                const p = Math.min((now - startTime) / duration, 1)
                window.scrollTo(0, start + (end - start) * ease(p))
                if (p < 1) requestAnimationFrame(step)
            }
            requestAnimationFrame(step)
        }
    }
}
</script>

<style scoped>
.hero {
    position: relative;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-img {
    position: absolute;
    inset: 0;
    background-image: url('@/assets/hero.jpg');
    background-size: cover;
    background-position: center;
    z-index: 0;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.38);
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.hero-greeting {
    font-size: 0.8rem;
    letter-spacing: 0.38em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.55);
    margin: 0 0 18px 0;
    font-weight: 300;
}

.hero-name {
    font-size: clamp(2.8rem, 8vw, 6rem);
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin: 0;
    line-height: 1;
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.hero-divider {
    width: 200px;
    height: 2px;
    background: linear-gradient(to right, transparent, #15738f, transparent);
    margin: 26px auto;
}

.hero-role {
    font-size: clamp(0.9rem, 2vw, 1.3rem);
    font-weight: 300;
    color: #7ed8e8;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    margin: 0;
}

.hero-meta {
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.45);
    margin: 18px 0 0 0;
    letter-spacing: 0.12em;
    font-weight: 300;
}

.scroll-btn {
    position: absolute;
    bottom: 15vh;
    z-index: 20;
    background: transparent;
    border: 1.5px solid rgba(255, 255, 255, 0.55);
    border-radius: 50%;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    transition: border-color 0.3s ease, background 0.3s ease;
    animation: bob 2.5s ease-in-out infinite;
    outline: none;
}

.scroll-btn:hover {
    border-color: rgba(255, 255, 255, 0.95);
    background: rgba(255, 255, 255, 0.1);
}

.scroll-btn svg { width: 26px; height: 26px; }

@keyframes bob {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(9px); }
}

</style>
