import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NavigationItem from '../components/Layout/Navigation/NavigationItem'
import NavigationItems from '../components/Layout/Navigation/NavigationItems'

configure({
    adapter: new Adapter()
})

describe('<Navigation/>', (() => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />)
    })

    it('should return three navigation items', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    })

    it('should return three navigation items', () => {
        wrapper.setProps({ auth: false })
        expect(wrapper.contains(<NavigationItem link="/">logout</NavigationItem>)
        )})
}))