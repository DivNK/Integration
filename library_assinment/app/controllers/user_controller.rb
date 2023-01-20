require 'bcrypt'
class UserController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        puts "******************User Index***********************"
        curr_usr=User.find_by_id(session[:current_user_id])
        if(curr_usr.nil?)
            render json: "Not logged in"
        elsif(curr_usr.userEmail !="admin.lib@gmail.com")
            render json: curr_usr
        else
            render json: User.all
        end
        # render json: User.all
end


    def create

            puts "******************User Create***********************"


          p=User.create('userName': params[:userName],
            'userEmail': params[:userEmail],
            'password': params[:password])
             
        #   puts p
          render json: "Data Added"
            e
    end
    def show
        v = User.all
        render json: v

    end
    def update
        puts "******************User Update***********************"
    curr_usr=User.find_by_id(session[:current_user_id])
    if(curr_usr.nil?)
        render json:"Please login to update"
    else
        
        p=User.find_by('userEmail': params[:userEmail])
        p.update( 'password': params[:password] )
        render json: "Password Updated"
    end
end

end
