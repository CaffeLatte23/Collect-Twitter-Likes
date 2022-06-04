
function sendSlackNotify (message){
  var options = {
    "method" : "POST",
    "headers": {"Content-type": "application/json"},
    "payload" : '{"text":"' + message + '"}'
  };
  UrlFetchApp.fetch(property.getProperty('slack_url'), options);
}

const words = {
  vue: ["vue", "Vue", "nuxt", "Nuxt", "vite", "Vite"],
  react: ["react", "React"] //nextは英単語と混同する可能性があるため、一旦外す
}


