import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';

const url = 'https://hunter.polkowice.pl/wp-json/wp/v2/custom/visited';

export const observable$ = ajax.getJSON(url)
  .pipe(
    map((response) => response),
    catchError((error) => of(error)),
  );

//  helper filter

export const filterLocation = (res) => {
  const result = res.map(({ location, id }) => {
    const start = location.search(/\bPolska/);
    return {
      id,
      location: start !== -1 ? location.slice(start + 7, location.length) : [],
    };
  });
  return result;
};
