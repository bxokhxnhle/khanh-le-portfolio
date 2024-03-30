'use client'

import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  if (resolvedTheme === 'dark') {
    return <BsFillSunFill className="cursor-pointer text-lg desktop:text-2xl fill-green-1" onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    return <BsFillMoonStarsFill className="cursor-pointer text-lg desktop:text-2xl fill-green-3" onClick={() => setTheme('dark')} />
  }

}