Rails.application.routes.draw do
  resources :inspections
  resources :vehicles
  namespace :api do
    post '/signup', to: 'users#create'
    get '/me', to: 'users#show'
    get '/users', to: 'users#index'

    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

    get '/view', to: 'users#view'
  # post './bookings', to: 'users#create'
    resources :inspections, only: [:index, :create, :destroy, :update, ]
    resources :vehicles, only: [:index, :create, :destroy, :update, ]
    resources :bookings, only: [:index, :create, :destroy, :update]
    resources :admins, only: [:index, :update]
    resources :pasts, only: [:index]
    resources :reviews, only: [:index, :create]
  end

  resources :times
  resources :pasts

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
