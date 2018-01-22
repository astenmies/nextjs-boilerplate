import {configure} from '@storybook/react';

const req = require.context('../src/components/atoms', true, /\.stories\.js$/)

function loadStories() {
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);