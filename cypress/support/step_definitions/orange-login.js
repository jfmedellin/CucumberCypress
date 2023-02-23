import { Before, When, And, Then, } from 'cypress-cucumber-preprocessor/steps';
import { LoginPage } from '../../e2e/cucumber-examples/pages/orange-login-page';
import { DashboardPage } from '../../e2e/cucumber-examples/pages/dashboard-page'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

beforeEach("login to orange page", () => {

    cy.visit("/")
    loginPage.typeUsername("Admin")
    loginPage.typePassword("admin123")
    loginPage.clickContinue()

})
When("I am validate label list", () => {

    dashboardPage.validateListOptions(0, "Admin")
    dashboardPage.validateListOptions(1, "PIM")
    dashboardPage.validateListOptions(2, "Leave")
    dashboardPage.validateListOptions(3, "Time")
    dashboardPage.validateListOptions(4, "Recruitment")
    dashboardPage.validateListOptions(5, "My Info")
    dashboardPage.validateListOptions(6, "Performance")
    dashboardPage.validateListOptions(7, "Dashboard")
    dashboardPage.validateListOptions(8, "Directory")
    dashboardPage.validateListOptions(9, "Maintenance")
    dashboardPage.validateListOptions(10, "Buzz")

})

Then("I validate the username field", () => {

    dashboardPage.validateUsername("Paul Collings")
}

)



