class Api::VehiclesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
       vehicles = Vehicle.order("created_at ASCE").limit(20)


       render json: vehicles    
    end 

    def create     
        # user = User.find_by(id: session[:user_id])   
        vehicle =Vehicle.create!(vehicles_params)
        # review = @current_user.reviews.create!(review_params)
        # booking = User.first.bookings.create!(booking_params)
        # booking = Booking.create!(booking_params)
        # byebug
        render json: vehicle, status: :created
    end 

    private 
    def vehicles_params 
        params.permit(:user_id ,:model,:chasisnumber)
    end


    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found 
        render json: {errors: "not found"}, status: :not_found
    end
end
