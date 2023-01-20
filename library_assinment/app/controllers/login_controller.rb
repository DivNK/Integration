class LoginController < ApplicationController
skip_before_action :verify_authenticity_token

def create
    usr = User.find_by('userEmail': params[:userEmail])
    puts "*****************Login Create****************"
    puts params
    if(usr.nil?)
        render json: "User Not Found"
    else
        if(usr.authenticate(params[:password]))
            session[:current_user_id]=usr.id
            
            puts"login successful"
            puts session[:current_user_id]
            render json: "Login Successfull"

        else
            render json: "Invalid Password"
        end
    end            
end
end
