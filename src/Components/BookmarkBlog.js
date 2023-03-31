import React from 'react';

const BookmarkBlog = (props) => {
    let data=props.data
    return (
        <div className='py-2 bg-light px-1 my-3 rounded'>
            <p class="h5">{data}</p>
        </div>
    );
};

export default BookmarkBlog;