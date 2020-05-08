//controls alternating colors for skills list items
let count= 0;
let colorName;
const alternateColor= () => {
  count % 2 === 0 ? colorName= 'dark' :
  colorName= 'light';
  count++;
  return colorName;
}

export default alternateColor;