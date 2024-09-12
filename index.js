// Prompt the user for a list of strings separated by commas.
const userInputString = prompt(
    "Please order your froyo flavors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
)

// Split the strings into an array of strings.
const stringArray = userInputString.split(",");

// Define a function to count the orders
function getOrder(strings) {
    order = {}
    for (const item of strings) {
        if(item in order){
            order[item] += 1;
        }else{
            order[item] = 1;
        }
    }
    return order;
  }

// Call the counter function with the actual user prompts and print
const customerOrder = getOrder(stringArray);
console.table(cuntomerOrder);