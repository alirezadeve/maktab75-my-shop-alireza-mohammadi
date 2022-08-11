import { CustomizedInputBase, HeaderCounter, Logo } from 'components'
import React from 'react'

export default function Header() {
  return (
    <header className="header">
        <HeaderCounter className="headerCounterBox" />

        {/* </CustomizedInputBase> */}
        <div className="logo-container">
          <Logo />
        </div>
        <CustomizedInputBase />
      </header>
  )
}
