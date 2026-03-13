let count = 0;
let listeners = [];

export const counterStore = {

  getSnapshot: () => count,

  subscribe: (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },

  increment: () => {
    count++;
    listeners.forEach(listener => listener());
  }

};