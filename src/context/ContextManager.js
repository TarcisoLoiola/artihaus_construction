import React, { useState } from 'react'
import { AppProvider } from './AppContext'
import { AuthProvider } from './AuthContext'
import { ContactProvider } from './ContactContext'
import { ContentProvider } from './ContentContext'
import { GalleryProvider } from './GalleryContext'

import Content from '../Assets/content.json'

const ContextManager = ({ children }) => {
    const [content, setContent] = useState(Content)

    return (
        <AppProvider>
            <ContentProvider value={content}>
                <GalleryProvider value={content}>
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