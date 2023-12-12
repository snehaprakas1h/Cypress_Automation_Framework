/// <reference types="cypress"/>

describe("Post request", () => {
    var titleOfPosts = new Array();
    let title= Math.random().toString(36).substring()+Math.random().toString(36).substring()
  it("create a new post via posts api", () => {
   cy.request({
    method:"POST",
    url:"http://localhost:3000/posts",
    body:{
      title:title,
      author:"snehal"
    }
   }).then(response=>{
    expect(response.status).to.eq(201);
   })
  });

  it('validate title of latest  post', () => {
    cy.request({
      method:"GET",
      url:"http://localhost:3000/posts",
      headers:{
        accept:"application/json"
      }
    }).then((response)=>{
      let body = JSON.parse(JSON.stringify(response.body));
      body.forEach(function(item ) {
        titleOfPosts.push(item["title"]);
      });
    }).then(()=>{
      var latestPost=titleOfPosts[titleOfPosts.length-1];
      expect(latestPost).to.eq(title);
    })
  });
});
