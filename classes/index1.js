//blind
class react{
  constructor(){
    this.library='react'
      this.server='https://localhost:300'

       //requirements
       document.querySelector('button').addEventListener('click',this.handleclick.bind((this)))
    }
    handleclick(){
      console.log('button clicked');
      console.log(this.server);

    }
  }
const aap=new react()