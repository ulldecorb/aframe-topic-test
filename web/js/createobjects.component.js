AFRAME.registerComponent('create-objects', {
    init: function() {
        var scene = this.el;
        //var nextButton
    }     
});

AFRAME.registerComponent('test', {
    init: function () {
        let el = this.el;
        const black = new THREE.Color( '0x000000');
        const newColor1 = new THREE.Color( '0xff00ff');
        const newColor2 = new THREE.Color( '0x00ffff');
        const newColor3 = new THREE.Color( '0xffff00');
        const palete = [newColor1, newColor2, newColor3];


        el.object3D.scale.set(0.5, 0.5, 0.5);

        el.object3D.rotation.set(
            THREE.Math.degToRad(0),
            THREE.Math.degToRad(0),
            THREE.Math.degToRad(-90)
        );
        
        el.object3D.position.set(0, 1.60, -0.6);

        // el.object3D.geometry.color = palete[Math.floor(Math.random() * 3)];
        el.object3D.material.color.set(black);
        // el.setAttribute('rotate', {x:0, y:5, z:-1});
        // el.object3D.position.set(2, 1.6, -4.4);

        
        // el.object3D.rotation.x += Math.PI;
    }
  });

AFRAME.registerComponent('reveal-el', {
    init: function (){
        let el = this.el;
        setTimeout(() => {
            el.object3D.position.z =- 2;
        }, 1000);
    }
})






AFRAME.registerComponent('repeat-icon', {    // Aixó es un metode?
    schema: {
        color: {default: '#FFF'},
        size: {type: 'int', default: 5}  
    },
    init: function () {
        // let data = this.data;
        let el = this.el;

        const color1 = new THREE.Color();
        this.el.setAttribute('material', 'color', color1);

        //>>  GIRAR CAMERA AMB EL MOUSE  <<<
		
        // document.addEventListener( 'mousemove', onDocumentMouseMove );
        // function onDocumentMouseMove( event ) {

        //     mouseX = ( event.clientX - windowHalfX ) / 100;
        //     mouseY = ( event.clientY - windowHalfY ) / 100;

        // }

        //>>  CLONAR ENTITAT  <<<

        // const container = new THREE.Object3D(); 
        // entity.setObject3D('container', container); 
        // container.add(clone);
    }
});

// AFRAME.registerComponent('handler-click', {
//     events: {
//       click: function (evt) {
//         console.log('This entity was clicked!');
//         this.el.setAttribute('material', 'color', 'red');
//       }
//     }
//   });

// AFRAME.registerComponent('handler-colision', {
//     schema: {
//         color: {default: '#FFF'},
//         size: {type: 'int', default: 5}  
//     },
//     init: function() {
//         var scene = this.el;
//         //var nextButton
//     }     
// });
 