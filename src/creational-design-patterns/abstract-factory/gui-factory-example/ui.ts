import type { IButton, ICheckbox } from "./interfaces";

class WindowsButton implements IButton {
    render(): void {
        console.log('Windows button rendered!!!!!!');
    }

    onClick(f: Function): void {
        f();
        console.log('Windows button clicked');
    }
}

class WindowsCheckbox implements ICheckbox {
    constructor(private button: WindowsButton){}
    render(): void {
        console.log("Windows checkbox rendered!");
    }
    
    toggle(): void {
        console.log("Windows checkbox toggled!");
        this.button.onClick(() => console.log("Check box toggled"))
    }

}

class MacOSButton implements IButton{
    render(): void {
        console.log("MacOSButton rendered!.");
    }
    
    onClick(f: Function): void {
        console.log("MacOSButton clicked!.");
    }
}

class MacOSCheckbox implements ICheckbox{
    toggle(): void {
        console.log("MacOSCheckbox toggled!.");
    }

    render(): void {
        console.log("MacOSCheckbox rendered!.");
    }
}

export {WindowsButton, WindowsCheckbox, MacOSButton, MacOSCheckbox}