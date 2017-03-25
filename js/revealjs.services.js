/*
* RevealService: Reveal.js Wrapper
* via resource URI
*/
var RevealService = {
	"init": function() {
    // Reveal Transitions
    this._revealTransitions = [
      'none',
      'concave',
      'convex',
      'fade',
      'slide',
    ];
    this._slideSpeed = 16000;
    this._isAutomated = false;

    this.initReveal();
	},
  "initReveal": function() {
    Reveal.initialize({
      controls: true,
      progress: true,
      history: true,
      center: true,
      transition: this._revealTransitions[2],

      // Optional reveal.js plugins
      dependencies: [
          { src: window.baseurl + '/vendor/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
          { src: window.baseurl + '/vendor/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
          { src: window.baseurl + '/vendor/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
          { src: window.baseurl + '/vendor/reveal.js/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
          { src: window.baseurl + '/vendor/reveal.js/plugin/zoom-js/zoom.js', async: true },
          { src: window.baseurl + '/vendor/reveal.js/plugin/notes/notes.js', async: true }
      ]
    }); 

    return new Promise(function(resolve, reject) {
      window.setTimeout(function() {
        resolve('Reveal.js initialized!');

        var slidesFull = document.querySelectorAll('.slides--fullscreen section');
        if(slidesFull != null && slidesFull.length > 0)
        {
          slidesFull.forEach(function(slide) {
            slide.style.width = '100%';
            slide.style.height = '100%';
            slide.style.top = '0px';
            if (slide.getAttribute("data-ahs-background-image") !== null && slide.querySelector('.ahs-background-image') == null) {
              var img = document.createElement('span');
              img.setAttribute('class', 'ahs-background-image');
              img.style.background = "url(http://i.huffpost.com/gen/1698265/images/o-MATH-ON-CHALKBOARD-facebook.jpg)";
              slide.insertBefore(img, slide.firstElementChild);
            }
          });
    }

      }, 1500);
    });

  },
  "updateReveal": function() {
    Reveal.initialize();
    return new Promise(function(resolve, reject) {
      window.setTimeout(function() {
        Reveal.sync();
        window.setTimeout(function() {
          resolve('Reveal.js updated!');
        }, 500);
      }, 1000);
    });
  },
  "startAutomation": function() {
    if(this._isAutomated == false) {
      this._isAutomated = true;
      this.automateSlide();
    }
  },
  "stopAutomation": function() {
    _isAutomated = false;
  },
  "nextSlide": function() {
		if(!Reveal.isLastSlide() && Reveal.nextFragment() === false ) {
			if( Reveal.availableRoutes().down ) {
				Reveal.navigateDown();
			}
			else {
				Reveal.navigateRight();
			}
		} else {
      this.updateReveal();
    }
  },
  "automateSlide": function() {
    var that = this;
    window.setTimeout(function() {
      if(that._isAutomated == true) {
        that.nextSlide();
        that.automateSlide();
      }
    }, this._slideSpeed);
  }
};