import React from 'react'
import { AppProvider } from './AppContext'
import { AuthProvider } from './AuthContext'
import { ContactProvider } from './ContactContext'
import { ContentProvider } from './ContentContext'
import { GalleryProvider } from './GalleryContext'

const ContextManager = ({ children }) => {

    return (
        <AppProvider>
            <ContentProvider>
                <GalleryProvider>
                    <AuthProvider>
                        <ContactProvider>
                            {children}
                        </ContactProvider>
                    </AuthProvider>
                </GalleryProvider>
            </ContentProvider>
        </AppProvider>
    )
};
export default ContextManager