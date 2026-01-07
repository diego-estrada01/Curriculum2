document.querySelectorAll('.glass').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15), rgba(255,255,255,0.05))`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(255,255,255,0.08)';
    });
});
