class PostsController < ApplicationController
    def index
        @posts = Post.where(user_id: 1)
        render json: @posts
    end

    def show
        @post = Post.find(params[:id])
        render json: @post
    end
end
