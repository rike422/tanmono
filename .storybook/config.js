import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/stories/button.jsx');
  require('../src/components/stories/grid.jsx');
}

configure(loadStories, module);