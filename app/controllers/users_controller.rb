class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :destroy]

  def show
    user = user.last
    render json: user
  end

  def edit
  end

  def update_password
  end

end