import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNamespaces } from 'react-i18next';

// a pure component using the `t` function
const SayWelcomeComponent = ({ t }) => (
  <div>
    {t('Welcome to React')}
    <div style={{ marginTop: 40, fontSize: 14, color: '#666' }}>
      toggle language using the withI18nextProvider to see content in different languages
    </div>
  </div>
);

// passing t function using a HOC
const SayWelcome = withNamespaces('translations')(SayWelcomeComponent);

// we just pass down a mock `t` funtion so the component works in stories
storiesOf('withNamespaces', module).add('showing a component', () => <SayWelcome />);

// learn more
// https://react.i18next.com/components/withnamespaces
