import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadBigCirclesPreset } from "tsparticles-preset-big-circles";

function ParticlePresetBigCircles() {
    const engine = Engine;
    const options = {
        preset: "bigCircles", // also "big-circles" is accepted
        fullScreen: {
            "enable": true,
            "zIndex": -1
          },
    };
    
    const customInit = async (engine) => {
        await loadBigCirclesPreset(engine);
    };
    
      const particlesLoaded = (container) => {
        console.log(container);
    };

    return(
         <Particles
            id="tsparticles"
            init={customInit}
            loaded={particlesLoaded}
            options={options}
    />
    )
}

export default ParticlePresetBigCircles;