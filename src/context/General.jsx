import { createContext, useState } from 'react';
export const GeneralData = createContext([])

function General({ children }) {

    const [isLang, setIsLang] = useState(localStorage.getItem('i18nextLng'));
    const [collapsed, setCollapsed] = useState(false);
    const [visible, setVisible] = useState(false);
    const [openDoc, setOpenDoc] = useState(false); 
    const [isLoading, setIsLoading] = useState(true);

   


    return (
        <GeneralData.Provider
            value={{
                isLoading,
                setIsLoading,
                isLang, 
                setIsLang,
                collapsed, 
                setCollapsed, visible, setVisible,
                openDoc, setOpenDoc 
            }}>
            {children}
        </GeneralData.Provider>
    )
}

export default General