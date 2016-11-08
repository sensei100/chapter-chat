class ClubsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :destroy]

  def index
    clubs = Club.all
    render json: clubs
  end

end