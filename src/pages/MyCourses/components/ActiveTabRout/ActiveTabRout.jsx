import React from 'react'
import { useSelector } from 'react-redux'
import img from '../../DevelopImages/ELECTRONIC DEVICES1.png'
import img2 from '../../DevelopImages/ELECTRONIC DEVICES.png'
import authorImg from '../../DevelopImages/Ellipse 284.png'

import BlockContainer from '../BlockContainer/BlockContainer'

const ActiveTabRout = () => {
  const content =
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim . “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim '
  const data = [
    {
      img,
      title: 'Micro-organisms',
      createdData: '22/08/2020',
      author: { authorImg, name: 'Sara Williams' },
      content,
    },
    {
      img: img2,
      title: 'Medicine ',
      createdData: '22/08/2020',
      author: { authorImg, name: 'Sara Williams' },
      content,
    },
    {
      img: img2,
      title: 'Micro-organisms',
      author: { authorImg, name: 'Sara Williams' },
      createdData: '22/08/2020',
      content,
    },
  ]

  const activeTab = useSelector(elem => elem.activeTab)
  if (activeTab === 0) return <div>Test</div>
  if (activeTab === 1) return <BlockContainer data={data} />
  return <div />
}

export default ActiveTabRout
