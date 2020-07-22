const tabs = document.querySelector('.tabs');
const tabBtn = tabs.querySelectorAll('[role="tab"]');
const tabPanel = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

const handleTabClick = event => {
  // hide all tab panels
  tabPanel.forEach(panel => {
    panel.hidden = true;
  });

  // click all the tabs as unselected
  tabBtn.forEach(tab => {
    tab.setAttribute('aria-selected', false)
  });

  // mark the clicked tab as selectedP
  event.currentTarget.setAttribute('aria-selected', true);

  // find the associated tabPanel ans show it
  const { id } = event.currentTarget;
  //Method 1
  // const tabPanel = tabs.querySelector(`[aria-labelledby='${id}']`);
  // tabPanel.hidden = false;

  const tabPanels =tabPanel.find(panel => panel.getAttribute('aria-labelledby') === id);
  tabPanels.hidden = false;
};

tabBtn.forEach(button => button.addEventListener('click', handleTabClick));