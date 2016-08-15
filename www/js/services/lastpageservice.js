angular.module('starter.services.lastpageservice', [])

.factory('lastpageservice', function($state){
  return {
      
      restart:function(){
          $state.go('state0' )
          states={state0:{email:""},
                      state1:{question: "What does the blockchain network look like?",
                      answers: ["Distributed","Decentralized", "Centralized"],
                      answer: ""},
                      state2:{question: "Why are some people afraid of the Internet of Things?",
                      answers:["Robots could take over the world.","You will have less privacy.", "You are losing control over your live.", "All of the above."],
                      answer: ""},
                      state3:{question: "What is the size of a block in the original bitcoin blockchain?",
                      answers:["1MB","1KB", "20MB"],
                      answer: ""},
                      state4:{question: "How many transactions can you retrieve from the blockchain?",
                      answers:["All of them.","The last ten transactions.", "Only the last transaction."],
                      answer: ""},
                      state5:{question: "What could be part of the Internet of Things?",
                      answers:["Only electronic devices","Everything you can put a chip in", "Only Apple products"],
                      answer: ""},
                      state6:{question: "What is the cost of one transaction in an Ethereum blockchain?",
                      answers:["The Miner decides","It's free!", "$1", "0.0001 bitcoin"],
                      answer: ""},
                      state7:{question: "Who is the administrator of the Internet of Things?",
                      answers:["Google","Facebook", "Nobody"],
                      answer: ""}}      
       return states[$state.current.name];
      }
   
}})