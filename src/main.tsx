import renderer from '@dojo-labs/framework/widget-core/vdom';
import { tsx } from '@dojo-labs/framework/widget-core/tsx';
import Registry from '@dojo/framework/widget-core/Registry';
import { registerRouterInjector } from '@dojo/framework/routing/RouterInjector';
import StateHistory from '@dojo/framework/routing/history/StateHistory';

import HackerNews from './HackerNews';
import config from './routes';

const registry = new Registry();
registerRouterInjector(config, registry, { HistoryManager: StateHistory });

const r = renderer(() => <HackerNews />);
r.mount({ registry, domNode: document.getElementById('app')! });
