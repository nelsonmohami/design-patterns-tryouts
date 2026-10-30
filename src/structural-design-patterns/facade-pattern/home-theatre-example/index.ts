import { Amplifier, DvdPlayer, Projector, Lights } from "./controllers.types";
import HomeTheatreFacade from "./HomeThreatreFacade";

export const HomeTheareExample = () => {
    const amplifier = new Amplifier(); 
    const dvdPlayer = new DvdPlayer(); 
    const projector = new Projector(); 
    const lights = new Lights();

    const homeTheatre = new HomeTheatreFacade(
        amplifier, 
        dvdPlayer, 
        projector, 
        lights
    );

    homeTheatre.dimLights(20);
    homeTheatre.watchMovie("IP Man 1")

}