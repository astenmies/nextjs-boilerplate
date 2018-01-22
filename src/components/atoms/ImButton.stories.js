import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ImButton from './ImButton';

storiesOf('Button', module)
    .add('with text', () => (
        <ImButton onClick={action('clicked')}>Hello Button</ImButton>
    ))
    .add('with some emoji', () => (
        <ImButton onClick={action('clicked')}>? ? ? ?</ImButton>
    ));

