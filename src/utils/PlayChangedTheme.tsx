function PlayChangedTheme() {
  new Audio('/sounds/button-click.wav').play();

  {
    Notification.permission === 'granted' &&
      new Notification('🥳 Changed Theme', {
        body: 'Wow! You has a new Theme! 🎉',
      });
  }
}

export default PlayChangedTheme;
