import { render } from "@testing-library/react";
import { describe, expect } from "vitest";
import CardContainer from "../components/Card/CardContainer";

describe("CardContainer", () => {
  beforeEach(() => {
    render(
      <CardContainer
        articleDataList={[
          {
            id: "3e9194f5-c60f-4f62-8971-2c4b0f66762b",
            readingTime: 360594,
            mainContent:
              "  Array.prototype.map() Baseline Widely available This feature is well established and works across many devices and browser versions. It's been available across browsers since July 2015. Learn more See full compatibility Report feedback The map method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array. Try it Syntax js map callback Fn map callback Fn this Arg Parameters callback Fn A function to execute for each element in the array. Its return value is added as a single element in the new array. The function is called with the following arguments: element The current element being processed in the array. index The index of the current element being processed in the array. array The array map was called upon. this Arg Optional A value to use as this when executing callback Fn. See iterative methods. Return value A new array with each element being the result of the callback function. Description The map method is an iterative method. It calls a provided callback Fn function once for each element in an array and constructs a new array from the results. Read the iterative methods section for more information about how these methods work in general. callback Fn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays. The map method is generic. It only expects the this value to have a length property and integer-keyed properties. Since map builds a new array, calling it without using the returned array is an anti-pattern; use for Each or for of instead. Examples Mapping an array of numbers to an array of square roots The following code takes an array of numbers and creates a new array containing the square roots of the numbers in the first array. js const numbers 1 4 9 const roots numbers map num Math sqrt num Using map to reformat objects in an array The following code takes an array of objects and creates a new array containing the newly reformatted objects. js const kv Array key 1 value 10 key 2 value 20 key 3 value 30 const reformatted Array kv Array map key value key value console log reformatted Array console log kv Array Using parseInt() with map() It is common to use the callback with one argument (the element being traversed). Certain functions are also commonly used with one argument, even though they take additional optional arguments. These habits may lead to confusing behaviors. Consider: js 1 2 3 map parse Int While one might expect 1 2 3, the actual result is 1 Na N Na N. parse Int is often used with one argument, but takes two. The first is an expression and the second is the radix to the callback function, Array prototype map passes 3 arguments: the element, the index, and the array. The third argument is ignored by parse Int — but not the second one! This is the source of possible confusion. Here is a concise example of the iteration steps: js parse Int 1 0 parse Int 2 1 parse Int 3 2 To solve this, define another function that only takes one argument: js 1 2 3 map str parse Int str 10 You can also use the Number function, which only takes one argument: js 1 2 3 map Number 1 1 2 2e2 3e300 map Number 1 1 2 2e2 3e300 map str parse Int str 10 See A JavaScript optional argument hazard by Allen Wirfs-Brock for more discussions. Mapped array contains undefined When undefined or nothing is returned, the resulting array contains undefined. If you want to delete the element instead, chain a filter method, or use the flat Map method and return an empty array to signify deletion. js const numbers 1 2 3 4 const filtered Numbers numbers map num index if index 3 return num Side-effectful mapping The callback can have side effects. js const cart 5 15 25 let total 0 const with Tax cart map cost total cost return cost 1 2 console log with Tax console log total This is not recommended, because copying methods are best used with pure functions. In this case, we can choose to iterate the array twice. js const cart 5 15 25 const total cart reduce acc cost acc cost 0 const with Tax cart map cost cost 1 2 Sometimes this pattern goes to its extreme and the only useful thing that map does is causing side effects. js const products name sports car name laptop name phone products map product product price 100 As mentioned previously, this is an anti-pattern. If you don't use the return value of map, use for Each or a for of loop instead. js products for Each product product price 100 Or, if you want to create a new array instead: js const products With Price products map product return product price 100 Using the third argument of callbackFn The array argument is useful if you want to access another element in the array, especially when you don't have an existing variable that refers to the array. The following example first uses filter to extract the positive values and then uses map to create a new array where each element is the average of its neighbors and itself. js const numbers 3 1 1 4 1 5 9 2 6 const averaged numbers filter num num 0 map num idx arr const prev arr idx 1 const next arr idx 1 let count 1 let total num if prev undefined count total prev if next undefined count total next const average total count return Math round average 100 100 console log averaged The array argument is not the array that is being built — there is no way to access the array being built from the callback function. Using map() on sparse arrays A sparse array remains sparse after map. The indices of empty slots are still empty in the returned array, and the callback function won't be called on them. js console log 1 3 map x index console log Visit index return x 2 Calling map() on non-array objects The map method reads the length property of this and then accesses each property whose key is a nonnegative integer less than length. js const array Like length 3 0 2 1 3 2 4 3 5 console log Array prototype map call array Like x x 2 This example shows how to iterate through a collection of objects collected by query Selector All. This is because query Selector All returns a Node List (which is a collection of objects). In this case, we return all the selected options' values on the screen: js const elems document query Selector All select option checked const values Array prototype map call elems value value You can also use Array from to transform elems to an array, and then access the map method. Specifications Specification ECMAScript Language Specification # sec-array.prototype.map Browser compatibility BCD tables only load in the browser See also Polyfill of Array prototype map in core js Indexed collections guide Array Array prototype for Each Array from Typed Array prototype map Map ",
            title: "Array.prototype.map() - JavaScript | MDN",
            siteName: "MDN Web Docs",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#%EA%B5%AC%EB%AC%B8",
            faviconUrl:
              "https://developer.mozilla.org/favicon-48x48.cbbd161b.png",
            createDate: "2024-07-01T11:00:39.774Z",
          },
          {
            id: "79428d04-b382-43ef-9b0e-66a026db0fd0",
            readingTime: 159207,
            mainContent:
              "React · React is a JavaScript library for building user interfaces. Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug. Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM. Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native. Learn how to use React in your project. Installation React has been designed for gradual adoption from the start, and you can use as little or as much React as you need: Use Quick Start to get a taste of React. Add React to an Existing Project to use as little or as much React as you need. Create a New React App if you're looking for a powerful JavaScript toolchain. Documentation You can find the React documentation on the website. Check out the Getting Started page for a quick overview. The documentation is divided into several sections: Quick Start Tutorial Thinking in React Installation Describing the UI Adding Interactivity Managing State Advanced Guides API Reference Where to Get Support Contributing Guide You can improve it by sending pull requests to this repository. Examples We have several examples on the website. Here is the first one to get you started: import create Root from react dom client function Hello Message name return div Hello name div const root create Root document get Element By Id container root render Hello Message name Taylor This example will render \"Hello Taylor\" into a container on the page. You'll notice that we used an HTML-like syntax; we call it JSX. JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML. Contributing The main purpose of this repository is to continue evolving React core, making it faster and easier to use. Development of React happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving React. Code of Conduct Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated. Contributing Guide Read our contributing guide to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to React. Good First Issues To help you get your feet wet and get you familiar with our contribution process, we have a list of good first issues that contain bugs that have a relatively limited scope. This is a great place to get started. License React is MIT licensed. ",
            title:
              "GitHub - facebook/react: The library for web and native user interfaces.",
            siteName: "GitHub",
            url: "https://github.com/facebook/react",
            faviconUrl: "https://github.com/fluidicon.png",
            createDate: "2024-07-01T11:00:38.584Z",
          },
        ]}
        deleteArticle={() => {}}
        setArticleSummaryData={() => {}}
        isSummaryClosed={true}
        setIsSummaryClosed={() => {}}
      />,
    );
  });

  it("Card components count should match the length of the incoming article data list.", () => {
    const parentElement = document.querySelector(
      '[data-test="test-cardContainer"]',
    );
    const childElements = parentElement.children;

    expect(childElements.length).toBe(2);
  });
});