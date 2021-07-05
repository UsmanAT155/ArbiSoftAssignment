//<reference type="Cypress"/>

class SearchFlightPage
{
    
 

static enterFromField()
{
    cy.get(':nth-child(1) > .d_E3 > .lNCO > .lNCO-inner').click();
    cy.get('.k_my-input').type('Hartsfield-Jackson Atlanta International Airport');
    cy.get('.JyN0-name').click();
    
}

static enterToField()
{
 
    cy.get(':nth-child(2) > .d_E3 > .lNCO > .lNCO-inner').click();
cy.get('.k_my-input').type('Paris Charl');
cy.get('[aria-label="Charles de Gaulle"]').click();

}

static selectDates()
{
    cy.get(':nth-child(1) > .cQtq-date > .cQtq-value').click();
    cy.get('[aria-label="July 15, 2021"]').click();
    cy.get('[aria-label="August 15, 2021"]').click();

}


static clickSearchButton()
{

    cy.get('.NbWx-button > .Iqt3 > .Iqt3-button-container > .Iqt3-button-content').click();
}


}


export default SearchFlightPage;