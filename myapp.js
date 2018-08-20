InboxSDK.load(2, 'sdk_zfrank_c53eae5345').then(function(sdk){

  // the SDK has been loaded, now do something with it!
  sdk.Lists.registerThreadRowViewHandler(function(ThreadRowView){

    // a compose view has come into existence, do something with it!
    ThreadRowView.addButton({
      title: "Vet'd Forwarding",
      iconUrl: 'https://getvetd.com/wp-content/uploads/2018/03/VetdLogo-Favicon.png',
      onClick: function(event) {
        sdk.Compose.openNewComposeView().then(function(composeView){
          var subject = event.threadRowView.getSubject();
          var contacts = event.threadRowView.getContacts();
          let insertText = function() {
            return new Promise(function(resolve, reject) {
              composeView.insertTextIntoBodyAtCursor("Sender Name: " + contacts[0]["name"] + "\nSender Email Address: " + contacts[0]["emailAddress"]);
              if (composeView.getTextContent().length > 5) {
                resolve();
              }
            });
          }
          composeView.setToRecipients(["frank.zack@gmail.com"]);
          composeView.setSubject("Vet'd FWD: " + subject);
          insertText().then(function() {
            composeView.send(sendAndArchive = true);
          });
        });
      }

    });

  });
});