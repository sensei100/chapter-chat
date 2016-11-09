class CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :destroy]

  def index
    post = Post.find(params[:id])
    comments = post.all
    render json: comments
  end

  def show
    comment = Comment.find(params[:id])
    render json: comment
  end

  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: { status: 'ok' }
    else
      render json: 
      { errors: comment.errors.full_messages },
      status: :unprocessable_entity
    end
  end

  def update
    comment = Comment.find(params[:id])
    if comment.update(comment_params)
      render json: { status: 'ok' }
    else
      render json: 
      { errors: comment.errors.full_messages },
      status: :unprocessable_entity
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    if comment.user == current_user.id
      if comment.destroy 
        render json: { status: 'ok' }
      else
        render json: 
        { errors: comment.errors.full_messages },
        status: :unprocessable_entity
      end
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :user_id, :post_id)
  end
end