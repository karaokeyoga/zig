import { BOARD } from '../const'
import { Cell } from '../components/ Cell'
import { Context } from '../context'
import { FC, useEffect, useMemo, useState } from 'react'
import { Goal } from '../components/Goal'
import { Grid, Paper } from '@mui/material'
import { Origin, ValidIndices } from '../type'
import { Score } from '../components/Score'
import { styles } from '../style'
import { useMobileMediaQuery } from '../hooks/mobileMediaQuery'

// exports

export const Zig: FC = () => {
  const isMobile = useMobileMediaQuery()

  const [areNumbersHidden, setAreNumbersHidden] = useState(false)

  const [isAnswerVisible, setIsAnswerVisible] = useState(false)

  const [origin, setOrigin] = useState<Origin | null>(null)

  const [path, setPath] = useState<number[]>([])

  const [validIndices, setValidIndices] = useState<ValidIndices>(new Set())

  const score = useMemo(() => path.reduce((accumulator, cell) => accumulator + cell, 0), [path])

  const context = useMemo(
    () => ({ areNumbersHidden, isAnswerVisible, origin, path, score, setOrigin, setPath, setValidIndices, validIndices }),
    [areNumbersHidden, isAnswerVisible, origin, path, score, validIndices]
  )

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'KeyC') {
        setAreNumbersHidden(areNumbersHidden => !areNumbersHidden)
      } else if (event.code === 'KeyA') {
        setIsAnswerVisible(isAnswerVisible => !isAnswerVisible)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <Context.Provider value={context}>
      <Grid container height="100%" justifyContent="center" onMouseDown={() => setPath([])}>
        <Grid alignItems="center" display="flex" item justifyContent="center" xs={12}>
          <Paper elevation={isMobile ? 0 : 1} square={isMobile} sx={styles.paper}>
            {BOARD.map((cell, index) => (
              <Cell cell={cell} index={index} key={cell} />
            ))}

            <Goal />

            <Score />
          </Paper>
        </Grid>
      </Grid>
    </Context.Provider>
  )
}
