import SVGSpriteComponent from './svg-sprite/svg-sprite.component';
import MediaQueriesComponent from './media-queries/media-queries.component';
import MenuComponent from './menu/menu.component';
import CurrenciesComponent from './currencies/currencies.component';
import TopHeaderMyAccountComponent from './top-header-my-account/top-header-my-account.component';
import TopHeaderWishListComponent from './top-header-wish-list/top-header-wish-list.component';

export const CLASSES = {
  dom: {MenuComponent, CurrenciesComponent, TopHeaderMyAccountComponent, TopHeaderWishListComponent},
  onReady: {MediaQueriesComponent},
  onLoad: {SVGSpriteComponent}
};
