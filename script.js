const card = document.querySelector('.card');

card.addEventListener('click', () => {
    card.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Basic GSAP animation
gsap.to(".box", { duration: 2, x: 300 });

// Basic ScrollMagic setup
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: "#trigger",
  duration: 300
})
.setTween("#animate", { opacity: 0 })
.addTo(controller);

// Basic Anime.js animation
anime({
    targets: '.square',
    translateX: 250,
    rotate: '1turn',
    duration: 800
  });

  // Basic Three.js setup
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

new Vivus('my-svg', { type: 'oneByOne', duration: 200 });
