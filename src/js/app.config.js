import SVGSpriteComponent from './svg-sprite/svg-sprite.component';
import MediaQueriesComponent from './media-queries/media-queries.component';
import MenuComponent from './menu/menu.component';
import CurrenciesComponent from './currencies/currencies.component';
import HeaderMyAccountComponent from './header-my-account/header-my-account.component';
import TopHeaderWishListComponent from './top-header-wish-list/top-header-wish-list.component';
import WishListComponent from './wish-list/wish-list.component';

export const CLASSES = {
  dom: {MenuComponent, CurrenciesComponent, HeaderMyAccountComponent, TopHeaderWishListComponent},
  onReady: {MediaQueriesComponent, WishListComponent},
  onLoad: {SVGSpriteComponent}
};
