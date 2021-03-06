var sort = require("../../../lib/algorithms/3-stacks/sort.js");
var stack = require("../../../lib/dataStructures/stack.js"); 

describe('When sorting a stack, using only stacks', function () {

    var unsorted;

    beforeEach(function() {     
        unsorted = new stack();
    });

    it('a stack of 1 element can be sorted.', function () { 
        unsorted.push(10);
        var sorted = sort(unsorted);

        expect(sorted.length).toBe(1);
        expect(sorted.pop()).toBe(10);
    }); 

    it('a stack of 2 elements can be sorted.', function () { 
        unsorted.push(10);
        unsorted.push(20);
        var sorted = sort(unsorted);

        expect(sorted.length).toBe(2);
        expect(sorted.pop()).toBe(20);
    }); 

    it('a stack of 5 elements can be sorted.', function () { 
        unsorted.push(10);
        unsorted.push(20);
        unsorted.push(30);
        unsorted.push(40);
        unsorted.push(50);
        var sorted = sort(unsorted);

        expect(sorted.length).toBe(5);
        expect(sorted.pop()).toBe(50);
        expect(sorted.pop()).toBe(40);
        expect(sorted.pop()).toBe(30);
        expect(sorted.pop()).toBe(20);
    }); 


});