import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/stories/button.jsx');
}

configure(loadStories, module);