export class LoginPage{

    elements = {
     inputUsername:() => cy.get("[name='username']"),
     inputPassword:() => cy.get("[name='password']"),
     btnContinue:() =>  cy.get("[type='submit']")
}

     typeUsername(username){
        this.elements.inputUsername().type(username)
    }

    typePassword(password){
        this.elements.inputPassword().type(password)
    }

    clickContinue(){
        this.elements.btnContinue().click()
    }
}