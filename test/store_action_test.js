import {setState} from '../dev/store/actions'; // Import your action file
import {expect} from '@open-wc/testing';

suite('Global State Actions', () => {
  test('setState returns the correct action object', () => {
    const action = {type: 'SET_USER', value: 'John Doe'};

    const result = setState(action);

    expect(result).to.deep.equal({
      type: 'SET_USER',
      value: 'John Doe',
    });
  });

  test('setState handles missing action type', () => {
    const action = {value: 'John Doe'};

    const result = setState(action);

    expect(result).to.deep.equal({
      type: undefined,
      value: 'John Doe',
    });
  });

  test('setState handles missing action value', () => {
    const action = {type: 'SET_USER'};

    const result = setState(action);

    expect(result).to.deep.equal({
      type: 'SET_USER',
      value: undefined,
    });
  });

  test('setState returns an empty object when no arguments are passed', () => {
    const result = setState();

    expect(result).to.deep.equal({
      type: '',
      value: '',
    });
  });
});
