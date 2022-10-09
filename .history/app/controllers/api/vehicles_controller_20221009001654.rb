class Api::VehiclesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
       vehicles = Vehicle.order("created_at DESC").limit(20)
    #    Review.order("created_at DESC").limit(3)
    # Post.where('id > 10').limit(20).order('id asc').except(:order)

       render json: vehicles    
    end 

    def create     
        user = User.find_by(id: session[:user_id])   
        vehicle = user.vehicles.create!(vehicles_params)
        # review = @current_user.reviews.create!(review_params)
        # booking = User.first.bookings.create!(booking_params)
        # booking = Booking.create!(booking_params)
        # byebug
        render json: vehicle, status: :created
    end 

    private 
    def vehicles_params 
        params.permit(:user_id, :numberplate
,:model)
    end


    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found 
        render json: {errors: "not found"}, status: :not_found
    end
end
