//Use an array to hold the value of the quotes
var arrayOfQuotes = [
    {'author': 'Jim Rohn', //name
     'quote': 'Beware of what you become in pursuit of what you want.' //article
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

function generateQuote(){
    var random =Math.floor(Math.random()*arrayOfQuotes.length ) ;
    document.getElementById('quoteOutput').innerHTML = `"${arrayOfQuotes[random].quote}"`;
    document.getElementById('authorOutput').innerHTML = `--${arrayOfQuotes[random].author}`;
}
// function generateQuote() {
//     var numbers = [];
//     var randomnumber;
//     do {
//         randomnumber = (Math.random()*arrayOfQuotes.length);
//     } while (numbers.includes(randomnumber));
//     document.getElementById('quoteOutput').innerHTML = `${arrayOfQuotes[randomnumber].quote}`;
//     document.getElementById('authorOutput').innerHTML = `--${arrayOfQuotes[randomnumber].author}`;
  
//   }