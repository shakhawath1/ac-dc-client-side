import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3>
                How will you improve the performance of a React Application?
            </h3>
            <p>
                We can improve performance of a React application by the following ways:
                Keeping component state local where necessary.
                Memoizing React components to prevent unnecessary re-renders.
                Code-splitting in React using dynamic import()
                Windowing or list virtualization in React.
            </p>
            <h3>
                What are the different ways to manage a state in a React application?
            </h3>
            <p>
                There are four main types of state we need to properly manage in our React apps:
                1. Local state.
                2. Global state.
                3. Server state.
                4. URL state.
            </p>
            <h3>
                How does prototypical inheritance work?
            </h3>
            <p>
                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.
                Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.
            </p>
            <h3>
                Why you do not set the state directly in React? For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.
            </h3>
            <p>
                One should never update the state directly because of the following reasons:
                If we update it directly, calling the setState() afterward may just replace the update we made.
                When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                We will lose control of the state across all components.
            </p>
            <h3>
                You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
            </h3>
            <p>
                We can implement find() and filter() methods to find products by name.
                The find() method returns the first value in an array that matches the conditions of a function. If there is no match, the method returns undefined.
                The filter() method returns a new array of all the values in an array that matches the conditions of a function. If there is no match, the method returns an empty array.
            </p>
            <h3>
                What is a unit test? Why should write unit tests?
            </h3>
            <p>
                Unit testing is a process in which smallest part of the software called unit are uniquely individually performing its operation are verified.
                The purpose of unit testing is to check the functionality of each isolated module to verify whether it is working as expected or not. In this testing method the smallest, individual units/modules/components of the software are isolated and checked.
            </p>
        </div>
    );
};

export default Blogs;