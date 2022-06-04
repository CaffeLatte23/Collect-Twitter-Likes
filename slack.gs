function postSlackbot(channelId, message, key) {
  //ライブラリから導入したSlackAppを定義し、トークンを設定する
  const slackApp = SlackApp.create(property.getProperty('twitter_info_app_token'));

  //SlackAppオブジェクトのpostMessageメソッドでボット投稿を行う
  slackApp.chatPostMessage(channelId, message , {'thread_ts': property.getProperty(`${key}_thread_ts`)})
}

function InitialpostSlackbot() {
  //ライブラリから導入したSlackAppを定義し、トークンを設定する
  const slackApp = SlackApp.create(property.getProperty('twitter_info_app_token'));
  //Slackボットがメッセージを投稿するチャンネルを定義する
  const channelId = "#collect-twitter-like";

  //SlackAppオブジェクトのpostMessageメソッドでボット投稿を行う
  console.log(slackApp.chatPostMessage(channelId, '【React, Next】'))
}
