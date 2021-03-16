import React from 'react'
import PropTypes from 'prop-types'

import buildClassName from '../../utils/buildClassName'

// import *.svg files and convert the, to React Icons Component
import { ReactComponent as ArrowDownSvgIcon } from './icons-svg/arrow-down.svg'
import { ReactComponent as CloseSvgIcon } from './icons-svg/close.svg'

function makeIconComponent(IconComponent, displayName, extraClassName) {
  const Component = ({ className }) => (
    <IconComponent
      className={buildClassName('svg-icon', className, extraClassName)}
    />
  )
  Component.displayName = displayName
  Component.propTypes = {
    className: PropTypes.string.isRequired,
  }
  return Component
}

export const ArrowDownIcon = makeIconComponent(
  ArrowDownSvgIcon,
  'ArrowDownIcon',
)
export const CloseIcon = makeIconComponent(CloseSvgIcon, 'CloseIcon')
