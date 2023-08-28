it('first test', () => {
  cy.visit('https://magento.softwaretestingboard.com/')
})
it('Navigate to sale', () => {
  cy.visit('https://magento.softwaretestingboard.com/')
  cy.get('.navigation > ul > li').last().click()

  cy.url().should('contain', 'magento.softwaretestingboard.com')
})

it.only('Buy something', () => {
  cy.visit('https://magento.softwaretestingboard.com/')
  cy.get('.action.more.button').click()
  cy.get('.product-image-photo').first().click()
  cy.get('.swatch-option.text').first().click()
  cy.get('.swatch-option.color').first().click()
  cy.get('.action.primary.tocart').click()
  cy.get('div').contains('You added')
  cy.get('.action.showcart').click()
  cy.get('div').contains('Proceed to Checkout').click()
  cy.url().should('contain', 'magento.softwaretestingboard.com/checkout/')
})