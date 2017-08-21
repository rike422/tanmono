import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);

function loadStories() {
  require('../src/components/stories/button.jsx');
  require('../src/components/stories/grid.jsx');
  require('../src/components/stories/layout.jsx');
  require('../src/components/stories/style.scss');
}

configure(loadStories, module);
