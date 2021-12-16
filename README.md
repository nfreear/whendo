
[![Node.js CI][ci-img]][ci]

# whendo #

When a time-dependent condition is met, resolve a promise.

## Usage ##

```js
await whenDo(() => testIsTrue);
// ...
```

```js
await whenTimeout(() => window.L, 'Leaflet');

// Use Leaflet (L).
const map = L.map('map').setView([51.505, -0.09], 13);
```


```html
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
```

## License ##

* [MIT License](https://nfreear.mit-license.org/)


[ci]: https://github.com/nfreear/whendo/actions/workflows/node.js.yml
[ci-img]: https://github.com/nfreear/whendo/actions/workflows/node.js.yml/badge.svg
[_]: //
