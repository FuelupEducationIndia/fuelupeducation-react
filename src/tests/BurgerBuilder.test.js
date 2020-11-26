import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import BuildControls from '../components/Burger/BuildControl/BuildControls'
import {BurgerBuilder} from '../containers/BurgerBuilder'

configure({
    adapter: new Adapter()
})

describe('<BurgerBuilder/>', (() => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients = {() => {}}/>)
    })

    it('should return one buildControl', () => {
        wrapper.setProps({ingredients: {salad: 0}})
        expect(wrapper.find(BuildControls)).toHaveLength(1)
    })

}))