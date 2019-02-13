export const loadState = () => {
  try {
    // return cookie.parse(document.cookie || '');
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch(e) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    // document.cookie = cookie.serialize('state', JSON.stringify(state), {
    //   maxAge: 30 * 24 * 60 * 60 // 30 days
    // });
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(e) {
    return undefined
  }
}