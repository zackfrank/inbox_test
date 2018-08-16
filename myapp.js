// load InboxSKD to manipulate Gmail
InboxSDK.load(2, 'sdk_zfrank_c53eae5345').then(function(sdk){

  // the SDK has been loaded
  sdk.Lists.registerThreadRowViewHandler(function(ThreadRowView){

    // a ThreadRowView has come into existence
    ThreadRowView.addButton({
      title: "Vet'd Forwarding",
      iconUrl: 'https://getvetd.com/wp-content/uploads/2018/03/VetdLogo-Favicon.png',
      onClick: function(event) {
        var subject = event.threadRowView.getSubject();
        event.threadRowView.getThreadIDAsync().then(function(threadID){
          console.log(threadID);
          document.getElementsByClassName("inboxsdk__thread_row_button")[0].setAttribute("class", "yX xY");
          // nav to URL below, scrape to get content of email and save as body
          // div.ii.gt (classes for email body)
          // "https://mail.google.com/mail/u/0/#inbox/" + threadID
          // sdk.Compose.openNewComposeView().then(function(composeView){
            // composeView.setToRecipients(["frank.zack@gmail.com"]);
            // composeView.setSubject("Vet'd FWD: " + subject)
            // sdk.Conversations.registerMessageViewHandler(function(MessageView){
            //   console.log(MessageView.getBodyElement());
            // })
            // var body = document.getElementsByClassName("ii gt")[0];
            // composeView.insertTextIntoBodyAtCursor(body.innerHTML);
            // initiate fwd of email
          if (document.getElementsByClassName("ams bkG")[0]) {
            var fwdButton = document.getElementsByClassName("ams bkG")[0]
            fwdButton.fireEvent('onclick');
          } else {
            function sleep(ms) {
              return new Promise(resolve => setTimeout(resolve, ms));
            }
            async function fwd() {
              await sleep(2000);
              var fwdButton = document.getElementsByClassName("ams bkG")[0];
              fwdButton.fireEvent('onclick');
            }
            fwd();
          }
          // });
        }.bind(this));
      },
    });

  });

});