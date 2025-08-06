// This file helps with client-side routing in production

// Check if the browser supports the History API
if (window.history && window.history.pushState) {
  // Handle popstate events (back/forward navigation)
  window.addEventListener('popstate', function() {
    // Reload the page to ensure proper route handling
    window.location.reload();
  });

  // Intercept all link clicks
  document.addEventListener('click', function(event) {
    // Find closest anchor tag
    let anchor = event.target.closest('a');
    
    // If it's an internal link
    if (anchor && anchor.href.startsWith(window.location.origin) && !anchor.hasAttribute('download') && anchor.target !== '_blank') {
      // Prevent default navigation
      event.preventDefault();
      
      // Get the path
      const path = anchor.href.replace(window.location.origin, '');
      
      // Update the URL
      window.history.pushState({}, '', path);
      
      // Reload the page to ensure proper route handling
      window.location.reload();
    }
  });
}

// Add a global error handler
window.addEventListener('error', function(event) {
  console.error('Global error caught:', event.error);
  
  // If the app fails to load, redirect to fallback page
  if (document.body.children.length === 0 || document.body.innerHTML.trim() === '') {
    window.location.href = '/fallback.html';
  }
});

// Check if the app has loaded properly after a timeout
setTimeout(function() {
  const appRoot = document.getElementById('root');
  if (!appRoot || appRoot.children.length === 0) {
    console.error('App failed to load properly');
    window.location.href = '/fallback.html';
  }
}, 5000); // 5 second timeout