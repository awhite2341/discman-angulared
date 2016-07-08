(function(){
app.controller('ContentAdminController', ['$http', function($http) {
    this.contentAdmin = data;

    
    /*var results = this;
    results = [ ];
    var req = {
        "requestType": "getone"
        , "objectType": "Content"
        , "id": "1"
    };
    $http.get('http://mops-webservice-test.us-west-2.elasticbeanstalk.com/mop', req).success(function(data){
       input.ContentName = data;
    });*/
}]);

    var data = {
        ContentName: 'My First Content',
        Audiences: [{ text: "Client Piece", isChecked: "true" },
                    { text: "FTP Use Only", isChecked: "false" },
                    { text: "Internal Use", isChecked: "false" }]
    }
})();