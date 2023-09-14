"use client"
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => { }, [])
  return (
    <div className='home'>
      <Particles
        className="particle"
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: ''
            },
          },
          fps_limit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: 'push'
              },
              onHover: {
                enable: true,
                mode: 'repulse'
              },
              resize: true,
            },
            mode: {
              push: {
                quantity: 110
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              }
            }
          },
          particles: {
            color: {
              value: '#e68e2e'
            },
            links: {
              color: '#f5d393',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            move: {
              enable: true,
              outModes: {
                default: 'bounce'
              },
              random: false,
              speed: 1,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "cicle"
            },
            size: {
              value: { min: 1, max: 5 }
            },
          },
          detectRetina: true
        }} />
      <div className="container">
        <h1 className='text'>Keim Thomas</h1>
        <p className='sous-text'>Developpeur web fullstack</p>
      </div>

    </div >
  )
}
