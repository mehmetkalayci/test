(function() {
    function loadScript(src, callback) {
      const script = document.createElement('script');
      script.src = src;
      script.onload = callback;
      document.head.appendChild(script);
    }
  
    function mountWidget() {
      const widgetContainer = document.createElement('div');
      widgetContainer.id = 'my-widget-container';
      document.body.appendChild(widgetContainer);
  
      window.mountWidget('#my-widget-container');
    }
  
    loadScript('https://cdn.jsdelivr.net/npm/vue@3.2.45/dist/vue.global.prod.js', function() {
      loadScript('https://test-vsnd.onrender.com/my-widget.umd.js', mountWidget);
    });
  })();