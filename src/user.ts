import { renderBlock } from './lib.js';

export function renderUserBlock(userName: string, urlAvatar: string, favoriteItemsAmount?: number) {
  const favoritesCaption = favoriteItemsAmount
    ? favoriteItemsAmount
    : 'ничего нет';
  const hasFavoriteItems = favoriteItemsAmount ? true : false;

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${urlAvatar}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}">
            </i>${hasFavoriteItems ? favoritesCaption : 'ничего нет...'}
          </p>
      </div>
    </div>
    `
  );
}


