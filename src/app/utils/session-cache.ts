const SessionCache = (primaryKey: string) => {
  return {
    get: () => {
      return sessionStorage.getItem(primaryKey);
    },
    set: (data: string) => {
      sessionStorage.setItem(primaryKey, data);
    },
  };
};

export default SessionCache;
