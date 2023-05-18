
const spreadOperator = () => {
  const name = 'Zelda';
  const letters = [...name]; // 'Z', 'e', 'l', 'd', 'a'
  console.log(letters); // output : [ 'Z', 'e', 'l', 'd', 'a' ]
}

const useSetClass = () => {
  const data = [1, 2, 3, 5, 1, 2, 4]
  const values = new Set(data);
  const uniqueValues = [...values]; // [1, 2, 3, 5, 4]
  console.log(uniqueValues); // output : [1, 2, 3, 5, 4]
}

const nodes = document.childNodes;
const nodeArray = [...nodes]; // [ <!DOCTYPE html>, html ]

// spreadOperator();
// useSetClass();