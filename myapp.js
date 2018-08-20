// load InboxSKD to manipulate Gmail
InboxSDK.load(2, 'sdk_zfrank_c53eae5345').then(function(sdk){

  // the SDK has been loaded
  sdk.Lists.registerThreadRowViewHandler(function(ThreadRowView){

    // a ThreadRowView has come into existence
    ThreadRowView.addButton({
      title: "Vet'd Forwarding",
      iconUrl: 'https://getvetd.com/wp-content/uploads/2018/03/VetdLogo-Favicon.png',
      onClick: function(event) {
        function openEmail() {
          var button = document.getElementsByClassName("inboxsdk__thread_row_button")[0];
          button.setAttribute("class", "yX xY bqe");
          if (button.classList.contains("bqe")){
            return new Promise();
          }
        }
        openEmail().then(function() {
          var subject = event.threadRowView.getSubject();
          event.threadRowView.getThreadIDAsync().then(function(threadID){
            console.log(threadID);

            if (document.getElementsByClassName("ams bkG")[0]) {
              var fwdButton = document.getElementsByClassName("ams bkG")[0]
              console.log("IF" + fwdButton)
              eventFire(fwdButton)
            } else {
              function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
              }
              async function fwd() {
                await sleep(2000);
                var fwdButton = document.getElementsByClassName("ams bkG")[0];
                console.log("ELSE" + fwdButton);
                // fwdButton.fireEvent('onclick');
                // eventFire(fwdButton);
                var evObj = document.createEvent('Events');
                evObj.initEvent('click', true, false);
                fwdButton.dispatchEvent(evObj);
              }
              fwd();
            }
          }.bind(this));
        });
      },
    });

  });

});