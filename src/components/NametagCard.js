import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Physics, RigidBody, useRopeJoint } from '@react-three/rapier';
import { OrbitControls, Text, RoundedBox, Circle, Box } from '@react-three/drei';
import * as THREE from 'three';


// --- BAGIAN YANG DIPERBAIKI ADA DI SINI ---

// Komponen Lanyard, sekarang menerima prop 'isDragging'
function LanyardStrap({ start, end, isDragging }) {
    const strapRef = useRef();
    const startVec = new THREE.Vector3();
    const endVec = new THREE.Vector3();
    const up = new THREE.Vector3(0, 1, 0);

    useFrame(() => {
        // HENTIKAN PEMBARUAN TALI JIKA KARTU SEDANG DISERET
        // Ini adalah kunci untuk memperbaiki error "recursive use"
        if (isDragging || !start.current || !end.current) {
            return;
        }

        const startPosObj = start.current.translation();
        const endPosObj = end.current.translation();
        startVec.set(startPosObj.x, startPosObj.y, startPosObj.z);
        endVec.set(endPosObj.x, endPosObj.y + 1, endPosObj.z);
        const length = startVec.distanceTo(endVec);
        strapRef.current.scale.y = length;
        strapRef.current.position.lerpVectors(startVec, endVec, 0.5);
        strapRef.current.quaternion.setFromUnitVectors(up, endVec.clone().sub(startVec).normalize());
    });

    return (
        <Box ref={strapRef} args={[0.2, 1, 0.05]} position={[0,0,0]} castShadow>
            <meshStandardMaterial color="black" />
        </Box>
    );
}

// Komponen Kartu, sekarang memberikan state 'isDragging' ke LanyardStrap
function NametagCard({ anchorRef, onDragStateChange }) {
    const card = useRef();
    // Kita pindahkan state isDragging ke komponen induk agar bisa di-pass ke LanyardStrap
    // Tetapi untuk contoh ini, kita cukup panggil callback saja
    
    const { camera, gl } = useThree();
    const plane = new THREE.Plane();
    const raycaster = new THREE.Raycaster();
    const intersection = new THREE.Vector3();
    const cardPositionVec = new THREE.Vector3();

    useRopeJoint(anchorRef, card, [[0, 0, 0], [0, 1, 0], 1.5]);

    const handlePointerDown = (e) => {
        onDragStateChange(true); // Beri tahu komponen induk bahwa drag dimulai
        e.stopPropagation();
        e.target.setPointerCapture(e.pointerId);
        card.current.lockRotations(true);
        const cardPosObj = card.current.translation();
        cardPositionVec.set(cardPosObj.x, cardPosObj.y, cardPosObj.z);
        camera.getWorldDirection(plane.normal);
        plane.setFromNormalAndCoplanarPoint(plane.normal.clone(), cardPositionVec);
    };

    const handlePointerMove = (e) => {
        // Kita tidak perlu cek isDragging di sini karena event ini hanya aktif setelah pointer down
        const pointer = new THREE.Vector2(
            (e.clientX / gl.domElement.clientWidth) * 2 - 1,
            -(e.clientY / gl.domElement.clientHeight) * 2 + 1
        );
        raycaster.setFromCamera(pointer, camera);
        if (raycaster.ray.intersectPlane(plane, intersection)) {
            card.current.setNextKinematicTranslation(intersection);
        }
    };

    const handlePointerUp = (e) => {
        onDragStateChange(false); // Beri tahu komponen induk bahwa drag selesai
        e.target.releasePointerCapture(e.pointerId);
        card.current.lockRotations(false);
    };

    // Kita tambahkan onPointerLeave untuk kasus kursor keluar dari canvas saat sedang drag
    const handlePointerLeave = (e) => {
        onDragStateChange(false);
        card.current.lockRotations(false);
    }

    return (
        <RigidBody
            ref={card}
            colliders="cuboid"
            canSleep={false}
            // Tipe diatur oleh komponen induk sekarang
            // type={isDragging ? 'kinematicPosition' : 'dynamic'}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerLeave}
            castShadow
        >
            {/* Visual tidak berubah */}
             <RoundedBox args={[1.5, 2.2, 0.1]} radius={0.05} receiveShadow>
                <meshStandardMaterial color="white" />
            </RoundedBox>
            <Circle args={[0.08, 32]} position={[0, 0.9, 0.051]}>
                <meshStandardMaterial color="#333" />
            </Circle>
            <Box args={[0.04, 0.2, 0.1]} position={[0, 1.05, 0.05]}>
                 <meshStandardMaterial color="black" />
            </Box>
            <Text position={[0, 0.4, 0.06]} fontSize={0.28} color="black" fontWeight="bold">
                MARVIN
            </Text>
            <Text position={[0, 0.1, 0.06]} fontSize={0.28} color="black" fontWeight="bold">
                MENDOZA
            </Text>
            <group position={[-0.4, -0.6, 0.06]}>
                 <Text fontSize={0.4} color="black" fontWeight="bold">D</Text>
                 <Text position={[0.2, 0, 0]} fontSize={0.4} color="black" fontWeight="bold">D</Text>
            </group>
            <Text position={[0.45, -0.9, 0.06]} fontSize={0.05} color="#555" anchorX="right">
                ID-0023849
            </Text>
        </RigidBody>
    );
}

// Komponen utama
export default function PhysicsNametag() {
    const anchor = useRef();
    const cardRef = useRef(); // Kita butuh ref ke kartu untuk mendapatkan posisinya
    const [isDragging, setIsDragging] = useState(false);

    return (
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
            <color attach="background" args={['#111']} />
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
            <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={2 * Math.PI / 3} />

            <Physics gravity={[0, -20, 0]}>
                <RigidBody ref={anchor} type="fixed" position={[0, 2.5, 0]} />
                {/* Karena NametagCard sekarang tidak punya RigidBody sendiri,
                    kita bungkus di sini dan teruskan state isDragging
                */}
                <RigidBody 
                    ref={cardRef} 
                    type={isDragging ? 'kinematicPosition' : 'dynamic'}
                >
                   <NametagCard anchorRef={anchor} onDragStateChange={setIsDragging} />
                </RigidBody>

                {/* Berikan state isDragging ke LanyardStrap */}
                <LanyardStrap start={anchor} end={cardRef} isDragging={isDragging} />
            </Physics>
        </Canvas>
    );
}