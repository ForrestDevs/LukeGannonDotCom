"use client";

import { useCallback } from "react";
import * as ParticlesPrimative from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";

export default function Particles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  let { scrollY } = useScroll();
  let opacity = useTransform(scrollY, [0, 1200], [1, 0]);
  let scale = useTransform(scrollY, [0, 1600], [1, 0.5]);

  return (
    <motion.div style={{ opacity, scale }}>
      <ParticlesPrimative.Particles
        className="block absolute top-0 left-0 right-0"
        id="ts-particles"
        width="100%"
        height="100vh"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          autoPlay: true,
          detectRetina: true,
          fpsLimit: 120,
          fullScreen: {
            enable: false,
            zIndex: -1,
          },
          background: {
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
            opacity: 1,
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1050,
              },
              value: 120,
            },
            opacity: {
              value: 0.6,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
              animation: {
                enable: true,
                minimumValue: 0.5,
                speed: 5,
              },
            },
          },
        }}
      />
    </motion.div>
  );
}
