import React from 'react'
import { AppProvider } from './AppContext'
import { AuthProvider } from './AuthContext'
import { GalleryProvider } from './GalleryContext'
import { ContentProvider } from './ContentContext'

const ContextManager = ({ children }) => {

    return (
        <ContentProvider>
            <AppProvider>
                <GalleryProvider>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </GalleryProvider>
            </AppProvider>
        </ContentProvider>
    )
};
export default ContextManager