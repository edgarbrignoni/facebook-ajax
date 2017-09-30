// appId      : '109649152981486',

var FacebookApp = function() {
    
    var theReturn = {};

    theReturn.connect = function(){
        FB.init({
          appId      : '109649152981486',
          cookie     : true,
          xfbml      : true,
          version    : 'v2.8'
        });
        
        theReturn.checkForLogin();
    }
    
    theReturn.checkForLogin = function(){
        FB.getLoginStatus(function(response) {
            
            // console.log(response);
            if(response.status != "connected")
            {
                //the user has not been authorized, we need to prompt for login
                FB.login();
                document.querySelector('#logoutBtn').style.display = "none";
            }
            else
            {
              document.querySelector('#facebookLoginButton').style.display = "none";
              document.querySelector('#logoutBtn').style.display = "block";
              theBegginingOfEverything();
            }
        });
    }

    theReturn.logout = function(){
        FB.logout(function(response) {
          // user is now logged out
          window.location.reload();
        });    
    }
    
    function theBegginingOfEverything(){
        
        getAlbums();
    }
    
    function getProfilePicture(){
        FB.api(
            "/me/picture",
            function (response) {
              console.log(response);
              if (response && !response.error) {
                /* handle the result */
                document.querySelector('#content').innerHTML = "<img src='"+response.data.url+"' />";
              }
            }
        );
    }
    
    function getAlbums(){
        FB.api(
            "/me/albums",
            function (response) {
                console.log(response);
              if (response && !response.error) {
                /* handle the result */
              }
            }
        );
    }
    
    return theReturn;
    
};