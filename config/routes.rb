Rails.application.routes.draw do
  root 'application#index'
  devise_for :users

  resources :users, only: [:show, :edit]
  
  resources :clubs, only: [:create, :destroy, :update, :index, :show]
  resources :books, only: [:create, :destroy, :update, :index, :show]
  resources :currentbooks, only: [:create, :destroy, :update, :index, :show]
  resources :posts, only: [:create, :destroy, :update, :index, :show] do
    resources :comments, only: [:create, :destroy, :update, :index, :show]
  end
end
