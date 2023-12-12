/// <reference types="cypress"/>

describe("Del request", () => {
    
  it("delete an existing post via posts api", () => {
   cy.request({
    method:"DELETE",
    url:"http://localhost:3000/posts/2",
   }).then(response=>{
    expect(response.status).to.eq(200);
   })
  });
});
