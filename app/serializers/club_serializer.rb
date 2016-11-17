class ClubSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :currentbook

  has_many :users
  has_many :books
  has_one :currentbook
  
end
