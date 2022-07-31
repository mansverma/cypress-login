describe("Send weather API request", () => {
    it("should get weather report for Sydney", () => {
        cy.getAPIUrl().then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.coord.lon).to.eq(151.2073);
            expect(res.body.coord.lat).to.eq(-33.8679);
            expect(res.body.sys.country).to.eq('AU');
            expect(res.body.name).to.eq('Sydney');
            expect(res.body).has.property("id", 2147714);

        });

    });
});