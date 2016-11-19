class ClubsController < ApplicationController
   before_action :authenticate_user!, only: [:create, :update, :destroy]

  def index
    clubs = Club.all
    render json: clubs
  end

  def show
    club = Club.find(params[:id])
    render json: club
  end

  def create
    club = Club.new(club_params)
    if club.save
      render json: { status: 'ok' }
    else
      render json: 
      { errors: club.errors.full_messages },
      status: :unprocessable_entity
    end
  end

  def update
    club = Club.find(params[:id])
    if club.update(club_params)
      render json: { status: 'ok' }
    else
      render json: 
      { errors: club.errors.full_messages },
      status: :unprocessable_entity
    end
  end

  def destroy
    club = CLub.find(params[:id])

  end

  private

  def club_params
    params.require(:club).permit(:name, :location)
  end
end