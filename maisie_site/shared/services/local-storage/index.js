import cookie from 'cookie';

export const loadState = (cookies) => {
  try {
    const user = cookie.parse(cookies || '');
    return {
      user: JSON.parse(user.user)
    }
  } catch(e) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    document.cookie = cookie.serialize('user', JSON.stringify(state.user), {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/'
    });
  } catch(e) {
    return undefined
  }
}