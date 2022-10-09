class Api::VehicleSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :numberplate, :chasisnumber, :model
  belongs_to :user
end
