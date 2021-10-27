import { renderBlock } from './lib.js';

export function renderSearchFormBlock(dateBegin?: string, dateFinish?: string) {
  function calcDate(y: number, m: number, d: number): string {
    const currentTime = new Date();
    return formatDate(
      new Date(
        currentTime.getFullYear() + y,
        currentTime.getMonth() + m,
        m !== 0 && d === 0 ? 0 : currentTime.getDate() + d
      )
        .toLocaleDateString());
  }
  function formatDate(date: string): string {
    return date.split('.').reverse().join('-');
  }

  const minTimeSelect = calcDate(0, 0, 0);
  const maxTimeSelect = calcDate(0, 2, 0);
  const defaultDateBegin = dateBegin ? formatDate(dateBegin) : calcDate(0, 0, 1);
  const defaultDateFinish = dateFinish ? formatDate(dateFinish) : calcDate(0, 0, 3);

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${defaultDateBegin}" min="${minTimeSelect}" max="${maxTimeSelect}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${defaultDateFinish}" min="${defaultDateBegin}" max="${maxTimeSelect}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );
}