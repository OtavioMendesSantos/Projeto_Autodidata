import React from "react";

type IUiContext = {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>
}

const UiContext = React.createContext<IUiContext | null>(null);

const useUi = () => {
    const context = React.useContext(UiContext)
    if (context === null) {
        throw new Error('useUi must be used within a UiContextProvider')
    }
    return context;
};

const UiContextProvider = ({ children }: React.PropsWithChildren) => {
    const [dark, setDark] = React.useState(false);
    return (
        <UiContext.Provider value={{ dark, setDark }}>
            {children}
        </UiContext.Provider>
    )
};

export { UiContextProvider, UiContext, useUi };