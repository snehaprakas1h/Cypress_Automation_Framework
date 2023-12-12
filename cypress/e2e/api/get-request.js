/// <reference types="cypress"/>

describe("Get request", () => {
    var result;
  it("validate status code of posts api", () => {
    result = cy.request("http://localhost:3000/posts")
    result.its("status").should("equal",200);
  });

  it('validate post api contains correct keys and values', () => {
    cy.request({
        method:"GET",
        url:"http://localhost:3000/posts",
        headers:{
            accept:"application/json"
        }
    }).then(response =>{
        let body =JSON.parse(JSON.stringify(response.body));
        console.log(body);
        expect(body[0]).has.property("title","example json-server")
        expect(body[1]).has.property("author","sneha1")

        body.forEach(function(item){
            expect(item).to.have.all.keys("id","title","author");
        });
    })
  });
});
