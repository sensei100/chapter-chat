class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  respond_to :json
  before_action :configure_permitted_paramters, if: :devise_controller?
  

  protected

  def configure_permitted_parameters
    added_attrs = [:username, :email, :password, :password_confirmation, :remember_me]
    devise_parameter_sanitizer.permit :sign_up, keys:
    added_attrs
    devise_parameter_sanitizer.permit :account_update, keys:
    added_attrs
  end
end
