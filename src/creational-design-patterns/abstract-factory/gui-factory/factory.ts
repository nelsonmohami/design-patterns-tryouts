import type { GUIFactory, IButton, ICheckbox } from "./interfaces";
import { MacOSButton, MacOSCheckbox, WindowsButton, WindowsCheckbox } from "./ui";

class WindowsFactory implements GUIFactory {
    createButton(): WindowsButton {
        console.log("Creating Windows button")
        return new WindowsButton();
    }
    createCheckbox(button: WindowsButton): WindowsCheckbox {
        console.log("Creating Windows checkbox")
        
        return new WindowsCheckbox(button)
    }
}

class MacOSFactory implements GUIFactory {
    createButton(): MacOSButton {
        console.log("Creating MacOS button")
        return new MacOSButton();
    }
    createCheckbox(button: MacOSButton): MacOSCheckbox {
        console.log("Creating MacOS checkbox")
        
        return new MacOSCheckbox();
    }
}

export { WindowsFactory, MacOSFactory };