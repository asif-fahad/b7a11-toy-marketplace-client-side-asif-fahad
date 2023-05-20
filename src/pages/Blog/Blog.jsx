import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl text-center m-0 bg-gray-200 p-10'>Blog</h1>
            </div>

            <div className='ms-5 my-5'>
                <div>
                    <div className='font-bold text-2xl'>
                        a. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </div>
                    <div>
                        <span className='font-bold'>Ans.</span> A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times.
                        <br />
                        The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.
                        <br />
                        You can store token in local storage and in cookie but they both are not safe.
                    </div>
                </div>
                <div>
                    <div className='font-bold text-2xl'>
                        b. Compare SQL and NoSQL databases.
                    </div>
                    <div>
                        <span className='font-bold'>Ans.</span> The five critical differences between SQL and NoSQL are:
                        <br />
                        <li> SQL databases are relational, and NoSQL databases are non-relational.</li>
                        <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                        <li> SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                        <li>SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                        <li> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                    </div>
                </div>
                <div>
                    <div className='font-bold text-2xl'>
                        c. What is Express JS? What is Nest JS?
                    </div>
                    <div>
                        <span className='font-bold'>Ans.</span> Express.js is a framework for Node.js, so in order to use it, you will use Node.js. Express.js will help you organize your application better. It provides many features which will speed up the development for example mechanism for middlewares, more efficient REST support or robust routing.
                        <br />
                        Nest.js is one of the fastest-growing Node.js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node.js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.
                    </div>
                </div>
                <div>
                    <div className='font-bold text-2xl'>
                        d. What is MongoDB aggregate and how does it work?
                    </div>
                    <div>
                        <span className='font-bold'>Ans.</span> In MongoDB, aggregation operations process the data records/documents and return computed results. It collects values from various documents and groups them together and then performs different types of operations on that grouped data like sum, average, minimum, maximum, etc to return a computed result. It is similar to the aggregate function of SQL.
                        <br />
                        In MongoDB, the aggregation pipeline consists of stages and each stage transforms the document. Or in other words, the aggregation pipeline is a multi-stage pipeline, so in each state, the documents taken as input and produce the resultant set of documents now in the next stage(id available) the resultant documents taken as input and produce output, this process is going on till the last stage. The basic pipeline stages provide filters that will perform like queries and the document transformation modifies the resultant document and the other pipeline provides tools for grouping and sorting documents. You can also use the aggregation pipeline in sharded collection.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;