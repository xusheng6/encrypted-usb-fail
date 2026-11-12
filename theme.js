const toggle = document.querySelector('.theme-toggle');
const label = document.querySelector('.theme-toggle-label');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
function currentTheme() {
  return document.documentElement.dataset.theme || (systemDark.matches ? 'dark' : 'light');
}
function updateLabel() {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  label.textContent = next === 'dark' ? 'Dark' : 'Light';
  toggle.setAttribute('aria-label', `Switch to ${next} theme`);
  toggle.title = `Switch to ${next} theme`;
}
toggle.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch {}
  updateLabel();
});
systemDark.addEventListener('change', updateLabel);
updateLabel();
