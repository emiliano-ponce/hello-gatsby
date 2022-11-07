import React, { FC, ReactNode } from 'react'
import { grommet } from 'grommet/themes'
import { Grommet, Box, ThemeType } from 'grommet'

import Navbar from './Navbar'
import { deepMerge } from 'grommet/utils'
import { PinnedMovieProvider } from '../context/PinnedMovieContext'

export const customTheme: Partial<ThemeType> = {
    global: {
        colors: {
            brand: {
                dark: '#FFB703',
                light: '#023047',
            },
            background: {
                dark: '#023047',
                light: '#D9DCD6',
            },
            control: {
                dark: '#FB8500',
                light: '#FB8500',
            },
            'accent-1': {
                dark: '#FB8500',
                light: '#FB8500',
            },
            focus: {
                dark: '#FB8500',
                light: '#FB8500',
            },
        },
        font: {
            family: 'Inter',
        },
    },
}

const theme: ThemeType = deepMerge(grommet, customTheme)

interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <Grommet full theme={theme} themeMode="dark" style={{ overflowX: 'hidden', overflowY: 'auto' }}>
            <PinnedMovieProvider>
                <Navbar />
                <Box as="main" flex pad="medium">
                    {children}
                </Box>
            </PinnedMovieProvider>
        </Grommet>
    )
}

export default Layout
