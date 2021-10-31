import { favoritesAmountType, userType } from './interface';
import { renderSearchFormBlock } from './search-form.js';
import { calcFavoritesAmount, renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';

export function setLocalStorage(key: string, data: object): void {
  localStorage.setItem(key, JSON.stringify(data));
};
export function getUserData(): unknown {
  return JSON.parse(localStorage.getItem('user'));
};
export function getFavoritesAmount(): unknown {
  return JSON.parse(localStorage.getItem('favoritesAmount'));
};

window.addEventListener('DOMContentLoaded', () => {
  setLocalStorage('user', { username: 'Wade Warren', avatarUrl: '/img/avatar.png' });
  setLocalStorage('favoritesAmount', { favoritesAmount: calcFavoritesAmount() });

  renderUserBlock(
    (getUserData() as userType).username,
    (getUserData() as userType).avatarUrl,
    (getFavoritesAmount() as favoritesAmountType).favoritesAmount
  );
  renderSearchFormBlock();
  renderSearchStubBlock();
});
