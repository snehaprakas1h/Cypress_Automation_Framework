class ContactUs_PO{

    contactForm_Submission(firstname, lastname, email, comment, $selector, textToLocate) {
          cy.get('[name="first_name"]').type(firstname);
          cy.get('[name="last_name"]').type(lastname);
          cy.get('[name="email"]').type(email);
          cy.get("textarea.feedback-input").type(comment);
          cy.get('[type="submit"]').click({ force: true });
          cy.get($selector).contains(textToLocate,{timeout:10000});
          cy.screenshot(); //if line 10 fails, line 11 code wont execute
          cy.screenshot("make a contact us form submission");
        }

}

export default ContactUs_PO;