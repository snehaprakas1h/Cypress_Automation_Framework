/// <reference types="cypress"/>

describe("Put request", () => {
    
  it("update an existing post via posts api", () => {
   cy.request({
    method:"PUT",
    url:"http://localhost:3000/posts/2",
    body:{
      title:"updated title",
      author:"sneha updated"
    }
   }).then(response=>{
    expect(response.status).to.eq(200);
   })
  });
});
