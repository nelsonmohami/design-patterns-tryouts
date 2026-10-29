interface IUIComponent {
    render(): void;
}

interface IButton extends IUIComponent {
    onClick(f: Function): void;
}

interface ICheckbox extends IUIComponent {
    toggle(): void;
}

interface GUIFactory {
    createButton(): IButton
    createCheckbox(button: IButton): ICheckbox
}

export type { IUIComponent, IButton, ICheckbox, GUIFactory };