import React from 'react';
// import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const blogs = [
        {
            "id": 1,
            "title": "What is the purpose of react router?",
            "body": "We will need to utilize Router in React JS to create a React application with navigation across multiple pages. React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view. A Router in React JS routes using a component-based architecture. It offers various routing components as required by the application. If you wish to learn more about its applications, check out this blog: Navigate React Router programmatically."
        },
        {
            "id": 2,
            "title": "How does context API work?",
            "body": "The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to 'prop drilling' or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the 'store' and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state."
        },
        {
            "id": 3,
            "title": "useRef hook.",
            "body": "The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component."
        }
    ];

    return (
        <div className='text-[#172652] font-semibold my-12 mb-24 md:w-[80%] m-auto'>
            <h1 className='text-4xl font-extrabold mb-10'>Blog</h1>
            <p className='text-2xl text-[#0072ce] font-extrabold'>Total Blogs: {blogs.length}</p>
            {
                blogs.map(blog => <div key={blog.id} className='text-left p-6 m-6 rounded shadow-xl'>
                    <h2 className='text-2xl mb-3'>{blog.title}</h2>
                    <p>{blog.body}</p>
                </div>)
            }
        </div>
    );
};

export default Blog;