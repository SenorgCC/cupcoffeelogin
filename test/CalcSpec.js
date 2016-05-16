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


describe('Account', function () {

    beforeEach(module('CupCoffeeMainpage'));

    var $controller;


    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('getKontostand',function(){
        it("should receive the Kontostand of kek", function () {
            var $scope={};
            var controller= $controller('mainpagecontroller',{$scope:$scope});
            $scope.username='kek';
            $scope.getKontostand($scope.username);
            spyOn($, "ajax").and.returnValue(1);


        });
    });

});
