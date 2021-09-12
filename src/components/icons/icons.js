import React from 'react'
import PropTypes from 'prop-types'

import buildClassName from '../../utils/buildClassName'

// import *.svg files and convert the, to React Icons Component
import { ReactComponent as ArrowDownSvgIcon } from './icons-svg/arrow-down.svg'
import { ReactComponent as CloseSvgIcon } from './icons-svg/close.svg'
import { ReactComponent as ArrowRightSvgIcon } from './icons-svg/arrow-right.svg'
import { ReactComponent as LogoSvgIcon } from './icons-svg/logo.svg'
import { ReactComponent as CopyRightSvgIcon } from './icons-svg/copyright.svg'
import { ReactComponent as GoogleStoreSvgIcon } from './icons-svg/google-store.svg'
import { ReactComponent as AppleStoreSvgIcon } from './icons-svg/apple-store.svg'
import { ReactComponent as TwitterSvgIcon } from './icons-svg/twitter.svg'
import { ReactComponent as InstagramSvgIcon } from './icons-svg/instagram.svg'
import { ReactComponent as TelegramSvgIcon } from './icons-svg/telegram.svg'
import { ReactComponent as FacebookSvgIcon } from './icons-svg/facebook.svg'
import { ReactComponent as YoutubeSvgIcon } from './icons-svg/youtube.svg'
import { ReactComponent as LinkedinSvgIcon } from './icons-svg/linkedin.svg'

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

export const ArrowRightIcon = makeIconComponent(
  ArrowRightSvgIcon,
  'ArrowRightIcon',
)

export const LogoIcon = makeIconComponent(LogoSvgIcon, 'LogoSvgIcon')

export const CopyRightIcon = makeIconComponent(
  CopyRightSvgIcon,
  'CopyRightSvgIcon',
)

export const GoogleStoreIcon = makeIconComponent(
  GoogleStoreSvgIcon,
  'GoogleStoreSvgIcon',
)

export const AppleStoreIcon = makeIconComponent(
  AppleStoreSvgIcon,
  'AppleStoreSvgIcon',
)

export const TwitterIcon = makeIconComponent(TwitterSvgIcon, 'TwitterSvgIcon')

export const InstagramIcon = makeIconComponent(
  InstagramSvgIcon,
  'InstagramSvgIcon',
)

export const TelegramIcon = makeIconComponent(
  TelegramSvgIcon,
  'TelegramSvgIcon',
)

export const FacebookIcon = makeIconComponent(
  FacebookSvgIcon,
  'FacebookSvgIcon',
)

export const YoutubeIcon = makeIconComponent(YoutubeSvgIcon, 'YoutubeSvgIcon')

export const LinkedinIcon = makeIconComponent(
  LinkedinSvgIcon,
  'LinkedinSvgIcon',
)
