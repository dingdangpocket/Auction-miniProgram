import { registerGLTFLoader } from '../loaders/gltf-loader'
import { OrbitControls } from '@/common/controls/OrbitControls.js'

export function glbModel(canvas, THREE) {
  registerGLTFLoader(THREE)
  var container, stats, clock, gui, mixer, actions, activeAction, previousAction;
  var camera, scene, renderer, model, face;
  var api = { state: 'Walking' };
  init();
  animate();
  function init() {
    camera = new THREE.PerspectiveCamera(30, canvas.width / canvas.height, 10, 100);
    camera.position.set(1, 0, 20);
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe0e0e0);
    // scene.fog = new THREE.Fog(0xe0e0e0, 20, 100);
    // clock = new THREE.Clock();
	
    // 灯光
    var light = new THREE.HemisphereLight(0xffffff, 0x444444);
    light.position.set(0, 20, 0);
    scene.add(light);
    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 20, 10);
    scene.add(light);
	
    // 地面
    // var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2000, 2000), new THREE.MeshPhongMaterial({ color:0x808080, depthWrite: false }));
    // mesh.rotation.x = - Math.PI / 2;
    // scene.add(mesh);
    // var grid = new THREE.GridHelper(200, 10, 0x000000, 0x000000);
    // grid.material.opacity = 0.2;
    // grid.material.transparent = true;
    // scene.add(grid);
	
    // 模型加载;
    var loader = new THREE.GLTFLoader();
    loader.load('https://10.10.10.27:8443/file/upload/collection/OBJ.glb', gltf=>{
      model = gltf.scene;
      scene.add(model);
	  console.log("model",model)
      console.log("name",scene)
	  var object=scene.getObjectByName("Root Scene");
	  console.log("模型",object)
	  object.position.x=0
	  object.position.y=-1.5
	  object.position.z=0
	  console.log(gltf.scene)
    }, undefined, function (e) {
      console.error(e);
    });
	// 模型加载;
	
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(wx.getSystemInfoSync().pixelRatio);
    renderer.setSize(canvas.width, canvas.height);
    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;
	
	// 模型控制
	const controls = new OrbitControls(camera, renderer.domElement);
	controls.enableZoom = true;
	controls.update();
  }

  function animate() {
    canvas.requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
}