describe("index.js", () => {
    let cats = ["Milo", "Otis", "Garfield"];
  
    beforeEach(() => {
      cats = ["Milo", "Otis", "Garfield"];
    });
  
    describe("cats", () => {
      it("is assigned an initial value of ['Milo', 'Otis', 'Garfield']", () => {
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
  
    describe("Array functions", () => {
      describe("destructivelyAppendCat(name)", () => {
        it("appends a cat to the end of the cats array", () => {
          destructivelyAppendCat("Ralph");
          expect(cats).to.have.ordered.members([
            "Milo",
            "Otis",
            "Garfield",
            "Ralph",
          ]);
        });
      });
    });
  });
  