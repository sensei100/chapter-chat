class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:edit]

  def show
    user = User.find(params[:id])
    render json: user
  end

  def edit
  end

  def update_password
  end

end