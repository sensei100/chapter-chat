class CurrentbookController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :destroy]

  def index
    currentbooks = CurrentBook.all
    render json: currentbooks
  end

  def show
    currentbook = CurrentBook.find(params[:id])
    render json: currentbook
  end

  def create
    club = Club.find(params[:club_id])
    currentbook = club.currentbook.new(currentbook_params)
    if currentbook.save
      render json: { status: 'ok' }
    else
      render json: 
      { errors: currentbook.errors.full_messages },
      status: :unprocessable_entity
    end
  end

  def update
    currentbook = CurrentBook.find(params[:id])
    if currentbook.update(currentbook_params)
      render json: { status: 'ok' }
    else
      render json: 
      { errors: currentbook.errors.full_messages },
      status: :unprocessable_entity
    end
  end

  def destroy
    currentbook = CurrentBook.find(params[:id])
    
  end

  private

  def currentbook_params
    params.require(:currentbook).permit(:title, :author, :club_id)
  end
end