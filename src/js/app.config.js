import SVGSpriteComponent from './svg-sprite/svg-sprite.component';
import MediaQueriesComponent from './media-queries/media-queries.component';
import MenuComponent from './menu/menu.component';
import CurrenciesComponent from './currencies/currencies.component';
import TopHeaderIconsComponent from './top-header-icons/top-header-icons.component';

export const CLASSES = {
  dom: {MenuComponent, CurrenciesComponent, TopHeaderIconsComponent},
  onReady: {MediaQueriesComponent},
  onLoad: {SVGSpriteComponent}
};
