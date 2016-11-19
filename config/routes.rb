Rails.application.routes.draw do
  root 'application#index'
  
  devise_for :users, path: 'auth', path_names: { sign_in: 'login', sign_out: 'logout', registration: 'register', sign_up: 'cmon_let_me_in' }
        
       
 
    

  
  resources :clubs, only: [:create, :destroy, :update, :index, :show]
  resources :books, only: [:create, :destroy, :update, :index, :show]
  resources :currentbooks, only: [:create, :destroy, :update, :index, :show]
  resources :posts, only: [:create, :destroy, :update, :index, :show] do
    resources :comments, only: [:create, :destroy, :update, :index, :show]
  end
end
