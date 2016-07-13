import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

function loadStories() {
  require('../src/components/stories/button.jsx');
  require('../src/components/stories/grid.jsx');
}

configure(loadStories, module);
