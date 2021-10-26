import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Wade Warren', '/img/avatar.png', 1);
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
