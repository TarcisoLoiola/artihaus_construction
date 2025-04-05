import React from 'react'
import { AppProvider } from './AppContext'
import { AuthProvider } from './AuthContext'
import { GalleryProvider } from './GalleryContext'
import { ContentProvider } from './ContentContext'

const ContextManager = ({ children }) => {

    return (
        <AppProvider>
            <ContentProvider>
                <GalleryProvider>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </GalleryProvider>
            </ContentProvider>
        </AppProvider>
    )
};
export default ContextManager