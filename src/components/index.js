//  THE OLD WAY
// export { default as Article } from './article/Article.jsx';
// export { default as Brand } from './brand/Brand.jsx';
// export { default as Cta } from './cta/Cta.jsx';
// export { default as Feature } from './feature/Feature.jsx';
// export { default as Navbar} from './navbar/Navbar.jsx';

// THE NEW WAY

export var Article = require('./article/Article.jsx').default ;
export var Brand = require('./brand/Brand.jsx').default ;
export var Cta = require('./cta/Cta.jsx').default ;
export var Feature = require('./feature/Feature.jsx').default ;
export var Navbar = require('./navbar/Navbar.jsx').default ;


