/* InboxSDK */

InboxSDK.load(2, 'sdk_zfrank_c53eae5345').then(function(sdk) {

  // the SDK has been loaded, now do something with it!
  sdk.Lists.registerThreadRowViewHandler(function(ThreadRowView) {

    ThreadRowView.addButton({
      title: "Vet'd Forwarding",
      iconUrl: 'https://getvetd.com/wp-content/uploads/2018/03/VetdLogo-Favicon.png',
      onClick: function(event) {
        sdk.Compose.openNewComposeView().then(function(composeView) {
        // a compose view has come into existence
          var subject = event.threadRowView.getSubject();
          var contacts = event.threadRowView.getContacts();
          composeView.insertTextIntoBodyAtCursor("Sender Name: " + contacts[0]["name"] + "\nSender Email Address: " + contacts[0]["emailAddress"]);
          composeView.setToRecipients(["frank.zack@gmail.com"]);
          composeView.setSubject("Vet'd FWD: " + subject);
          setTimeout(function() {
            composeView.send(sendAndArchive = true);
            setTimeout(function() {
              sdk.Widgets.showModalView({
                el: "<h2>Email has been forwarded to Vet'd</h2>"
              });
            }, 0);
          }, 0);
        });
      }

    });

  });

});