//<reference type="Cypress"/>

import { any } from "async";

class SearchFlightPage
{
    
 

static enterFromField(typeText)
{
    cy.get(':nth-child(1) > .d_E3 > .lNCO > .lNCO-inner').click();
    cy.get('.k_my-input').type(typeText);
    cy.get('.JyN0-name').click();
    
}

static enterToField(typeText,clickText)
{
 
    cy.get(':nth-child(2) > .d_E3 > .lNCO > .lNCO-inner').click();
cy.get('.k_my-input').type(typeText);
cy.get('[aria-label="'+clickText+'"]').click();

}

static selectDates(fDate,tDate)
{
    cy.get(':nth-child(1) > .cQtq-date > .cQtq-value').click();
    cy.get('[aria-label="'+fDate+'"]').click();
    cy.get('[aria-label="'+tDate+'"]').click();

}







static clickSearchButton(fromDate,toDate)
{

    cy.get('.NbWx-button > .Iqt3 > .Iqt3-button-container > .Iqt3-button-content').click();
    this.verifyFromField("Hartsfield-Jackson");
    this.verifyToField("Charles de Gaulle");
    this.verifyFromDate(fromDate);
    this.verifyToDate(toDate);
}

static  verifyFromField(fromFieldVerification)
{

    cy.get(':nth-child(1) > .d_E3 > .lNCO > .lNCO-inner').should('contain',fromFieldVerification);

}


static verifyToField(toFieldVerification)
{
    cy.get(':nth-child(2) > .d_E3 > .lNCO > .lNCO-inner').should('contain',toFieldVerification);
}




static verifyFromDate(fromDateVerification)
{
    cy.get(':nth-child(1) > .cQtq-date > .cQtq-value').should('contain',fromDateVerification);
}


static verifyToDate(toDateVerification)
{
    cy.get(':nth-child(3) > .cQtq-date > .cQtq-value').should('contain',toDateVerification);
}

}





export default SearchFlightPage;