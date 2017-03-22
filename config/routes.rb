Rails.application.routes.draw do
  root 'pages#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  %w(
    001-signup
    002-checkout
    003-landingpage
    ).each do |page|
      get page, controller: 'pages'
    end

end
