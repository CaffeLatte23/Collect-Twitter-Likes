function getTwitterLikes() {
  const headers = {"Authorization": `Bearer ${property.getProperty('twitter_token')}`}
  const url = `https://api.twitter.com/2/users/${property.getProperty('twitter_user_id')}/liked_tweets?tweet.fields=${"author_id,created_at,text"}`

  var response = UrlFetchApp.fetch(url, {"method": "GET", "headers": headers})
  return JSON.parse(response.getContentText()).data;
}
