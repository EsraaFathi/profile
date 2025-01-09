import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // استخدم `slim` لتجنب تحميل جميع المكونات الإضافية غير الضرورية

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // تحميل الإصدار المتوافق
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: { value: 200, density: { enable: true, value_area: 800 } },
          color: { value: "#f771e8" },
          shape: { type: "star" },
          opacity: {
            value: 1,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
          },
          size: { value: 2, random: true },
          move: { enable: true, speed: 1, random: true, out_mode: "out" },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: true, mode: "repulse" },
          },
          modes: {
            bubble: { distance: 250, size: 0, duration: 2 },
            repulse: { distance: 400, duration: 0.4 },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
