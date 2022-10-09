class Api::VehiclesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
       vehicles = vehicle.order("created_at DESC").limit(3)
    #    vehicle.order("created_at DESC").limit(3)
    # Post.where('id > 10').limit(20).order('id asc').except(:order)

       render json: vehicles    
    end 

    def create     
        user = User.find_by(id: session[:user_id])   
        vehicle = user.vehicles.create!(vehicle_params)
        # vehicle = @current_user.vehicles.create!(vehicle_params)
        # booking = User.first.bookings.create!(booking_params)
        # booking = Booking.create!(booking_params)
        # byebug
        render json: vehicle, status: :created
    end 

    private 
    def vehicle_params 
        params.permit(:service, :vehicle)
    end


    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found 
        render json: {errors: "not found"}, status: :not_found
    end
end
