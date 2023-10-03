'use client'
import React from 'react'
import clsx from 'clsx'
import { Rss, Sun, Moon } from 'react-feather'
import Cookie from 'js-cookie'

import Logo from '@/components/Logo'
import VisuallyHidden from '@/components/VisuallyHidden'

import { LIGHT_TOKENS, DARK_TOKENS, COOKIE_COLOR_THEME } from '@/constants'

import styles from './Header.module.css'

function Header({ initialTheme, className, ...delegated }) {
  const [theme, setTheme] = React.useState(initialTheme)

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'

    // Update state
    setTheme(nextTheme)

    // Update cookies
    Cookie.set(COOKIE_COLOR_THEME, nextTheme, {
      expires: 1000,
    })

    // Update DOM
    const root = document.documentElement
    const nextColors = nextTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS

    root.setAttribute('data-color-theme', nextTheme)

    Object.entries(nextColors).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
  }
  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <Logo />

      <div className={styles.actions}>
        <button className={styles.action}>
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: 'translate(2px, -2px)',
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </button>
        <button className={styles.action} onClick={toggleTheme}>
          {theme === 'light' ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
          <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
        </button>
      </div>
    </header>
  )
}

export default Header
