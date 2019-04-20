/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for NYT API based on form inputs
 */
  // API doesn't have a "limit" parameter, so we have to do this ourselves
var numArticles = 10
// Function to empty out the articles
function clear() {
  $("#article-section").empty();
}

function buildQueryURL() {
   // Grab text the user typed into the search input, add to the queryParams object
  var queryPara = $("#search-term")
  .val()
  .trim();
  
  // queryURL is the url we'll use to query the API
    var queryURL = `https://newsapi.org/v2/everything?q=${queryPara}&domains=nytimes.com&sortBy=publishedAt&apiKey=ee6ef7c523284d20a68b8ac070bfe2a5`;
  
  
    return queryURL
  }
  
  $("#run-search").on("click", function() {
    clear();
    // Build the query URL for the ajax request to the NYT API
    var wQueryURL = buildQueryURL();
    console.log(wQueryURL)
    // Make the AJAX request to the API - GETs the JSON data at the queryURL.
    // The data then gets passed as an argument to the updatePage function
    $.ajax({
      url: wQueryURL,
      method: "GET"
    })
    .then(function(response){
     console.log(response)
     for (var i = 0; i < numArticles; i++) {
      // Get specific article info for current index
      var article = response.articles[i];
  
      // Increase the articleCount (track article # - starting at 1)
      var articleCount = i + 1;
  
      // Create the  list group to contain the articles and add the article content for each
      var $articleList = $("<ul>");
      $articleList.addClass("list-group");
  
      // Add the newly created element to the DOM
      $("#article-section").append($articleList);
  
      // If the article has a headline, log and append to $articleList
      var headline = article.title;
      var $articleListItem = $("<li class='list-group-item articleHeadline'>");
  
      if (headline) {
        console.log(headline);
        $articleListItem.append(
          "<span class='label label-primary'>" +
            articleCount +
            "</span>" +
            "<strong> " +
            headline +
            "</strong>"
        );
      }
  
      // If the article has a byline, log and append to $articleList
      var byline = article.author;
  
      if (byline) {
        console.log(byline);
        $articleListItem.append("<h5>" + byline + "</h5>");
      }
  
      // Log published date, and append to document if exists
      var pubDate = article.publishedAt;
      console.log(article.publishedAt);
      if (pubDate) {
        $articleListItem.append("<h5>" + article.publishedAt+ "</h5>");
      }
  
      // Append and log url
      $articleListItem.append("<a href='" + article.url + "'>" + article.url + "</a>");
      console.log(article.url);
  
      // Append the article
      $articleList.append($articleListItem);
    }
    })
  });
  
  

//WSJ
//queryURL is the url we'll use to query the API
function buildWSJQueryURL() {
  
  var queryParams = $("#search-term")
  .val()
  .trim();
  var wQueryURL = `https://newsapi.org/v2/everything?q=${queryParams}&domains=wsj.com&sortBy=publishedAt&apiKey=ee6ef7c523284d20a68b8ac070bfe2a5`
  console.log (wQueryURL);
  return wQueryURL
}

// .on("click") function 
$("#wsj-search").on("click", function() {
  clear();
  // Build the query URL for the ajax request to the NYT API
  var wQueryURL = buildWSJQueryURL();
  console.log(wQueryURL)
  // Make the AJAX request to the API - GETs the JSON data at the queryURL.
  // The data then gets passed as an argument to the updatePage function
  $.ajax({
    url: wQueryURL,
    method: "GET"
  })
  .then(function(response){
   console.log(response)
   for (var i = 0; i < numArticles; i++) {
    // Get specific article info for current index
    var article = response.articles[i];

    // Increase the articleCount (track article # - starting at 1)
    var articleCount = i + 1;

    // Create the  list group to contain the articles and add the article content for each
    var $articleList = $("<ul>");
    $articleList.addClass("list-group");

    // Add the newly created element to the DOM
    $("#article-section").append($articleList);

    // If the article has a headline, log and append to $articleList
    var headline = article.title;
    var $articleListItem = $("<li class='list-group-item articleHeadline'>");

    if (headline) {
      console.log(headline);
      $articleListItem.append(
        "<span class='label label-primary'>" +
          articleCount +
          "</span>" +
          "<strong> " +
          headline +
          "</strong>"
      );
    }

    // If the article has a byline, log and append to $articleList
    var byline = article.author;

    if (byline) {
      console.log(byline);
      $articleListItem.append("<h5>" + byline + "</h5>");
    }

    // Log published date, and append to document if exists
    var pubDate = article.publishedAt;
    console.log(article.publishedAt);
    if (pubDate) {
      $articleListItem.append("<h5>" + article.publishedAt+ "</h5>");
    }

    // Append and log url
    $articleListItem.append("<a href='" + article.url + "'>" + article.url + "</a>");
    console.log(article.url);

    // Append the article
    $articleList.append($articleListItem);
  }
  })
});


//BBC
//queryURL is the url we'll use to query the API
function buildBQueryURL() {
  
  var queryParam = $("#search-term")
  .val()
  .trim();

  var bQueryURL = `https://newsapi.org/v2/everything?q=${queryParam}&domains=bbc.co.uk&sortBy=publishedAt&apiKey=ee6ef7c523284d20a68b8ac070bfe2a5`
  console.log (bQueryURL);
  return bQueryURL
}

// .on("click") function 
$("#bbc-search").on("click", function() {
  clear();
  // Build the query URL for the ajax request to the NYT API
  var bQueryURL = buildBQueryURL();
  console.log(bQueryURL)
  // Make the AJAX request to the API - GETs the JSON data at the queryURL.
  // The data then gets passed as an argument to the updatePage function
  $.ajax({
    url: bQueryURL,
    method: "GET"
  })
  .then(function(response){
   console.log(response)
   for (var i = 0; i < numArticles; i++) {
    // Get specific article info for current index
    var article = response.articles[i];

    // Increase the articleCount (track article # - starting at 1)
    var articleCount = i + 1;

    // Create the  list group to contain the articles and add the article content for each
    var $articleList = $("<ul>");
    $articleList.addClass("list-group");

    // Add the newly created element to the DOM
    $("#article-section").append($articleList);

    // If the article has a headline, log and append to $articleList
    var headline = article.title;
    var $articleListItem = $("<li class='list-group-item articleHeadline'>");

    if (headline) {
      console.log(headline);
      $articleListItem.append(
        "<span class='label label-primary'>" +
          articleCount +
          "</span>" +
          "<strong> " +
          headline +
          "</strong>"
      );
    }

    // If the article has a byline, log and append to $articleList
    var byline = article.author;

    if (byline) {
      console.log(byline);
      $articleListItem.append("<h5>" + byline + "</h5>");
    }

    // Log published date, and append to document if exists
    var pubDate = article.publishedAt;
    console.log(article.publishedAt);
    if (pubDate) {
      $articleListItem.append("<h5>" + article.publishedAt+ "</h5>");
    }

    // Append and log url
    $articleListItem.append("<a href='" + article.url + "'>" + article.url + "</a>");
    console.log(article.url);

    // Append the article
    $articleList.append($articleListItem);
  }
  })
});