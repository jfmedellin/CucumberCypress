export class DashboardPage{
    elements = {
       listOptions:(index) => cy.xpath("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])").eq(index),
        labelUsername:() => cy.xpath("//p[contains(.,'Paul Collings')]")
    }

    validateListOptions(index, expected){

        this.elements.listOptions(index).should("have.text", expected)
    }

    validateUsername(expected){
        this.elements.labelUsername().should("have.text", expected)
    }
}