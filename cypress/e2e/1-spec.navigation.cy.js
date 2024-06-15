/// <reference types="cypress" />

describe("Navigation", () => {
  it("Can go to the details page and back", () => {
    cy.visit("https://hyf-react-w2-example.netlify.app/");
    cy.get('[data-testid="product-link"]').should("have.length", 20);
    cy.get('[data-testid="product-link"]').first().click();
    cy.get('[data-testid="product-details-page"]').should("be.visible");
    cy.go("back");
    cy.get('[data-testid="products-page"]').should("be.visible");
  });

  it("Each product link has an image and a description", () => {
    // First visit the page we want to test
    cy.visit("https://hyf-react-w2-example.netlify.app/");

    // Check that there are 20 products on the page
    cy.get('[data-testid="product-link"]').should("have.length", 20);

    // Check that each product link has an image and a description
    cy.get('[data-testid="product-link"]').each(($el) => {
      // Check that the image inside the product link is not empty
      cy.wrap($el)
        .find("img")
        .should("be.visible")
        .and(($img) => {
          // Check that the image has a src attribute and it's not empty
          expect($img).to.have.attr("src").not.be.empty;
        });

      // Check that the description inside the product link is not empty
      cy.wrap($el).find(".description").should("not.be.empty");
    });
  });
});
