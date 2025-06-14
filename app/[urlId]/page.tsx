'use client'

import { notFound } from 'next/navigation'
import { FC, ReactNode, use, useEffect, useState } from 'react'
import { Puzzle } from '@/comp/puzzle'
import { BOARDS } from '@/util/puzzles'

// types

type _SharedPageProps = { params: Promise<{ urlId: string }> }

// components

const SharedPage: FC<_SharedPageProps> = ({ params }) => {
  const { urlId } = use(params)
  const [render, setRender] = useState<ReactNode>(null)

  useEffect(() => {
    const id = Number(urlId)

    const index = BOARDS.findIndex(board => board.id === id)

    if (index === -1) {
      setRender(notFound())

      return
    }

    setRender(<Puzzle id={id} />)
  }, [urlId])

  return render
}

export default SharedPage
