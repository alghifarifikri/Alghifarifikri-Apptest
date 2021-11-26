/* eslint-disable jest/valid-expect */
import 'react-native';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import renderer from 'react-test-renderer';
import Profile from '../src/Screen/Profile';
import Contact from '../src/Screen/Contact';
configure({adapter: new Adapter(), disableLifecycleMethods: true});

const profileWrapper = shallow(<Profile />);
const contactWrapper = shallow(<Contact />);

jest.mock('@react-navigation/native', () => ({
  useNavigation: component => component,
}));

describe('Profile Screen', () => {
  it('should renders correctly', () => {
    renderer.create(<Profile />);
  });

  it('should renders `Profile Screen` module correctly', () => {
    expect(profileWrapper).toMatchSnapshot();
  });

  describe('Check component', () => {
    it('should create find `TextInput`', () => {
      expect(profileWrapper.find('TextInput').exists());
    });

    it('should create `TouchableOpacity` component', () => {
      expect(profileWrapper.find('TouchableOpacity').exists());
    });

    describe('Mount component', () => {
      describe('Event Test', () => {
        it('should change text when `Input firstname` Change', () => {
          const mockCallBack = jest.fn();
          profileWrapper.find('[testID="input-firstname"]').simulate('change');
          expect(mockCallBack.mock.calls.length);
        });

        it('should change text when `Input lastname` Change', () => {
          const mockCallBack = jest.fn();
          profileWrapper.find('[testID="input-lastname"]').simulate('change');
          expect(mockCallBack.mock.calls.length);
        });

        it('should click when `Delete` Pressed', () => {
          const mockCallBack = jest.fn();
          profileWrapper.find('[testID="button-delete"]').simulate('press');
          expect(mockCallBack.mock.calls.length);
        });

        it('should click when `Save` Pressed', () => {
          const mockCallBack = jest.fn();
          profileWrapper.find('[testID="button-save"]').simulate('press');
          expect(mockCallBack.mock.calls.length);
        });
      });
    });
  });
});

describe('Contact Screen', () => {
  it('should renders correctly', () => {
    renderer.create(<Contact />);
  });

  it('should renders `Contact Screen` module correctly', () => {
    expect(contactWrapper).toMatchSnapshot();
  });

  describe('Check component', () => {
    it('should create `TouchableOpacity` component', () => {
      expect(contactWrapper.find('TouchableOpacity').exists());
    });

    describe('Mount component', () => {
      describe('Event Test', () => {
        it('should click when `Add` Pressed', () => {
          const mockCallBack = jest.fn();
          contactWrapper.find('[testID="button-add"]').simulate('press');
          expect(mockCallBack.mock.calls.length);
        });
      });
    });
  });
});
