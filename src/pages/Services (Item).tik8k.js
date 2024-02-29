// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
  // Write your JavaScript here

  // adding default package value to the product page

  const currentItem = $w("#dynamicDataset").getCurrentItem();

  const currentTitle = currentItem.title1;

  console.log("Current Title:", currentTitle);

  $w("#chosenPackage").value = currentTitle;

  $w("#chosenPackage").disable();
  // To select an element by ID use: $w('#elementID')

  // Click 'Preview' to run your code
});
