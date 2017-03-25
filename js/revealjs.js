function ready(cb) {
    /in/.test(document.readyState)
    ? setTimeout(ready.bind(null, cb), 90)
    : cb();
};

ready(function(){

  var App = {
    "init": function() {
      this._revealService = RevealService; // Clone RevealService object
      this._revealService.init(); // Initialize the RevealService
      this._appInitialized = false; // App initialized

      var that = this;

      this._revealService.initReveal().then(
        function(rjs_result) {
          console.log(rjs_result);
          that._appInitialized = true;
          that.addEventListeners();
        },
        function(rjs_error) {
          console.log(rjs_error);
          that._appInitialized = false;
        }
      );
    },
    "addEventListeners": function() {
    }
  };
  App.init();

});