import LoginPage from '../pageObjects/LoginPage'
//import userdata from '../fixtures/Users.json'
describe('template spec', () => {
  //userdata.forEach((user)=>{
  it('Login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    LoginPage.login('Admin','admin123')
    
   
  })
})
//})