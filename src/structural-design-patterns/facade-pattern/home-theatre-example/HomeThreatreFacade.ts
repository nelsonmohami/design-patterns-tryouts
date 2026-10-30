import type { Amplifier, DvdPlayer, Projector, Lights } from "./controllers.types";

class HomeTheatreFacade {
    constructor(
        private amplifier: Amplifier, 
        private dvdPlayer: DvdPlayer, 
        private projector: Projector, 
        private lights: Lights
    ){
        this.lights.turnOn();
        this.projector.turnOn();
        this.dvdPlayer.turnOn();
        this.projector.setInput(this.dvdPlayer);
        this.amplifier.turnOn();
    }

    watchMovie(movie: string): void {
        this.dvdPlayer.play(movie);
    }
 
    dimLights(level: number): void {
        this.lights.dim(level);
    }
}

export default HomeTheatreFacade;