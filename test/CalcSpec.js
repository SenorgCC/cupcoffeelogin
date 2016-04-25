describe("Addition function", function(){
    it("should add numbers", function(){
        expect(add(1,1)).toEqual(2);
        expect(add(2,2)).toBeGreaterThan(3);
    });
});
describe("Multiplication Function",function(){
    it("should multiply numbers",function(){
        expect(multipy(2,2)).toEqual(4);
    })
});
