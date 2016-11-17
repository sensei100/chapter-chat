class Club < ApplicationRecord
  has_many :books
  has_many :users
  has_one :currentbook

  accepts_nested_attributes_for :currentbook
  
end
