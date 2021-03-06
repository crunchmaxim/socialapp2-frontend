import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getAllPosts } from './../redux/reducers/dataReducer';
import PostComponent from './PostComponent';
import AddPost from './AddPost';
import PostLoadingTemplate from './PostLoadingTemplate';


const Posts = (props) => {
    useEffect(() => {
        props.getAllPosts();
        console.log('get all posts from use effect')
    }, [])

    if (props.dataLoading) {
        return (
            <>
                <PostLoadingTemplate />
                <PostLoadingTemplate />
                <PostLoadingTemplate />
                <PostLoadingTemplate />
                <PostLoadingTemplate />
            </>
        )
    }

    return (
        <div>
            <AddPost />
            {props.posts.map(post => <PostComponent
                imageUrl={post.imageUrl}
                username={post.username}
                body={post.body}
                createdAt={post.createdAt}
                title={post.title}
                likesCount={post.likesCount}
                commentsCount={post.commentsCount}
                postId={post.id}
                postImageUrl={post.postImageUrl}
            />)}
        </div>
    )
};

const mapStateToProps = (state) => ({
    posts: state.data.posts,
    dataLoading: state.data.dataLoading,
})

export default connect(mapStateToProps, { getAllPosts })(Posts);
