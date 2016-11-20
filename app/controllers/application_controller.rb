class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  after_action :set_csrf_cookie
  respond_to :json

  def set_csrf_cookie
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  def index
  end

  rescue_from ActionController::InvalidAuthenticityToken do |exception|     
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?     
    message = 'Rails CSRF token error, please try again'     
    render_with_protection(message.to_json, {:status => :unprocessable_entity}) 
  end
    
  def render_with_protection(object, parameters = {})
    render parameters.merge(content_type: 'application/json', text: ")]}',\n" + object.to_json)
  end

  protected

  def verified_request?
    super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:email, :password, :password_confirmation, :remember_me, :username) }
    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:email, :password, :password_confirmation, :current_password, :username, :admin) }
    devise_parameter_sanitizer.permit(:sign_in) do |user_params|
    user_params.permit(:username, :email)
    end
  end
end

 



