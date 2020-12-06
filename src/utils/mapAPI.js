import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import visited from '../constants/apiUrls';

export const observable$ = ajax.getJSON(visited)
  .pipe(
    map((response) => response),
    catchError((error) => of(error)),
  );

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
