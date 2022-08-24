 //escenario

const scene = new THREE.Scene()
scene.background = new THREE.Color(0xAD77FC);
var loader = new THREE.TextureLoader()
scene.fog = new THREE.Fog(0xffffff, 0.05, 50);
loader.load('../img/dona.jpg', function(Texture){
    scene.background = Texture

});

//camara

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrias
const geometry = new THREE.TorusGeometry( 7, 4, 11, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0xF20C94, side: THREE.DoubleSide } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );



camera.position.z = 40;
/* mera.position.x = 1;
camera.position.y = 1;
 */


//annimacion

function animate() {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;    
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate(); 
