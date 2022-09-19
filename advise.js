
let quote = document.querySelector('.quote')
let quoteGenerator = document.querySelector('.quotegenerator')
let header = document.querySelector('.header')

console.log(quote, quoteGenerator)

const getUsers = async () => {
    try {
      const data = await fetch("https://api.adviceslip.com/advice");
      const list = await data.json();
      return list
      
    } catch (error) {
      quote.innerText ="Check Internet Connection"
    }
    
  }



  
  function advise () {
    getUsers().then(data => response(data.slip.advice, data.slip.id))
  }

  function response(adv, id) {
    
        quote.innerText = ` "${adv}"`
        header.innerText = `Advice #${id}` 

      }
      
  

    
   
   

  quoteGenerator.addEventListener("click", ()=> {
    advise()
  })


  
 
  
  