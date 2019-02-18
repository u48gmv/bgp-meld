import 'core-js/es6/map';
import 'core-js/es6/set';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Fabric} from 'office-ui-fabric-react/lib/Fabric';
import App from './App';
import './index.css';
import 'office-ui-fabric-react/dist/css/fabric.min.css';
import registerServiceWorker from './registerServiceWorker';
import {initializeIcons} from '@uifabric/icons';
initializeIcons();

ReactDOM.render(
  <Fabric><App /></Fabric>,
  document.getElementById('meldApp') as HTMLElement
);
registerServiceWorker();
