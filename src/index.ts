import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';

window.addEventListener('DOMContentLoaded', () => {

  function setLocalStorage(key: string, data: object): void {
    localStorage.setItem(key, JSON.stringify(data));
  };

  setLocalStorage('user', { username: 'Wade Warren', avatarUrl: '/img/avatar.png' });
  setLocalStorage('favoritesAmount', { favoritesAmount: 1 });

  function getUserData(): unknown {
    return JSON.parse(localStorage.getItem('user'));
  };
  function getFavoritesAmount(): unknown {
    return JSON.parse(localStorage.getItem('favoritesAmount'));
  };

  type userType = {
    username: string;
    avatarUrl: string;
  };
  type favoritesAmountType = {
    favoritesAmount: number
  };

  renderUserBlock(
    (getUserData() as userType).username,
    (getUserData() as userType).avatarUrl,
    (getFavoritesAmount() as favoritesAmountType).favoritesAmount
  );
  renderSearchFormBlock(
    // new Date().toLocaleDateString(),
    // new Date(new Date(
    //   new Date().getFullYear(),
    //   new Date().getMonth(),
    //   new Date().getDate() + 1
    // )).toLocaleDateString()
  );
  renderSearchStubBlock();
  renderToast(
    {
      text: 'Это пример уведомления. Используйте его при необходимости',
      type: 'success',
    },
    {
      name: 'Понял',
      handler: () => {
        console.log('Уведомление закрыто');
      },
    }
  );
});
