const property = PropertiesService.getScriptProperties();

function postTwitterLikesToSlack(key){
  const data = getTwitterLikes();
  const keywords = words[key]

  const filterList = data.filter((element)=>{
    return includeWordsCheck(element.text, keywords)
  })
  
  filterList.forEach((element)=> {
    if(new Date(element.created_at).toDateString() == new Date().toDateString() )
    postSlackbot("#collect-twitter-like", `https://twitter.com/${element.author_id}/status/${element.id}`, key)
  })
}

function includeWordsCheck(text, words) {
  let bIncluded = false;
  for(const word of words){
    bIncluded = bIncluded || text.includes(word)
  }
  return bIncluded
}

