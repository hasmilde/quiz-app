angular.module('starter.services.mongoservice', [])

.factory('mongoservice', function($http, $q, choiceservice){
    
    
  return {
      
      sendRegister:function(input){
          console.log("{"+input+"}")
          
        //   var req = {
        //       method: 'POST',
        //       url: '/blockchain/email/',
        //       headers: {
        //           'Content-Type': 'application/json'
        //       },
        //       data: input
        //   }
        //   console.log(req);
          
        //   $http(req).then( 
        //       function successCall(res){
        //       console.log(res);
        //   }, 
        //       function errorCall(res){
        //       console.log(res);
        //   });
          
          $http.post('/blockchain/email/', 
              angular.toJson({email: input})
            )
      },
      
      sendAnswers:function(){
          choiceservice.answers;
          console.log(choiceservice.answers);
          $http.post('/blockchain/answer/',
              angular.toJson({answers: input})
            )
      }
   
}})