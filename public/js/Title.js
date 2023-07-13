// Function to change the title when the tab becomes inactive
function handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      document.title = 'Come back!!!';
    } else {
      document.title = '新正陽';
    }
  }
  
  // Event listener for the visibilitychange event
  document.addEventListener('visibilitychange', handleVisibilityChange);
  