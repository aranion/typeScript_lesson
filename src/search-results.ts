import { getFavoritesAmount, getUserData, setLocalStorage } from './index.js';
import { favoritesAmountType, Place, PlaceEdit, userType } from './interface.js';
import { renderBlock, renderToast } from './lib.js';
import { renderUserBlock } from './user.js';

const URL_POST_RESERVATION_API = 'http://localhost:3000/reservationAPI';

export function renderSearchStubBlock() {
  renderBlock(
    'search-results-block',
    `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `
  );
}

export function renderEmptyOrErrorSearchBlock(reasonMessage) {
  renderBlock(
    'search-results-block',
    `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `
  );
}

function toggleFavoriteItem(e: Event): void {
  const KEY_LOCAL_STORAGE: string = 'favoriteItems';

  const el = e.target as HTMLElement;
  const parenNode: HTMLElement = el.parentNode.parentElement;
  const dataParse: Array<PlaceEdit> | null = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));
  const findIndex: number = dataParse.findIndex(item => +item.id === +el.dataset.id);

  if (dataParse.length === 0 || findIndex === -1) {
    const id: number = +el.dataset.id;
    const name: string = parenNode.querySelector('.result-info--header').querySelector('p').textContent;
    const image: string = parenNode.querySelector('.result-img').getAttribute('src');

    dataParse.push({ id, name, image });
  } else {
    dataParse.splice(findIndex, 1);
  }

  setLocalStorage(KEY_LOCAL_STORAGE, dataParse);
  setLocalStorage('favoritesAmount', { favoritesAmount: calcFavoritesAmount() });

  renderUserBlock(
    (getUserData() as userType).username,
    (getUserData() as userType).avatarUrl,
    (getFavoritesAmount() as favoritesAmountType).favoritesAmount
  );
  el.classList.toggle('active');
}

function checkStyleFavoriteItem(el: HTMLElement): void {
  const KEY_LOCAL_STORAGE: string = 'favoriteItems';

  const dataParse: Array<PlaceEdit> | null = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));

  if (dataParse.findIndex(item => +item.id === +el.dataset.id) !== -1) {
    el.classList.add('active');
  }
}

export function calcFavoritesAmount(): number {
  return JSON.parse(localStorage.getItem('favoriteItems')).length;
}

async function fetchReservationData(e: MouseEvent): Promise<void | Error> {
  try {
    const response = await fetch(URL_POST_RESERVATION_API);

    if (response.ok) {
      renderToast(
        {
          text: 'Данные о бронировании успешно отправлены на сервер!',
          type: 'success',
        },
        {
          name: 'Закрыть',
          handler: () => { },
        }
      );
    } else {
      renderToast(
        {
          text: "Ошибка HTTP: " + response.status + ". Cервер не может обработать запрос.",
          type: 'success',
        },
        {
          name: 'Закрыть',
          handler: () => { },
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
}

export function renderSearchResultsBlock(data: Array<Place>) {
  const renderList: Array<string> = [];

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const el = data[key];

      renderList.push(`
        <li class="result">
          <div class="result-container">
            <div class="result-img-container">
              <div class="favorites" data-id="${el.id}"></div>
              <img class="result-img" src="${el.image}" alt="${el.name}">
            </div>
            <div class="result-info">
              <div class="result-info--header">
                <p>${el.name}</p>
                <p class="price">${el.price}&#8381;</p>
              </div>
              <div class="result-info--map"><i class="map-icon"></i>${el.remoteness}км от вас</div>
              <div class="result-info--descr">${el.description}</div>
              <div class="result-info--footer">
                <div>
                  <button>Забронировать</button>
                </div>
              </div>
            </div>
          </div>
        </li>`);
    }
  }

  renderBlock(
    'search-results-block',
    `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    <ul class="results-list">
      ${renderList.join('')}
    </ul>
    `
  );

  Array.from(document.querySelectorAll('.favorites')).map((el: HTMLElement) => {
    el.addEventListener('click', (e) => toggleFavoriteItem(e));
    checkStyleFavoriteItem(el);
  });
  Array.from(document.querySelector('.results-list').querySelectorAll('button')).map((el: HTMLElement) => {
    el.addEventListener('click', (e) => fetchReservationData(e));
  })
}
