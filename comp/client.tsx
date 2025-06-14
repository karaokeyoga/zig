'use client'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { FC, ReactNode } from 'react'
import { AppContext } from '@/comp/appContext'
import { THEME } from '@/util/theme'

// types

type _ClientProps = { children: ReactNode }

// components

export const Client: FC<_ClientProps> = ({ children }) => (
  <ThemeProvider theme={THEME}>
    <CssBaseline />

    <AppContext>{children}</AppContext>
  </ThemeProvider>
)
