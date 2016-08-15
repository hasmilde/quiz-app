angular.module('starter.services.choiceservice', [])

.factory('choiceservice', function($state, $q, $log, $http){
    
    var states={state0:{email:"",
                        answersgood: 0},
                      state1:{question: "What does the blockchain network look like?",
                      answers: ["Distributed","Decentralized", "Centralized"],
                      answer: "",
                        answersgood: 0},
                      state2:{question: "Why are some people afraid of the Internet of Things?",
                      answers:["Robots could take over the world.","You will have less privacy.", "You are losing control over your live.", "All of the above."],
                      answer: "",
                        answersgood: 0},
                      state3:{question: "What is the size of a block in the original bitcoin blockchain?",
                      answers:["1MB","1KB", "20MB"],
                      answer: "",
                        answersgood: 0},
                      state4:{question: "How many transactions can you retrieve from the blockchain?",
                      answers:["All of them.","The last ten transactions.", "Only the last transaction."],
                      answer: "",
                        answersgood: 0},
                      state5:{question: "What could be part of the Internet of Things?",
                      answers:["Only electronic devices","Everything you can put a chip in", "Only Apple products"],
                      answer: "",
                        answersgood: 0},
                      state6:{question: "What is the cost of one transaction in an Ethereum blockchain?",
                      answers:["The Miner decides","It's free!", "$1", "0.0001 bitcoin"],
                      answer: "",
                        answersgood: 0},
                      state7:{question: "Who is the administrator of the Internet of Things?",
                      answers:["Google","Facebook", "Nobody"],
                      answer: "",
                        answersgood: 0}}
    
  return {
    affirmative:  function(){
        var current = $state.current.name
        var nr = parseInt(current.charAt(5) )+ 1
        console.log("state", nr)
      $state.go('state' + nr )
    } ,
    changed: function(){
      //TODO if has value -> angry robot, else save value
    } ,
    
   getQuiz: function(){  
    // states={state0:{email:""},
    //                   state1:{question: "What does the blockchain network look like?",
    //                   answers: ["Distributed","Decentralized", "Centralized"],
    //                   answer: ""},
    //                   state2:{question: "Why are some people afraid of the Internet of Things?",
    //                   answers:["Robots could take over the world.","You will have less privacy.", "You are losing control over your live.", "All of the above."],
    //                   answer: ""},
    //                   state3:{question: "What is the size of a block in the original bitcoin blockchain?",
    //                   answers:["1MB","1KB", "20MB"],
    //                   answer: ""},
    //                   state4:{question: "How many transactions can you retrieve from the blockchain?",
    //                   answers:["All of them.","The last ten transactions.", "Only the last transaction."],
    //                   answer: ""},
    //                   state5:{question: "What could be part of the Internet of Things?",
    //                   answers:["Only electronic devices","Everything you can put a chip in", "Only Apple products"],
    //                   answer: ""},
    //                   state6:{question: "What is the cost of one transaction in an Ethereum blockchain?",
    //                   answers:["The Miner decides","It's free!", "$1", "0.0001 bitcoin"],
    //                   answer: ""},
    //                   state7:{question: "Who is the administrator of the Internet of Things?",
    //                   answers:["Google","Facebook", "Nobody"],
    //                   answer: ""}}      
       return states[$state.current.name];
   },
   
   confirm: function (choice){
       statenr=$state.current.name;
       states[statenr].answer=choice;
       console.log(states);
       console.log(statenr);
       if (statenr=='state1'){
           document.getElementById("quizTwo").src="../img/blue_dot.png";
            if (states[statenr].answer=='A'){
                document.getElementById("quizOne").src = "../img/goodDot.png";
                states[statenr].answersgood=states.state0.answersgood+1;
            } else{
                document.getElementById("quizOne").src = "../img/badDot.png";
                states[statenr].answersgood=states.state0.answersgood;
            }
       }
       if (statenr=='state2'){
           document.getElementById("quizThree").src="../img/blue_dot.png";
            if (states[statenr].answer=='D'){
                document.getElementById("quizTwo").src = "../img/goodDot.png";
                states[statenr].answersgood=states.state1.answersgood+1;
            } else{
                document.getElementById("quizTwo").src = "../img/badDot.png";
                states[statenr].answersgood=states.state1.answersgood;
            }
       }
       if (statenr=='state3'){
           document.getElementById("quizFour").src="../img/blue_dot.png";
            if (states[statenr].answer=='A'){
                document.getElementById("quizThree").src = "../img/goodDot.png";
                states[statenr].answersgood=states.state2.answersgood+1;
            } else{
                document.getElementById("quizThree").src = "../img/badDot.png";
                states[statenr].answersgood=states.state2.answersgood;
            }
       }
       if (statenr=='state4'){
           document.getElementById("quizFive").src="../img/blue_dot.png";
            if (states[statenr].answer=='A'){
                document.getElementById("quizFour").src = "../img/goodDot.png";
                states[statenr].answersgood=states.state3.answersgood+1;
            } else{
                document.getElementById("quizFour").src = "../img/badDot.png";
                states[statenr].answersgood=states.state3.answersgood;
            }
       }
       if (statenr=='state5'){
           document.getElementById("quizSix").src="../img/blue_dot.png";
            if (states[statenr].answer=='B'){
                document.getElementById("quizFive").src = "../img/goodDot.png";
                states[statenr].answersgood=states.state4.answersgood+1;
            } else{
                document.getElementById("quizFive").src = "../img/badDot.png";
                states[statenr].answersgood=states.state4.answersgood;
            }
       }
       if (statenr=='state6'){
           document.getElementById("quizSeven").src="../img/blue_dot.png";
            if (states[statenr].answer=='A'){
                document.getElementById("quizSix").src = "../img/goodDot.png";
                states[statenr].answersgood=states.state5.answersgood+1;
            } else{
                document.getElementById("quizSix").src = "../img/badDot.png";
                states[statenr].answersgood=states.state5.answersgood;
            }
       }
       if (statenr=='state7'){
            if (states[statenr].answer=='C'){
                document.getElementById("quizSeven").src = "../img/goodDot.png";
                states[statenr].answersgood=states.state6.answersgood+1;
                $http.post('/blockchain/answer/',
              {answers: states}
            )
            } else{
                document.getElementById("quizSeven").src = "../img/badDot.png";
                states[statenr].answersgood=states.state6.answersgood;
                $http.post('/blockchain/answer/',
              {answers: states}
            )
            }
       }
       
   },
   
   register: function (email){
       statenr=$state.current.name;
       states[statenr].email=email;
       console.log(states);
   }
}})
