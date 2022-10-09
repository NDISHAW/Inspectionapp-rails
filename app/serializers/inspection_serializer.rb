class InspectionSerializer < ActiveModel::Serializer
  attributes :id, :vehicle_id, :offence, :fine, :servicecharge, :status
end
