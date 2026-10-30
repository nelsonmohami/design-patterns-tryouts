import { MacOSFactory, WindowsFactory } from "./factory";
import type { GUIFactory } from "./interfaces";

const index = () => {
    console.log('*** GUI Example ***');
    
    renderUI(new WindowsFactory())
    
    console.log('\n******');
    
    renderUI(new MacOSFactory())

    console.log('*** GUI Example End ***');
    
}

const renderUI = (factory: GUIFactory) => {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox(button);

    button.render();
    checkbox.render();

    button.onClick(() => console.log("Clicking button...."))
    checkbox.toggle();
}

export default index;