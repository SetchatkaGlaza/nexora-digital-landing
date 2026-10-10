import './styles/variables.css';
import './styles/base.css';
import './styles/components.css';
import './styles/responsive.css';

import { initNavigation } from './scripts/navigation.js';
import { initTabs } from './scripts/tabs.js';
import { initPortfolio } from './scripts/portfolio.js';
import { initFaq } from './scripts/faq.js';
import { initForm } from './scripts/form.js';
import { initAnimations } from './scripts/animations.js';
import { initExtras } from './scripts/extras.js';

initNavigation();
initTabs();
initFaq();
initPortfolio();
initForm();
initAnimations();
initExtras();
