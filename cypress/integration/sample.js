//<reference type="Cypress"/>
import SearchFlightPage from './2-advanced-examples/PageObj/SearchFlightPage'
var file=require('../fixtures/Jdon.json');



describe('Flight Search',()=>{
    
   


    
    


it('Search Flight',()=>{

  let loopcount=1;
while(loopcount<3)
{

  cy.visit('https://www.kayak.com/');
 
cy.get('.wIIH-chevron').click();
cy.get('[aria-label="Different drop-off"]').click();

var scenario="Scenario "+loopcount;

SearchFlightPage.enterFromField(file[scenario].source);




SearchFlightPage.enterToField(file[scenario].typedestination,file[scenario].clickdestination);
SearchFlightPage.selectDates(file[scenario].fromDate,file[scenario].toDate);

SearchFlightPage.clickSearchButton(file[scenario].verifyFromDate,file[scenario].verifyToDate,file[scenario].verifysource,file[scenario].clickdestination);


loopcount=loopcount+1;
}


    });



});

