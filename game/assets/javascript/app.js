var score = 0; //Set score to 0
var total = 8; //Total Number of Questions
var point = 1; //Points per correct answer
var highest = total * point; 

//Initializer

function init() {
    //set correct answers
    sessionStorage.setItem ('a1', 'c');
    sessionStorage.setItem ('a2', 'a');
    sessionStorage.setItem ('a3', 'd');
    sessionStorage.setItem ('a4', 'c');
    sessionStorage.setItem ('a5', 'b');
    sessionStorage.setItem ('a6', 'c');
    sessionStorage.setItem ('a7', 'b');
    sessionStorage.setItem ('a8', 'a');

}

var timer = 120;

var interval = setInterval(function() {
    timer--;
    $('.timer').text(timer);
    if (timer === 0) clearInterval(interval);
}, 1000); 

$(document).ready(function (){
    //Hide All Questions
    $('.questionForm').hide();

    //Show First Question
    $('#q1').show();
    
    $('.questionForm #submit').click(function (){
        //Get data attributes
        current = $(this).parents('form:first').data('question');
        next = $(this).parents('form:first').data('question')+1;
        //Hide all questions
        $('.questionForm').hide();
        //Show next question
        $('#q'+next+'').fadeIn(300);
        process(''+current+'');
        return false;
    });
});

//Process the answers
function process(n) {
    //Get input value
    var submitted = $('input[name=q'+n+']:checked').val();
    if (submitted == sessionStorage.getItem('a'+n+'')) {
        score = score + point;
    }

    if (n == total){
        $('#results').html('<h3>Your Final Score Is: ' +score+ ' out of '+highest+'</h3><a href="index.html">Take Quiz Again?</a>');
        if(score == highest) {
            $('#results').append('<p>You are a Marvel Master!</p>');
        } else if(score == highest - point || score == highest - point - point){
            $('#results').append('<p>Almost there! Try again!.</p>');
        }
    }
    return false;
    
}

//Add Event Listener
window.addEventListener ('load',init,false);