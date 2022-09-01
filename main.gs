const property = PropertiesService.getScriptProperties();

const words = {
  vue: ["vue", "Vue", "nuxt", "Nuxt", "vite", "Vite"],
  react: ["react", "React", "Next.js", "next.js","nextjs" ] //nextは英単語と混同する可能性があるため、一旦外す
}

function postTwitterLikesToClient(key){
  const data = getTwitterLikes();
  const keywords = words[key]

  const filterList = data.filter((element)=>{
    return includeWordsCheck(element.text, keywords)
  })
  
  filterList.forEach((element)=> {
    if(new Date(element.created_at).toDateString() == new Date().toDateString() )
    sendDiscordMessage(`https://twitter.com/${element.author_id}/status/${element.id}`)
  })
}

function includeWordsCheck(text, words) {
  return words.some((element)=> text.includes(element))
}

function sendDiscordMessage (message){
  const options = {
    "method" : "POST",
    "headers": {"Content-type": "application/json"},
    "payload" : `{"content":"${message}"}`
  };
  UrlFetchApp.fetch(property.getProperty('discord_url'), options);
}

