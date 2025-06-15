document.addEventListener('DOMContentLoaded', () => {
  const bodies = [
    { name: 'Mercury', color: '#A0522D', size: 10, orbitRadius: 70, revolution: 0.24, rotation: 58.6 },
    { name: 'Venus', color: '#DEB887', size: 15, orbitRadius: 100, revolution: 0.62, rotation: 243 },
    { name: 'Earth', color: '#4169E1', size: 16, orbitRadius: 140, revolution: 1, rotation: 1, moons: [
        { name: 'Moon', color: '#D3D3D3', size: 1, orbitRadius: 1, revolution: 2.73 }
    ]},
    { name: 'Mars', color: '#CD5C5C', size: 12, orbitRadius: 180, revolution: 1.88, rotation: 1.03 },
    { name: 'Jupiter', color: '#DAA520', size: 35, orbitRadius: 250, revolution: 11.86, rotation: 0.41 },
    { name: 'Saturn', color: '#F4A460', size: 30, orbitRadius: 320, revolution: 29.46, rotation: 0.45 },
    { name: 'Uranus', color: '#87CEEB', size: 25, orbitRadius: 380, revolution: 84.01, rotation: 0.72 },
    { name: 'Neptune', color: '#4682B4', size: 24, orbitRadius: 440, revolution: 164.8, rotation: 0.67 },
    { name: 'Pluto', color: '#A9A9A9', size: 8, orbitRadius: 480, revolution: 248.6, rotation: 6.39 }
  ];

  const orbits = document.querySelector('.orbits');
  const celestialBodies = document.querySelector('.celestial-bodies');
  const asteroidBelt = document.querySelector('.asteroid-belt');

  // Asteroid belt
  asteroidBelt.style.width = `600px`;
  asteroidBelt.style.height = `600px`;

  bodies.forEach(body => {
    // Orbit ring
    const orbit = document.createElement('div');
    orbit.className = 'orbit';
    orbit.style.width = `${body.orbitRadius * 2}px`;
    orbit.style.height = `${body.orbitRadius * 2}px`;
    orbits.appendChild(orbit);

    // Orbit container
    const container = document.createElement('div');
    container.className = 'orbit-container';
    container.style.setProperty('--radius', `${body.orbitRadius}px`);
    container.style.animation = `revolution ${body.revolution * 10}s linear infinite`;
    celestialBodies.appendChild(container);

    // Planet
    const planet = document.createElement('div');
    planet.className = 'celestial-body';
    planet.style.width = `${body.size}px`;
    planet.style.height = `${body.size}px`;
    planet.style.background = body.color;
    planet.style.left = `calc(50% - ${body.size / 2}px)`;
    planet.style.top = `calc(50% - ${body.size / 2}px)`;
    planet.style.transform = `translateX(${body.orbitRadius}px)`;
    planet.style.animation = `rotation ${body.rotation * 2}s linear infinite`;
    container.appendChild(planet);

    // Moons
    if (body.moons) {
      body.moons.forEach(moon => {
        const moonContainer = document.createElement('div');
        moonContainer.className = 'moon-container';
        moonContainer.style.position = 'absolute'; // Important
        moonContainer.style.width = `${moon.orbitRadius * 1}px`;
        moonContainer.style.height = `${moon.orbitRadius * 1}px`;
        moonContainer.style.left = `calc(50% - ${moon.orbitRadius*1}px)`;
        moonContainer.style.top = `calc(50% - ${moon.orbitRadius*1}px)`;
        moonContainer.style.animation = `revolution ${moon.revolution * 2}s linear infinite`;
        planet.appendChild(moonContainer);

        const moonElement = document.createElement('div');
        moonElement.className = 'celestial-body';
        moonElement.style.width = `${moon.size}px`;
        moonElement.style.height = `${moon.size}px`;
        moonElement.style.backgroundColor = moon.color;
        moonElement.style.left = `calc(50% - ${moon.size / 2}px)`;
        moonElement.style.top = `calc(50% - ${moon.size / 2}px)`;
        moonElement.style.transform = `translateX(${moon.orbitRadius*1}px)`; 
        moonContainer.appendChild(moonElement);
      });
    }
  });

  // Stars
  for (let i = 0; i < 150; i++) {
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.width = `${Math.random() * 2}px`;
    star.style.height = star.style.width;
    star.style.backgroundColor = '#fff';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.borderRadius = '50%';
    star.style.opacity = Math.random();
    star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out`;
    document.body.appendChild(star);
  }
});
