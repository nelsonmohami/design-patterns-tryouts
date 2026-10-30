import type { Controller } from "./interfaces";

class Amplifier implements Controller {
     public turnOn(): void {
        console.log("🚀 ~ Amplifier ~ turnOn...")

    }

    public turnOff(): void {
        console.log("🚀 ~ Amplifier ~ turnOff...")
    }

    public setVolume(level: number): void {

    }
}

class DvdPlayer implements Controller {

    public turnOn(): void {
        console.log("🚀 ~ DvdPlayer ~ turnOn...")

    }

    public turnOff(): void {
        console.log("🚀 ~ DvdPlayer ~ turnOff...")
    }

    public play(movie: string): void {
        console.log("🚀 ~ DvdPlayer ~ play ~ movie:", movie)
    }

}

class Projector implements Controller {
    public turnOn(): void {
        console.log("🚀 ~ Projector ~ turnOn...")

    }

    public turnOff(): void {
        console.log("🚀 ~ Projector ~ turnOff...")
    }

    public setInput(dvdPlayer: DvdPlayer): void {
        console.log("🚀 ~ Projector ~ connecting to dvdPlayer...")

    }

}

class Lights implements Controller {

    public turnOn(): void {
        console.log("🚀 ~ Lights ~ turnOn...")

    }

    public turnOff(): void {
        console.log("🚀 ~ Lights ~ turnOff...")
    }

    public dim(level: number): void {
        console.log("🚀 ~ Lights ~ dimming light by: ", level)

    }

}

export { Amplifier, DvdPlayer, Projector, Lights}

