import Particles from "react-tsparticles";
import particlesConfig from './config/particles-config';
import starsConfig from './config/stars-config';
import { loadFull } from "tsparticles";

function ParticleBackground() {
    const particlesInit = async (main) => {
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

    return(
         <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={starsConfig}
    />
    )
}

export default ParticleBackground;