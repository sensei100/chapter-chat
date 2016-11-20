class Club < ApplicationRecord
  has_many :posts
  has_many :users
  has_one :currentbook

  accepts_nested_attributes_for :currentbook
  
end
