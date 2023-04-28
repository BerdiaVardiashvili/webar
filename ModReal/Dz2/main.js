import * as THREE from 'three';
import { MindARThree } from 'mindar-image-three';

document.addEventListener("DOMContentLoaded", () => {
const start = async() => {
const mindarThree = new MindARThree({
container: document.body,
imageTargetSrc: "../../Foto/Berdia.mind",
});
const {renderer, scene, camera} = mindarThree;

var loader = new THREE.TextureLoader();

const geometry1 = new THREE.PlaneGeometry(1, 1);
const material1 = new THREE.MeshBasicMaterial({
color: 0x00ffff, transparent: true, opacity: 0.5, map: loader.load("../../Foto/Berdia.jpg")
});
const plane = new THREE.Mesh(geometry1, material1);
plane.position.x = 1;
plane.position.y = -0.75;

const geometry2 = new THREE.BoxGeometry( 1, 1, 1 );
const material2 = new THREE.MeshBasicMaterial({
color: 0x00ff00, transparent: true, map: loader.load("https://raw.githubusercontent.com/volverina/sr/main/assets/angry-face_1f620.png") 
});
const Cyb = new THREE.Mesh(geometry2, material2);
Cyb.position.x = -1.5;
Cyb.position.y = 1.5;

const geometry3 = new THREE.CircleGeometry( 0.5, 32 ); 
const material3 = new THREE.MeshBasicMaterial({
color: 0x0000ff, map: loader.load("https://i.imgur.com/8UNVyGK.png")
});
const Kryg = new THREE.Mesh(geometry3, material3);
Kryg.position.z = - 1;
Kryg.position.y = 0;

const anchor = mindarThree.addAnchor(0);


anchor.group.add(plane);
anchor.group.add(Cyb);
anchor.group.add(Kryg);

await mindarThree.start();
renderer.setAnimationLoop(() => {
renderer.render(scene, camera);
});


}
start();


});