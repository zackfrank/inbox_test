// InboxSDK.load(2, 'sdk_zfrank_c53eae5345').then(function(sdk){

//   // the SDK has been loaded, now do something with it!
//   sdk.Conversations.registerMessageViewHandler(function(messageView){

//     // a message view has come into existence, do something with it!
//     messageView.isLoaded().addToolbarButton({
//       section: MORE,
//       title: "Vetd Fwding",
//       iconUrl: '/icons/16.png',
//       onClick: function(event) {
//         event.messageView.insertTextIntoBodyAtCursor('Hello World!');
//       },
//       orderHint: 1
//     });

//   });

// });

//   <div 
//   id=":2s" 
//   class="T-I J-J5-Ji T-I-Js-IF W6eDmd ns T-I-ax7 L3" 
//   role="button" 
//   tabindex="0" 
//   aria-haspopup="false" 
//   aria-expanded="false" 
//   data-tooltip="Move to" 
//   aria-label="Move to" 
//   style="user-select: none;">
//     <div class="asa">
//       <div class="ase T-I-J3 J-J5-Ji">
//       </div>
//     </div>
//     <div class="G-asx T-I-J3 J-J5-Ji" aria-hidden="true">
//       &nbsp;
//     </div>
//   </div>

InboxSDK.load(2, 'sdk_zfrank_c53eae5345').then(function(sdk){

  // the SDK has been loaded, now do something with it!
  sdk.Compose.registerComposeViewHandler(function(composeView){

    // a compose view has come into existence, do something with it!
    composeView.addButton({
      title: "My Nifty Button!",
      iconUrl: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/256/sign-check-icon.png',
      onClick: function(event) {
        event.composeView.insertTextIntoBodyAtCursor('Hello World!');
      },
    });

  });

});