function setTheme() {
    const root = document.documentElement;
    //root.className = "dark";
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    
    document.querySelector('.theme-name').textContent = newTheme;
  }
  
  document.querySelector('.theme-toggle').addEventListener('click', setTheme);





  