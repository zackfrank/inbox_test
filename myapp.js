InboxSDK.load(2, 'sdk_zfrank_c53eae5345').then(function(sdk){

  // the SDK has been loaded, now do something with it!
  sdk.Lists.registerThreadRowViewHandler(function(ThreadRowView){

    // a compose view has come into existence, do something with it!
    ThreadRowView.addButton({
      title: "Vet'd Forwarding",
      iconUrl: 'https://getvetd.com/wp-content/uploads/2018/03/VetdLogo-Favicon.png',
      onClick: function(event) {
        var subject = event.threadRowView.getSubject();
        event.threadRowView.getThreadIDAsync().then(function(threadID){
          console.log(threadID);
          sdk.Compose.openNewComposeView().then(function(composeView){
            composeView.insertTextIntoBodyAtCursor("Hello World");
            composeView.setToRecipients(["frank.zack@gmail.com"]);
            composeView.setSubject("Vet'd FWD: " + subject)
          });
        }.bind(this));
      },
    });

  });

});