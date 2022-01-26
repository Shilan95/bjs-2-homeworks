function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(",");
    const valueInCache = cache.find((item) => item.hash === hash);
    if (valueInCache) {
      console.log("Из кэша: " + valueInCache.result);
      return "Из кэша: " + valueInCache.result;
    }
    let result = func(...args);
    if (cache.length >= 5) {
      cache.shift();
    }
    cache.push({ hash, result });
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }

  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let timeout;

    function wrapper(...args) {
        if (!timeout) {
            func.apply(this, args);
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, ms);
    }

    return wrapper;
}

function debounceDecorator2(func, ms) {
  let timeout;
  wrapper.count = 0;

    function wrapper(...args) {
        if (!timeout) {
            func.apply(this, args);
            wrapper.count++;
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
            wrapper.count++;
        }, ms);
    }

    return wrapper;
}

