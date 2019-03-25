import React from 'react'
import { BurgerBuilder } from './BurgerBuilder';
import BuilderControls from '../../components/BuildControls/BuildControls';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
describe('<BurgerBuilder/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={() => { }} />);
    });

    it('should render <BuilderControls/> when receiving ingredients', () => {
        wrapper.setProps({ ings: { salad: 0 } });
        expect(wrapper.find(BuilderControls)).toHaveLength(1);
    });
});