import SVGSpriteComponent from './svg-sprite/svg-sprite.component';
import MediaQueriesComponent from './media-queries/media-queries.component';
import MenuComponent from './menu/menu.component';
import CurrenciesComponent from './currencies/currencies.component';
import TopHeaderMyAccountComponent from './top-header-my-account/top-header-my-account.component';

export const CLASSES = {
  dom: {MenuComponent, CurrenciesComponent, TopHeaderMyAccountComponent},
  onReady: {MediaQueriesComponent},
  onLoad: {SVGSpriteComponent}
};
