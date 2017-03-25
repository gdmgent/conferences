/*
* TwitterService: Twitter API Wrapper
* via resource URI
*/
var TwitterService = {
	"init": function() {
    this.OAUTH_PUBLIC_KEY = '_B2kGq6jsDyq7w7vnhkIcKfegME'; // OAuth key
    this.TWITTER_API_SEARCH = 'https://api.twitter.com/1.1/search/tweets.json?q='; // Twitter Search API endpoint
    this._twitterAPI = null; // Twitter API object after connection
    this._twitterAPIConnected = false; // Twitter API connected or not
	},
	"connect": function() {
    var that = this;

    return new Promise(function(resolve, reject) {
      OAuth.initialize(that.OAUTH_PUBLIC_KEY); // Initialize OAuth.io
      OAuth.popup('twitter')
        .done(function(result) {
          that._twitterAPI = result;
          that._twitterAPIConnected = true;
          resolve(result);
        })
        .fail(function (error) {
          that._twitterAPIConnected = false;
          reject(error);
        });
    });
  },
  "getTweetsBySearch": function(search) {
    var that = this;

    return new Promise(function(resolve, reject) {
      if(that._twitterAPI != null && that._twitterAPI != undefined && that._twitterAPIConnected == true) {
        var url = that.TWITTER_API_SEARCH + search;
        that._twitterAPI.get(url)
          .done(function(result) {
            resolve(result.statuses);
          })
          .fail(function (error) {
            reject(error);
          });
      } else {
        reject('Can\'t perform a Twitter search becaus the Twitter API is not connected!');
      }
    });
  }
};