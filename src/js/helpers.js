export function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

export function loadFromLS(key, defaultValue) {
  const loadData = localStorage.getItem(key);
  try {
    const parsedData = JSON.parse(loadData);
    return parsedData || defaultValue;
  } catch {
    return loadData || defaultValue;
  }
}

//!================================================
