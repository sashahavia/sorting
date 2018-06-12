'use strict';

const numerically = function (a, b) { return a - b; }

const generateArray = function (size, lower, upper) {
  const randomArray = [];
  while (size--) {
    let randomNum = Math.floor(lower + Math.random() * upper);
    randomArray.push(randomNum);
  }
  return randomArray;
}

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('Jasmine tests for a bubble sort implementation', function() {

  it ('- should sort a simple integer list', function() {
    var unsorted = [17, 43, 216, 3, 9, 27],
        sorted = bubbleSort(unsorted);

    expect(sorted[0]).toEqual(3);
    expect(sorted[1]).toEqual(9);
    expect(sorted[2]).toEqual(17);
    expect(sorted[3]).toEqual(27);
    expect(sorted[4]).toEqual(43);
    expect(sorted[5]).toEqual(216);
    expect(sorted.length).toEqual(6);
  });

  it('- should sort positive and negative integers', function() {
    var unsorted = [17, -43, 216, 3, -9, 27],
        sorted = bubbleSort(unsorted);

    expect(sorted[0]).toEqual(-43);
    expect(sorted[1]).toEqual(-9);
    expect(sorted[2]).toEqual(3);
    expect(sorted[3]).toEqual(17);
    expect(sorted[4]).toEqual(27);
    expect(sorted[5]).toEqual(216);
    expect(sorted.length).toEqual(6);
  });

  it('- should clumsily sort strings', function() {
    var unsorted = ['toad', 'prune', 'pretzel', 'aardvark', 'tuna', 'weasel'],
        sorted = bubbleSort(unsorted);

    expect(sorted[0]).toEqual('aardvark');
    expect(sorted[1]).toEqual('pretzel');
    expect(sorted[2]).toEqual('prune');
    expect(sorted[3]).toEqual('toad');
    expect(sorted[4]).toEqual('tuna');
    expect(sorted[5]).toEqual('weasel');
    expect(sorted.length).toEqual(6);
  });

  for (let i = 2; i < 103; i += 20) {
    it('sorts an array of ' + i + ' random items', function(){
      const arr = generateArray(i, 0, 100);
      const sorted = arr.slice(0).sort(numerically);
      expect( bubbleSort(arr) ).toEqual( sorted );
    });
  }

});
