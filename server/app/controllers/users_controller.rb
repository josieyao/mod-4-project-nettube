    class UsersController < ApplicationController
    skip_before_action  :logged_in?, only: [ :authenticate , :index]
    
    def create
        user = User.create(user_params)
        render json: user
    end
    
    def index
        render json: User.all 
    end
    
    def show
        render json: selected_user
    end

    def authenticate
        user = User.find_by(user_name: params[:user_name])
        
        if user.authenticate(params[:password])
            render json: user, methods: [ :auth_token ]
        else
            render json: { error: true, message: 'Login Failed' }
        end
    end
    
    def update
        selected_user.update(user_params)
        render json: selected_user
    end
    
    def destroy
        selected_user.destroy
        render json: selected_user
    end
    
    def user_params
        params.permit(:name, :password)
    end
    
    def define_selected_user
        if params[:id]
            @selected_user = User.find(params[:id])
        else
            @selected_user = User.new
        end
    end
    
    def selected_user
        @selected_user
    end

    def as_json(*)
        super.except('password_digest')
    end
end
