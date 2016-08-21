import SVGSpriteComponent from './svg-sprite/svg-sprite.component';
import MediaQueriesComponent from './media-queries/media-queries.component';
import MenuComponent from './menu/menu.component';
import CurrenciesComponent from './currencies/currencies.component';
import TopHeaderMyAccountComponent from './top-header-my-account/top-header-my-account.component';
import TopHeaderWishlistComponent from './top-header-wishlist/top-header-wishlist.component';

export const CLASSES = {
  dom: {MenuComponent, CurrenciesComponent, TopHeaderMyAccountComponent, TopHeaderWishlistComponent},
  onReady: {MediaQueriesComponent},
  onLoad: {SVGSpriteComponent}
};
