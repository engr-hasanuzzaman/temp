Rails.application.routes.draw do
  devise_for :users
  root to: 'users#index'
  resources :todos
  resources :users
  scope :auth do
    get 'is_signed_in', to: 'auth#is_signed_in?'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
