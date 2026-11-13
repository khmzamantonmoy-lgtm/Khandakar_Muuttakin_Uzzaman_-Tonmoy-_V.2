(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('tonmoy-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;
  const updateThemeLabel = () => {
    if (!themeToggle) return;
    const light = root.dataset.theme === 'light';
    themeToggle.setAttribute('aria-pressed', String(light));
    const label = themeToggle.querySelector('.theme-label');
    if (label) label.textContent = light ? 'Dark mode' : 'Light mode';
    const icon = themeToggle.querySelector('.theme-icon');
    if (icon) icon.textContent = light ? '☼' : '◐';
  };
  updateThemeLabel();
  themeToggle?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('tonmoy-theme', root.dataset.theme);
    updateThemeLabel();
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  menuToggle?.addEventListener('click', () => {
    const open = navMenu.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  navMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }));

  const revealItems = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .12 });
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add('is-visible'));

  const filterButtons = document.querySelectorAll('[data-filter]');
  const caseCards = document.querySelectorAll('[data-tags]');
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle('active', item === button));
    caseCards.forEach(card => {
      const visible = filter === 'all' || card.dataset.tags.split(' ').includes(filter);
      card.hidden = !visible;
    });
  }));

  const form = document.querySelector('#contactForm');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('Portfolio conversation with Tonmoy');
    const body = encodeURIComponent('Name: ' + data.get('name') + '\nEmail: ' + data.get('email') + '\n\n' + data.get('message'));
    window.location.href = 'mailto:khmzaman26@gmail.com?subject=' + subject + '&body=' + body;
  });

  document.querySelectorAll('[data-year]').forEach(node => { node.textContent = new Date().getFullYear(); });
  // 3D presentation is rendered with Three.js/WebGL, not CSS geometry.
  const heroCanvas = document.querySelector('#hero-3d');
  if (heroCanvas) {
    import('https://cdn.jsdelivr.net/npm/three@0.181.2/build/three.module.js')
      .then(THREE => {
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
        camera.position.set(0, 0.35, 7.2);
        const renderer = new THREE.WebGLRenderer({ canvas: heroCanvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.15;

        const trophy = new THREE.Group();
        scene.add(trophy);

        const gold = new THREE.MeshPhysicalMaterial({ color: 0xf5c96a, metalness: .78, roughness: .2, clearcoat: 1, clearcoatRoughness: .12 });
        const blue = new THREE.MeshPhysicalMaterial({ color: 0x60a5fa, metalness: .62, roughness: .2, emissive: 0x102d64, emissiveIntensity: .35 });
        const violet = new THREE.MeshPhysicalMaterial({ color: 0x8b5cf6, metalness: .48, roughness: .22, emissive: 0x24104d, emissiveIntensity: .4 });
        const pink = new THREE.MeshPhysicalMaterial({ color: 0xf472b6, metalness: .45, roughness: .2, emissive: 0x4a1239, emissiveIntensity: .35 });
        const dark = new THREE.MeshStandardMaterial({ color: 0x0b1730, metalness: .8, roughness: .26 });

        const cupProfile = [
          new THREE.Vector2(.78, 1.18), new THREE.Vector2(.84, .98), new THREE.Vector2(.72, .48),
          new THREE.Vector2(.48, .1), new THREE.Vector2(.16, -.08), new THREE.Vector2(.08, -.2)
        ];
        const cup = new THREE.Mesh(new THREE.LatheGeometry(cupProfile, 64), gold);
        cup.scale.set(1, 1.02, 1);
        trophy.add(cup);

        const rim = new THREE.Mesh(new THREE.TorusGeometry(.8, .075, 18, 64), pink);
        rim.position.y = 1.18;
        trophy.add(rim);

        const handleGeo = new THREE.TorusGeometry(.66, .09, 18, 48, Math.PI * 1.4);
        const handleL = new THREE.Mesh(handleGeo, blue);
        handleL.position.set(-.78, .72, 0);
        handleL.rotation.z = Math.PI * .5;
        trophy.add(handleL);
        const handleR = new THREE.Mesh(handleGeo, blue);
        handleR.position.set(.78, .72, 0);
        handleR.rotation.z = -Math.PI * .5;
        trophy.add(handleR);

        const stem = new THREE.Mesh(new THREE.CylinderGeometry(.12, .2, .7, 32), violet);
        stem.position.y = -.62;
        trophy.add(stem);
        const collar = new THREE.Mesh(new THREE.CylinderGeometry(.28, .28, .12, 32), gold);
        collar.position.y = -.27;
        trophy.add(collar);
        const base = new THREE.Mesh(new THREE.CylinderGeometry(.8, .92, .34, 6), dark);
        base.position.y = -1.03;
        trophy.add(base);
        const baseGlow = new THREE.Mesh(new THREE.CylinderGeometry(.72, .72, .04, 6), gold);
        baseGlow.position.y = -.84;
        trophy.add(baseGlow);

        const starShape = new THREE.Shape();
        for (let i = 0; i < 10; i++) {
          const angle = (i / 10) * Math.PI * 2 - Math.PI / 2;
          const radius = i % 2 === 0 ? .34 : .14;
          const px = Math.cos(angle) * radius;
          const py = Math.sin(angle) * radius;
          if (i === 0) starShape.moveTo(px, py); else starShape.lineTo(px, py);
        }
        starShape.closePath();
        const star = new THREE.Mesh(new THREE.ExtrudeGeometry(starShape, { depth: .08, bevelEnabled: true, bevelSize: .03, bevelThickness: .02 }), pink);
        star.position.set(0, .58, .78);
        star.rotation.x = 0;
        trophy.add(star);

        const particleCount = 180;
        const particlePositions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
          const radius = 2.1 + Math.random() * 1.6;
          const angle = Math.random() * Math.PI * 2;
          particlePositions[i * 3] = Math.cos(angle) * radius;
          particlePositions[i * 3 + 1] = (Math.random() - .5) * 3.2;
          particlePositions[i * 3 + 2] = (Math.random() - .5) * 1.8;
        }
        const particles = new THREE.Points(
          new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(particlePositions, 3)),
          new THREE.PointsMaterial({ color: 0xf5c96a, size: .035, transparent: true, opacity: .85 })
        );
        scene.add(particles);

        scene.add(new THREE.HemisphereLight(0xbad7ff, 0x090d20, 2.1));
        const key = new THREE.DirectionalLight(0xffe6a6, 3.4); key.position.set(-3, 4, 4); scene.add(key);
        const rimLight = new THREE.PointLight(0x22d3ee, 22, 10); rimLight.position.set(2, .6, 2.6); scene.add(rimLight);
        const magentaLight = new THREE.PointLight(0xf472b6, 16, 8); magentaLight.position.set(-2, -.4, 1.4); scene.add(magentaLight);

        let targetX = 0, targetY = 0;
        heroCanvas.addEventListener('pointermove', event => {
          const rect = heroCanvas.getBoundingClientRect();
          targetX = ((event.clientX - rect.left) / rect.width - .5) * .65;
          targetY = ((event.clientY - rect.top) / rect.height - .5) * .35;
        });
        heroCanvas.addEventListener('pointerleave', () => { targetX = 0; targetY = 0; });

        const resize = () => {
          const rect = heroCanvas.getBoundingClientRect();
          const width = Math.max(1, rect.width);
          const height = Math.max(1, rect.height);
          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', resize, { passive: true });
        resize();
        document.querySelector('.hero-canvas-fallback')?.remove();

        const clock = new THREE.Clock();
        const render = () => {
          const elapsed = clock.getElapsedTime();
          trophy.rotation.y += ((targetX + (reducedMotion ? 0 : Math.sin(elapsed * .45) * .16)) - trophy.rotation.y) * .045;
          trophy.rotation.x += ((targetY * .45) - trophy.rotation.x) * .045;
          if (!reducedMotion) { trophy.position.y = Math.sin(elapsed * 1.1) * .08; particles.rotation.y = elapsed * .035; }
          renderer.render(scene, camera);
          requestAnimationFrame(render);
        };
        render();
      })
      .catch(() => {
        heroCanvas.setAttribute('data-fallback', 'true');
      });
  }

})();