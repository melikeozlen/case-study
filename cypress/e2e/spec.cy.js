
describe('header-test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001');

  })
  it('passes', () => {
    cy.get('.logo').should('have.text', 'Eteration')

    cy.get('.card-summary').click()
    cy.get('.modal-total-price').invoke('text').then((text) => {
      const totalPrice = parseFloat(text.replace(' ₺', ''))
      expect(totalPrice).to.eq(0)
    })

    cy.get('.mobile-menu').should('not.be.visible')

  })
  it('SearchFilterTest', () => {
    cy.get('#root > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div > input').should('be.visible').type('Smart ', { delay: 0 })
    cy.get(".prod-item-name").invoke('text').then((text) => {
      expect(text).to.include('Smart ')
    }
    )
  })



  it('AddToCartTest', () => {
    cy.get('.product-card').first().find('.add-to-cart-button').click()
  }
  )

  it('total price test', () => {
    cy.get('.card-summary').click()
    cy.get('.modal-total-price').invoke('text').then((modalTotalPriceText) => {
      cy.get(".total-price").invoke('text').then((totalPriceText) => {
        cy.log(modalTotalPriceText)
        cy.log(totalPriceText)
        expect(modalTotalPriceText.trim()).to.equal(totalPriceText.trim())
      })
    })
  }
  )

  it('shows mobile menu test', () => {
    cy.viewport(901, 600)
    cy.get('.hamburger-menu').should('be.visible')
    cy.get('.mobile-menu').should('not.be.visible')

    cy.get('.hamburger-menu').click()
    cy.get('.mobile-menu').should('be.visible')

    cy.viewport(1200, 800)
    cy.get('.mobile-menu').should('not.be.visible')
  })

})

describe('page-item-render', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001');
  })

  it('page item render test', () => {
    cy.get('.product-card').its('length').should('lte', 12)

  })
})


describe('not found page test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/test');
  })

  it('not found test', () => {
    cy.get('h1').should('have.text', 'Not Found')
  })
  it('back to home test', () => {
    cy.get('a').click()
    cy.url().should('eq', 'http://localhost:3001/')
  }
  )
})

describe('product-detail-test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/productDetail/1');
  })

  it('product detail test', () => {
    cy.get('.detail-card').should('be.visible')
    cy.get('.sibar-right').should('be.visible')
    cy.get('.side-bar-left').should('not.exist')
  })


})







