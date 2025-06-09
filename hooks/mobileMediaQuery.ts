import { useMediaQuery } from '@mui/material'
import { Breakpoint } from '@mui/material/styles'
import { THEME } from '@/util/theme'

// hooks

export const useMobileMediaQuery = (breakpoint: Breakpoint = 'xl') => useMediaQuery(THEME.breakpoints.down(breakpoint))
